"use client"

import Link from "next/link"
import Logo from "./Logo"
import { Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-10">

      <div className="max-w-[1400px] mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-16 mb-20">

          {/* Brand */}
          <div className="text-center flex flex-col flex-nowarp jutify-center items-center">
            <Logo />
            <p className="mt-6 font-poppins text-sm text-white/70 max-w-xs leading-relaxed">
              Capturing timeless moments with elegance and emotion.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-serif tracking-[0.3em] uppercase text-xs mb-6 text-white/60">
              Navigation
            </p>

            <div className="flex flex-col gap-4 font-serif text-lg">
              <Link href="/" className="hover:opacity-70 transition">
                Home
              </Link>
              <Link href="/gallery" className="hover:opacity-70 transition">
                Gallery
              </Link>
              <Link href="/contact" className="hover:opacity-70 transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-serif tracking-[0.3em] uppercase text-xs mb-6 text-white/60">
              Connect
            </p>

            <div className="space-y-4 font-poppins text-sm text-white/70">

              <p>
                <a href="mailto:atulakku99@gmail.com" className="hover:text-white transition">
                  atulakku99@gmail.com
                </a>
              </p>

              <p>
                <a href="tel:08080470280" className="hover:text-white transition">
                  080804 70280
                </a>
              </p>

              <div className="flex gap-5 mt-4">

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <Facebook size={18} />
                </a>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-white/50 font-poppins text-xs tracking-wide">
          © {new Date().getFullYear()} JP Photography. All Rights Reserved.
        </div>

      </div>

    </footer>
  )
}