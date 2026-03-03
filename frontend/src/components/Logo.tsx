import Image from "next/image"

export default function Logo({ size = "text-5xl" }: { size?: string }) {
  return (
      <>
          <Image
            src="/logo-v2.png"
            alt="Client Logo"
            width={150}
            height={150}
            priority
            className="object-contain p-4"
          />
      </>
  )
}