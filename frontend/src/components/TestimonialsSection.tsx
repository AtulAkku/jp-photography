"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

import { urlFor } from "@/lib/sanity"
import { Testimonial } from "@/types"

interface Props {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: Props) {
  if (!testimonials?.length) return null

  return (
    <section className="pb-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-serif tracking-[0.35em] uppercase text-sm text-gray-500 mb-6">
            Testimonials
          </p>

          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Words From Our Clients
          </h2>

          <div className="w-20 h-[1px] bg-black mx-auto mt-8"></div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="pb-16"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <div className="text-center max-w-3xl mx-auto">

                {testimonial.clientImage && (
                  <img
                    src={urlFor(testimonial.clientImage).width(300).url()}
                    alt={testimonial.clientName}
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-10"
                  />
                )}

                <p className="font-serif text-2xl md:text-3xl leading-relaxed text-gray-800 mb-5">
                  “{testimonial.message}”
                </p>

                <p className="font-poppins text-xl tracking-[0.3em] uppercase text-gray-500">
                  {testimonial.clientName}
                </p>
                <div className="my-10">
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}