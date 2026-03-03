import Link from "next/link"
import { urlFor } from "@/lib/sanity"
import { Gallery } from "@/types"

interface Props {
  galleries: Gallery[]
}

export default function GallerySection({ galleries }: Props) {
  return (
    <section className="max-w-6xl mx-auto py-5 px-6 md:px-16 bg-white">

      <div className="max-w-[1400px] mx-auto px-6 mb-20 text-center">

        <p className="font-serif tracking-[0.35em] uppercase text-xl text-gray-500 mb-6">
          Our Work
        </p>

        <h2 className="font-serif text-4xl md:text-6xl leading-tight">
          Curated Collections
        </h2>

        <div className="w-20 h-[1px] bg-black mx-auto mt-8"></div>

      </div>

      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-y-32 gap-x-16">

        {galleries?.map((gallery) => (
        <Link
          key={gallery._id}
          href={`/gallery/${gallery.slug}`}
          className="group block"
        >

          <div className="overflow-hidden relative">

            <img
              src={urlFor(gallery.coverImage).width(1200).url()}
              alt={gallery.title}
              className="w-full h-[500px] object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />

            {/* Soft overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700"></div>

          </div>

          <div className="mt-8 text-center">

            <h3 className="font-serif text-2xl md:text-3xl">
              {gallery.title}
            </h3>

          </div>

        </Link>
        ))}

      </div>

      {/* Extra bottom spacing because text box overlaps */}
      <div className="h-20" />

    </section>
  )
}