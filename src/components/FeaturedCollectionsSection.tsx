"use client"

import { useRef, useState, useEffect } from "react"
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const collections = [
  {
    title: "Earrings",
    image: "/images/featured-earrings.png",
    alt: "Sculptural Earrings",
  },
  {
    title: "Rings",
    image: "/images/featured-rings.png",
    alt: "Gold Rings Stack",
  },
  {
    title: "Bracelets",
    image: "/images/featured-bracelets.png",
    alt: "Gold Bracelets Stack",
  },
  {
    title: "Earrings",
    image: "/images/featured-earrings-2.png",
    alt: "Gold Hoop Earrings",
  },
  {
    title: "Rings",
    image: "/images/featured-rings-2.png",
    alt: "Chunky Gold Rings",
  },
  {
    title: "Bracelets",
    image: "/images/featured-bracelets-2.png",
    alt: "Chain Link Bracelet",
  },
]

export function FeaturedCollectionsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isAtStart, setIsAtStart] = useState(true)
  const [isAtEnd, setIsAtEnd] = useState(false)

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current
      setIsAtStart(scrollLeft <= 0)
      setIsAtEnd(Math.abs(scrollLeft + clientWidth - scrollWidth) < 1)
    }
  }

  useEffect(() => {
    checkScrollPosition()
    window.addEventListener("resize", checkScrollPosition)
    return () => window.removeEventListener("resize", checkScrollPosition)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        scroll("left")
      } else if (e.key === "ArrowRight") {
        scroll("right")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400 // Approx card width
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className='w-full min-h-screen bg-zinc-50 py-24 pl-8 md:pl-16 lg:pl-24 flex flex-col justify-center overflow-hidden'>
      {/* Header */}
      <div className='flex items-center justify-between mb-12 pr-8 md:pr-16 lg:pr-24'>
        <h2 className='text-zinc-900 font-bold uppercase tracking-wider'>
          Collections
        </h2>
        <div className='flex gap-4'>
          <button
            onClick={() => scroll("left")}
            disabled={isAtStart}
            className={cn(
              "transition-colors cursor-pointer",
              isAtStart
                ? "text-zinc-400 cursor-not-allowed"
                : "text-zinc-900 hover:text-zinc-600"
            )}
          >
            <ArrowLeft className='w-5 h-5' />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={isAtEnd}
            className={cn(
              "transition-colors cursor-pointer",
              isAtEnd
                ? "text-zinc-400 cursor-not-allowed"
                : "text-zinc-900 hover:text-zinc-600"
            )}
          >
            <ArrowRight className='w-5 h-5' />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScrollPosition}
        className='flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mr-8 md:-mr-16 lg:-mr-24 pr-8 md:pr-16 lg:pr-24'
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {collections.map((item, index) => (
          <Link
            key={index}
            href='#'
            className='group relative h-[70vh] min-w-[85vw] md:min-w-[40vw] lg:min-w-[28vw] snap-center overflow-hidden flex-shrink-0'
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className='object-cover transition-transform duration-700 group-hover:scale-105'
            />

            {/* Overlay Gradient */}
            <div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80' />

            {/* Content */}
            <div className='absolute bottom-8 left-8 right-8 flex items-center justify-between text-white border-t-2 border-t-transparent group-hover:border-t-zinc-50 transition-colors pt-6'>
              <span className='font-serif text-3xl'>{item.title}</span>
              <ArrowUpRight className='w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
