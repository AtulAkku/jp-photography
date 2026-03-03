"use client"

import { useState } from "react"
import GalleryGrid from "@/components/GalleryGrid"

interface Gallery {
  _id: string
  title: string
  category: {
    _id: string
    title: string
  }
  media: any[]
}

interface Props {
  galleries: Gallery[]
}

export default function GalleryContent({ galleries }: Props) {
  const categories = Array.from(
    new Map(
      galleries.map((g) => [g.category._id, g.category])
    ).values()
  )

  const [selected, setSelected] = useState<string>("All")

  const filtered =
    selected === "All"
      ? galleries
      : galleries.filter((g) => g.category.title === selected)

  return (
    <main className="pb-32 ">

      {/* COVER WRAPPER */}
      <section className="relative text-white">

        {/* Background */}
        <img
          src="/gallery-cover.jpg"
          alt="Gallery Cover"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 pt-40 pb-32 px-6 text-center">

          {/* Page Title */}
          <h1 className="font-serif text-5xl md:text-7xl mb-20">
            {selected === "All" ? "Gallery Collection" : selected}
          </h1>

          {/* Categories Label */}
          <p className="font-serif tracking-[0.35em] uppercase text-sm text-white/70 mb-8">
            Categories
          </p>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-10">

            <button
              onClick={() => setSelected("All")}
              className={`font-serif text-lg tracking-wide transition-all duration-300 relative ${
                selected === "All"
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              All
              {selected === "All" && (
                <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-white"></span>
              )}
            </button>

            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => setSelected(cat.title)}
                className={`font-serif text-lg tracking-wide transition-all duration-300 relative ${
                  selected === cat.title
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {cat.title}
                {selected === cat.title && (
                  <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-white"></span>
                )}
              </button>
            ))}

          </div>

          {/* <div className="w-16 h-[1px] bg-white mx-auto"></div> */}

        </div>

      </section>

      {/* Galleries grouped by title */}
      {filtered.map((gallery) => (
        <section key={gallery._id} className="mt-15 mb-32 md:mb-40 max-w-[1400px] mx-auto">

          <h2 className="font-serif text-5xl md:text-6xl text-center mb-8">
            {gallery.title}
          </h2>
          <div className="text-center mb-16">
            <p className="font-serif tracking-[0.3em] uppercase text-sm text-gray-500 mb-6">
              Collection
            </p>
            <div className="w-16 h-[1px] bg-black mx-auto"></div>
          </div>
          <GalleryGrid media={gallery.media} />

        </section>
      ))}

    </main>
  )
}