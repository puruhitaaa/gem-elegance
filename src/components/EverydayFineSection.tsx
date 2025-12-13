import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function EverydayFineSection() {
  return (
    <section className='w-full min-h-screen bg-white py-24 px-8 md:px-16 lg:px-24'>
      {/* Header */}
      <div className='text-center mb-16'>
        <h2 className='text-[#eab308] font-bold uppercase tracking-wider mb-4'>
          Celebrate your journey
        </h2>
        <h3 className='text-5xl md:text-6xl font-serif text-zinc-900'>
          Everyday Fine <span className='italic font-semibold'>Jewelry</span>
        </h3>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 h-full'>
        {/* Left Card */}
        <div className='flex flex-col gap-6'>
          <div className='relative w-full aspect-[4/3] bg-[#faefe5] overflow-hidden'>
            <Image
              src='/images/everyday-hands.png'
              alt='Hands wearing rings'
              fill
              className='object-cover transition-transform duration-700 hover:scale-105'
            />
          </div>
          <div className='space-y-2'>
            <h4 className='font-bold uppercase tracking-widest text-zinc-900'>
              Create Your Own Engagement Ring
            </h4>
            <Link
              href='#'
              className='inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-zinc-600 hover:text-zinc-900 transition-colors border-b border-zinc-300 hover:border-zinc-900 pb-0.5'
            >
              Buy Now <ArrowUpRight className='w-3 h-3' />
            </Link>
          </div>
        </div>

        {/* Right Card */}
        <div className='flex flex-col gap-6'>
          <div className='relative w-full aspect-[4/3] bg-[#faefe5] overflow-hidden'>
            <Image
              src='/images/everyday-earring.png'
              alt='Pearl Earring'
              fill
              className='object-cover transition-transform duration-700 hover:scale-105'
            />
          </div>
          <div className='space-y-2'>
            <h4 className='text-sm font-bold uppercase tracking-widest text-zinc-900'>
              Design Your Dream Rings
            </h4>
            <Link
              href='#'
              className='inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-zinc-600 hover:text-zinc-900 transition-colors border-b border-zinc-300 hover:border-zinc-900 pb-0.5'
            >
              Buy Now <ArrowUpRight className='w-3 h-3' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
