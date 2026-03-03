import { urlFor } from "@/lib/sanity"
import { About } from "@/types"
import { Instagram, Facebook } from "lucide-react"

interface Props {
  about: About[]
}

export default function AboutSection({ about }: Props) {
  if (!about || about.length === 0) return null

  return (
    <section className="bg-white">
        <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-15 py-5 text-center">
          About The Artists
        </h2>

      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {about?.map((artist: any)=> (
            <div
              key={artist._id}
              className="grid md:grid-cols-2 gap-4 items-center mb-32"
            >
              {/* Image */ }
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full border border-gray-200"></div>
                <img
                  src={urlFor(artist.profileImage).width(900).url()}
                  alt={artist.name}
                  className="w-full h-[550px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="max-w-xl">

                {/* <p className="font-serif tracking-[0.35em] uppercase text-l text-gray-500 mb-6">
                  About the Artist
                </p> */}

                <h2 className="font-serif text-4xl mt-8">
                  - {artist.name}
                </h2>

                <p className="font-poppins text-lg leading-relaxed text-justify text-gray-700 mb-10 mt-4">
                  {artist.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-6 mb-8">

                  {artist.instagram && (
                    <a
                      href={artist.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-black hover:text-white transition"
                    >
                      <Instagram size={20} />
                    </a>
                  )}

                  {artist.facebook && (
                    <a
                      href={artist.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-black hover:text-white transition"
                    >
                      <Facebook size={20} />
                    </a>
                  )}

                </div>

                <div className="w-16 h-[1px] bg-black"></div>

              </div>
            </div>
        ))}
      </div>

    </section>
  )
}