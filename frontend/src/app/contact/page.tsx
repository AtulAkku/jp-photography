import { getContactPageData } from "@/lib/queries"
import { urlFor } from "@/lib/sanity"

export default async function ContactPage() {
  const data = await getContactPageData()

  return (
    <main>

      {/* COVER */}
      <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center text-white overflow-hidden">

        {data?.coverImage && (
          <img
            src={urlFor(data.coverImage).width(2000).url()}
            alt="Contact Cover"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
        )}

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="font-serif tracking-[0.35em] uppercase text-sm text-white/70 mb-6">
            Contact
          </p>

          <h1 className="font-serif text-5xl md:text-7xl mb-6">
            {data?.title}
          </h1>

          {data?.subtitle && (
            <p className="font-poppins text-white/80 text-lg">
              {data.subtitle}
            </p>
          )}

          <div className="w-16 h-[1px] bg-white mx-auto mt-8"></div>
        </div>

      </section>

      {/* CONTENT */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-20">

          {/* LEFT */}
          <div className="space-y-10 font-poppins text-[17px] leading-[1.9] text-gray-700">

            {data?.phone && (
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-2">
                  Phone
                </p>
                <a href={`tel:${data.phone}`} className="hover:text-black transition">
                  {data.phone}
                </a>
              </div>
            )}

            {data?.email && (
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-2">
                  Email
                </p>
                <a href={`mailto:${data.email}`} className="hover:text-black transition">
                  {data.email}
                </a>
              </div>
            )}

            {data?.locations?.map((loc: any, index: number) => (
              <div key={index}>
                <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-2">
                  {loc.city}
                </p>
                <p>{loc.address}</p>
              </div>
            ))}

            {data?.whatsapp && (
              <a
                href={`https://wa.me/${data.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 border border-black px-10 py-4 font-serif tracking-wide hover:bg-black hover:text-white transition duration-300"
              >
                Chat on WhatsApp
              </a>
            )}

          </div>

          {/* RIGHT */}
          {data?.mapEmbedUrl && (
            <div className="rounded-2xl overflow-hidden">
              <iframe
                src={data.mapEmbedUrl}
                width="100%"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          )}

        </div>
      </section>

    </main>
  )
}