import { client, urlFor } from "@/lib/sanity"
import GalleryGrid from "@/components/GalleryGrid"

async function getGallery(slug: string) {
  return await client.fetch(
    `*[_type == "gallery" && slug.current == $slug][0]{
        title,
        description,
        highlightVideo,
        coverImage,
        media[]{
            ...,
            asset->
        }
    }`,
    { slug }
  )
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const gallery = await getGallery(slug)

  if (!gallery) {
    return <div className="p-10">Gallery not found</div>
  }

  const firstImage =
    gallery.media?.find((item: any) => item._type === "image")

  function getYouTubeEmbedUrl(url: string) {
    const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/
    const match = url.match(regExp)
    return match ? `https://www.youtube.com/embed/${match[1]}` : ""
  }

  return (
    <main>

      {/* HERO SECTION */}
      {gallery.coverImage && (
        <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center text-white">

          {/* Background */}
          <img
            src={urlFor(gallery.coverImage).width(2000).url()}
            alt={gallery.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

          {/* Content */}
          <div className="relative z-10 text-center max-w-3xl px-6">
            <p className="font-poppins text-xs tracking-[0.3em] uppercase text-white/70 mb-6">
              Gallery Collection
            </p>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6">
              {gallery.title}
            </h1>

            {gallery.description && (
              <p className="font-poppins text-[17px] md:text-lg leading-[1.9] text-gray-200 max-w-2xl mx-auto">
                {gallery.description}
              </p>
            )}
          </div>

        </section>
      )}

      {/* CONTENT SECTION */}
      <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-25">

        {gallery.highlightVideo && (
          <div className="mb-20 aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={getYouTubeEmbedUrl(gallery.highlightVideo)}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        )}

        <GalleryGrid media={gallery.media} />

      </div>

    </main>
  )
}