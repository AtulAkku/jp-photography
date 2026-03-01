import { client, urlFor } from "@/lib/sanity"
import Link from "next/link"



async function getHomeData() {
  return await client.fetch(`
    {
      "galleries": *[_type == "gallery" && featured == true]{
        _id,
        title,
        "slug": slug.current,
        coverImage
      },
      "testimonials": *[_type == "testimonial"]{
        _id,
        clientName,
        message,
        clientImage
      },
      "about": *[_type == "about"][0]{
        name,
        bio,
        profileImage,
        instagram,
        facebook
      }
    }
  `)
}

export default async function Home() {
  const data = await getHomeData()

  const { galleries, testimonials, about } = data

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">Galleries</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {galleries?.map((gallery: any) => (
          <Link
            key={gallery._id}
            href={`/gallery/${gallery.slug}`}
            className="block group"
          >
            <div className="overflow-hidden rounded-2xl">
              {gallery.coverImage && (
                <img
                  src={urlFor(gallery.coverImage).width(800).url()}
                  className="w-full transition-transform duration-300 group-hover:scale-105"
                />
              )}
            </div>

            <h3 className="mt-4 text-xl font-semibold">
              {gallery.title}
            </h3>
          </Link>
        ))}
      </div>
      <section className="py-20 border-t mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {about?.profileImage && (
            <img
              src={urlFor(about.profileImage).width(600).url()}
              className="rounded-2xl"
            />
          )}

          <div>
            <h2 className="text-4xl font-bold mb-4">
              About {about?.name}
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              {about?.bio}
            </p>

            <div className="flex gap-6">
              {about?.instagram && (
                <a href={about.instagram} target="_blank">
                  Instagram
                </a>
              )}
              {about?.facebook && (
                <a href={about.facebook} target="_blank">
                  Facebook
                </a>
              )}
            </div>
          </div>

        </div>
      </section>
      <section className="py-20 bg-gray-100 mt-20">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            What Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials?.map((testimonial: any) => (
              <div
                key={testimonial._id}
                className="bg-white p-8 rounded-2xl shadow-md"
              >
                {testimonial.clientImage && (
                  <img
                    src={urlFor(testimonial.clientImage).width(100).url()}
                    className="w-16 h-16 rounded-full mb-4"
                  />
                )}

                <p className="mb-4 italic">
                  “{testimonial.message}”
                </p>

                <h4 className="font-semibold">
                  — {testimonial.clientName}
                </h4>
              </div>
            ))}
          </div>

        </div>
      </section>            
    </main>
  )
}