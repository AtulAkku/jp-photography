"use client"

import { useEffect, useState } from "react"
import { urlFor } from "@/lib/sanity"

interface Hero {
  headlines: string[]
  subtitle?: string
  backgroundImage?: any
  videoUrl?: string
}

interface Props {
  hero: Hero
}

function getYoutubeId(url: string) {
  try {
    const urlObj = new URL(url)

    if (urlObj.hostname.includes("youtu.be")) {
      return urlObj.pathname.split("/")[1]
    }

    return urlObj.searchParams.get("v")
  } catch {
    return null
  }
}

export default function HeroSection({ hero }: Props) {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    if (!hero.headlines?.length) return

    const interval = setInterval(() => {
      setFade(false)

      setTimeout(() => {
        setIndex((prev) =>
          prev === hero.headlines.length - 1 ? 0 : prev + 1
        )
        setFade(true)
      }, 400)
    }, 4000)

    return () => clearInterval(interval)
  }, [hero.headlines])

  const videoId = hero.videoUrl ? getYoutubeId(hero.videoUrl) : null

  return (
    <section className="relative h-screen overflow-hidden text-white flex items-center justify-center">

      {/* Background */}
      {videoId ? (
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&playsinline=1`}
            className="absolute top-1/2 left-1/2 w-[177.77vh] h-[100vh] min-w-[100vw] min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      ) : (
        hero.backgroundImage && (
          <img
            src={urlFor(hero.backgroundImage).width(2000).url()}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
        )
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        {/* Animated Headline */}
        <div className="text-center px-6 max-w-4xl">

          <h1 className="font-serif text-3xl md:text-5xl tracking-[0.25em] uppercase text-white/80">
            Capturing
          </h1>

          {/* Animated Underline */}
          <div className="flex justify-center mt-6">
            <span
              key={index}
              className="h-[2px] bg-white w-24 animate-underline"
            />
          </div>
          <h2
            className={`font-script text-5xl md:text-9xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)] mt-6 transition-all duration-500 ${
              fade
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            {hero.headlines?.[index]}
          </h2>

        </div>


        {hero.subtitle && (
          <p className="mt-8 text-lg md:text-xl text-gray-200 font-light">
            {hero.subtitle}
          </p>
        )}

      </div>
    </section>
  )
}