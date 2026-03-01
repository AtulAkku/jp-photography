"use client"

import Masonry from "react-masonry-css"
import { urlFor } from "@/lib/sanity"

interface GalleryGridProps {
  media: any[]
}

export default function GalleryGrid({ media }: GalleryGridProps) {
  return (
    <Masonry
      breakpointCols={{ default: 3, 768: 2, 500: 1 }}
      className="flex gap-4"
      columnClassName="space-y-4"
    >
      {media?.map((item: any, index: number) => {

        // IMAGE
        if (item._type === "image") {
          return (
            <img
              key={index}
              src={urlFor(item).width(1000).format("webp").url()}
              className="rounded-xl w-full transition-transform duration-300 hover:scale-105"
              alt="gallery media"
            />
          )
        }

        // VIDEO
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
  )
}