"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const items = [
  {
    title: "Our Blogs",
    description: "Stay up to date with our latest blogs.",
    link: "#",
    image: "/images/fashion-blog.png",
    alt: "Hand with gold rings",
  },
  {
    title: "Our News",
    description: "Stay up to date with our latest news.",
    link: "#",
    image: "/images/fashion-news.png",
    alt: "Gold ring detail",
  },
  {
    title: "Latest Updates",
    description: "Stay up to date with our latest updates.",
    link: "#",
    image: "/images/fashion-updates.png",
    alt: "Hand with colorful rings",
  },
]

export function FashionAndFinesseSection() {
  return (
    <section className='w-full bg-white py-24 px-8 md:px-16 lg:px-24 flex flex-col items-center'>
      {/* Header */}
      <div className='text-center mb-16'>
        <h3 className='text-amber-500 font-medium tracking-wide mb-4 uppercase'>
          Our Blog, News, Updates
        </h3>
        <h2 className='font-serif text-5xl md:text-6xl text-zinc-900'>
          Fashion and <span className='italic font-semibold'>Finesse</span>
        </h2>
      </div>

      {/* Grid Container */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full'>
        {items.map((item) => (
          <div key={item.title} className='flex flex-col group'>
            {/* Image Container */}
            <div className='relative w-full aspect-4/3 mb-8 overflow-hidden'>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-105'
              />
            </div>

            {/* Content */}
            <div className='flex flex-col items-start'>
              <h3 className='font-serif text-3xl text-zinc-900 mb-3'>
                {item.title}
              </h3>
              <p className='text-zinc-600 mb-6 font-medium'>
                {item.description}
              </p>

              <Link
                href={item.link}
                className='inline-flex items-center gap-2 text-zinc-900 font-bold uppercase tracking-wider text-sm hover:text-amber-600 transition-colors border-b border-zinc-900 pb-0.5 hover:border-amber-600'
              >
                Discover
                <ArrowUpRight className='w-4 h-4' />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
