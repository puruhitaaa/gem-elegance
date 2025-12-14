"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Separator } from "./ui/separator"

const products = [
  {
    id: "earrings-1",
    title: "Montana Majesty Marquise Earrings",
    price: "12.99",
    image: "/images/new-earrings.png",
    alt: "Gold Drop Earrings",
  },
  {
    id: "necklace-1",
    title: "Platinum Eternal Necklace",
    price: "34.23",
    image: "/images/new-necklace.png",
    alt: "Gold Spike Necklace",
  },
  {
    id: "rings-1",
    title: "Lab-Grown Diamond Ring",
    price: "09.89",
    image: "/images/new-rings.png",
    alt: "Interlocked Gold Rings",
  },
  {
    id: "bracelet-1",
    title: "Sapphire Whisper Bracelet",
    price: "16.49",
    image: "/images/new-bracelet.png",
    alt: "Gold Panther Bracelet",
  },
  {
    id: "chain-1",
    title: "Starlit Montana Chain",
    price: "04.69",
    image: "/images/new-chain.png",
    alt: "Silver Chain Necklace",
  },
  {
    id: "earrings-2",
    title: "Montana Majesty Marquise Earrings",
    price: "12.99",
    image: "/images/new-earrings.png",
    alt: "Gold Drop Earrings 2",
  },
  {
    id: "necklace-2",
    title: "Platinum Eternal Necklace",
    price: "34.23",
    image: "/images/new-necklace.png",
    alt: "Gold Spike Necklace 2",
  },
]

export function NewProductsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isAtStart, setIsAtStart] = useState(true)
  const [isAtEnd, setIsAtEnd] = useState(false)

  const checkScrollPosition = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current
      setIsAtStart(scrollLeft <= 0)
      setIsAtEnd(Math.abs(scrollLeft + clientWidth - scrollWidth) < 1)
    }
  }, [])

  useEffect(() => {
    checkScrollPosition()
    window.addEventListener("resize", checkScrollPosition)
    return () => window.removeEventListener("resize", checkScrollPosition)
  }, [checkScrollPosition])

  const scroll = useCallback((direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300 // Approx card width
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
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
  }, [scroll])

  return (
    <section className='w-full bg-white py-24 pl-8 md:pl-16 lg:pl-24 flex flex-col justify-center overflow-hidden'>
      {/* Header */}
      <div className='flex items-center justify-between mb-12 pr-8 md:pr-16 lg:pr-24'>
        <h2 className='text-zinc-900 font-bold uppercase tracking-wider'>
          New Products
        </h2>
        <div className='flex gap-4'>
          <button
            type='button'
            onClick={() => scroll("left")}
            disabled={isAtStart}
            className={cn(
              "transition-colors cursor-pointer",
              isAtStart
                ? "text-zinc-300 cursor-not-allowed"
                : "text-zinc-900 hover:text-zinc-600"
            )}
          >
            <ArrowLeft className='w-5 h-5' />
          </button>
          <button
            type='button'
            onClick={() => scroll("right")}
            disabled={isAtEnd}
            className={cn(
              "transition-colors cursor-pointer",
              isAtEnd
                ? "text-zinc-300 cursor-not-allowed"
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
        className='flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mr-8 md:-mr-16 lg:-mr-24 pr-8 md:pr-16 lg:pr-24'
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((item) => (
          <Link
            key={item.id}
            href='#'
            className='group relative min-w-62.5 md:min-w-75 lg:min-w-75 snap-center shrink-0 flex flex-col'
          >
            {/* Image Container */}
            <div className='relative w-full aspect-square mb-6 bg-transparent'>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className='object-contain transition-transform duration-500 group-hover:scale-105'
              />
            </div>

            {/* Content */}
            <div className='flex flex-col gap-2'>
              <span className='text-zinc-500 text-sm'>Starting from</span>
              <span className='font-serif text-2xl text-zinc-900 font-semibold'>
                ${item.price}
              </span>
              <Separator className='bg-zinc-200' />
              <h3 className='font-bold text-sm text-zinc-900 uppercase tracking-wide mt-2 leading-relaxed'>
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
