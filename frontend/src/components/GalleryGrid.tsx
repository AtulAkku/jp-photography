"use client"

import { useState, useEffect } from "react"
import Masonry from "react-masonry-css"
import { urlFor } from "@/lib/sanity"

interface GalleryGridProps {
  media: any[]
}

export default function GalleryGrid({ media }: GalleryGridProps) {
  const images = media?.filter((item) => item._type === "image")

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const close = () => setSelectedIndex(null)

  const next = () => {
    if (selectedIndex === null) return
    setSelectedIndex((prev) =>
      prev !== null && prev < images.length - 1 ? prev + 1 : 0
    )
  }

  const prev = () => {
    if (selectedIndex === null) return
    setSelectedIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : images.length - 1
    )
  }

  // ESC key close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  })

  return (
    <>
      {/* Masonry Grid */}
      <Masonry
        breakpointCols={{ default: 3, 768: 2, 500: 1 }}
        className="flex gap-4"
        columnClassName="space-y-4"
      >
        {media?.map((item: any, index: number) => {

          if (item._type === "image") {
            const imageIndex = images.findIndex(
              (img) => img.asset._id === item.asset._id
            )

            return (
              <img
                key={index}
                src={urlFor(item).width(1000).format("webp").url()}
                className="rounded-xl w-full cursor-pointer transition-transform duration-300 hover:scale-105"
                alt="gallery"
                onClick={() => setSelectedIndex(imageIndex)}
              />
            )
          }

          if (item._type === "video") {
            return (
              <video
                key={index}
                controls
                className="rounded-xl w-full"
              >
                <source src={item.asset?.url} type="video/mp4" />
              </video>
            )
          }

          return null
        })}
      </Masonry>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[999] p-6"
          onClick={close}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img
              src={urlFor(images[selectedIndex])
                .width(2000)
                .quality(100)
                .url()}
              className="w-full max-h-[85vh] object-contain rounded-lg"
              alt="fullscreen"
            />

            {/* Close Button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              ✕
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  )
}