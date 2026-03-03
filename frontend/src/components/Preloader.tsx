"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Logo from "./Logo"

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // 2 seconds

    return () => clearTimeout(timer)
  }, [])

//   if (!loading) return null

  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center z-[9999] bg-[#6ad57e] transition-opacity duration-700 ${
      loading ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}>
      <Image
        src="/Loading.gif"
        alt="JP Photography"
        width={300}
        height={300}
        className="animate-pulse"
      />

      <Logo/>

    </div>
  )
}