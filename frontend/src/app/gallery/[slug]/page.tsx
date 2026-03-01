import { client, urlFor } from "@/lib/sanity"
import GalleryGrid from "@/components/GalleryGrid"



async function getGallery(slug: string) {
  return await client.fetch(
    `*[_type == "gallery" && slug.current == $slug][0]{
        title,
        description,
        highlightVideo,
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
  const { slug } = await params   // ✅ unwrap params

  const gallery = await getGallery(slug)

  if (!gallery) {
    return <div className="p-10">Gallery not found</div>
  }

  function getYouTubeEmbedUrl(url: string) {
    const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regExp);
    return match ? `https://www.youtube.com/embed/${match[1]}` : "";
  }   

  return (
    <main className="p-10">
        <h1 className="text-4xl font-bold mb-4">{gallery.title}</h1>
        <p className="mb-8">{gallery.description}</p>
        {gallery.highlightVideo && (
        <div className="my-12 aspect-video">
        <iframe
            src={getYouTubeEmbedUrl(gallery.highlightVideo)}
            className="w-full h-full rounded-xl"
            allowFullScreen
        />
        </div>
        )}
        <GalleryGrid media={gallery.media} />
    </main>
  )
}