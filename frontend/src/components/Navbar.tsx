"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Logo from "./Logo"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled 
          ? "backdrop-blur-lg bg-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
          : "bg-transparent"}
      `}
    >
      <nav className="flex items-center">

        {/* Container */}
        <div className="max-w-[1400px] w-full mx-auto px-8 flex justify-between items-center">

          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`text-2xl ${scrolled ? "text-black" : "text-white"}`}
            >
              ☰
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-12 items-center">

            <Link
              href="/"
              className={`font-serif text-base md:text-lg tracking-[0.18em] uppercase transition-all duration-300 relative ${
                scrolled ? "text-black" : "text-white"
              } group`}
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/gallery"
              className={`font-serif text-base md:text-lg tracking-[0.18em] uppercase transition-all duration-300 relative ${
                scrolled ? "text-black" : "text-white"
              } group`}
            >
              Gallery
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/contact"
              className={`font-serif text-base md:text-lg tracking-[0.18em] uppercase transition-all duration-300 relative ${
                scrolled ? "text-black" : "text-white"
              } group`}
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>

          </div>

        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg px-8 py-6 space-y-6 text-center shadow-lg">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block font-serif text-lg uppercase tracking-widest text-black">
            Home
          </Link>
          <Link href="/gallery" onClick={() => setMenuOpen(false)} className="block font-serif text-lg uppercase tracking-widest text-black">
            Gallery
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block font-serif text-lg uppercase tracking-widest text-black">
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}