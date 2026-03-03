import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Preloader from "@/components/Preloader";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes, Playfair_Display, Poppins } from "next/font/google"
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-body",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-poppins",
})

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "JP Photography",
  description: "Capturing timeless moments with elegance.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${greatVibes.variable}
          ${playfair.variable}
          ${poppins.variable}
          font-sans antialiased
        `}
      >
        <Preloader />
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
