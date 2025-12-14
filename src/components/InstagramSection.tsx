"use client"

import Image from "next/image"
import Link from "next/link"

const instaImages = [
  {
    src: "/images/insta-1.png",
    alt: "Rainbow baguette gemstone ring",
  },
  {
    src: "/images/insta-2.png",
    alt: "Three stone marquise ring",
  },
  {
    src: "/images/insta-3.png",
    alt: "Amelia name necklace",
  },
  {
    src: "/images/insta-4.png",
    alt: "Hands with mixed metal jewelry",
  },
  {
    src: "/images/insta-5.png",
    alt: "Interlocked circle pendant",
  },
]

export function InstagramSection() {
  return (
    <section className='w-full bg-[#fcfaf9] py-24 flex flex-col items-center'>
      {/* Header */}
      <div className='text-center mb-16'>
        <h3 className='text-amber-500 font-bold tracking-wide mb-4 uppercase'>
          Follow Our Instagram Profile
        </h3>
        <h2 className='font-serif text-5xl md:text-6xl text-zinc-900'>
          Follow us in{" "}
          <span className='italic font-serif font-semibold'>Instagram</span>
        </h2>
      </div>

      {/* Grid Container */}
      <div className='w-full grid grid-cols-2 md:grid-cols-5'>
        {instaImages.map((item) => (
          <div
            key={item.alt}
            className='relative w-full aspect-square group overflow-hidden'
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className='object-cover transition-transform duration-500 group-hover:scale-110'
            />
            {/* Overlay on hover */}
            <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
          </div>
        ))}
      </div>

      {/* Footer Link */}
      <div className='mt-12'>
        <Link
          href='https://instagram.com'
          target='_blank'
          className='text-amber-600 font-bold text-lg border border-amber-200 px-8 py-3 bg-white hover:bg-amber-50 transition-colors uppercase tracking-widest'
        >
          @Gemelegance
        </Link>
      </div>
    </section>
  )
}
