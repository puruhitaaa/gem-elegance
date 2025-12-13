import Image from "next/image"
import Link from "next/link"

export function SeamlessExperienceSection() {
  return (
    <section className='flex flex-col lg:flex-row w-full min-h-screen'>
      {/* Left Side - Image & "Celebrate" Text */}
      <div className='w-full lg:w-1/2 relative bg-linear-to-br from-zinc-50 to-zinc-300 flex items-end p-8 md:p-16 lg:p-24 overflow-hidden'>
        {/* Necklace Image */}
        <div className='absolute top-0 left-0 right-0 h-[70%] flex justify-center pt-12 md:pt-24 pointer-events-none'>
          <div className='relative w-[80%] h-full max-w-lg'>
            <Image
              src='/images/collection-necklace.png'
              alt='Golden Necklace'
              fill
              className='object-contain drop-shadow-2xl'
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div className='relative z-10'>
          <h2 className='font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white drop-shadow-xs'>
            Celebrate
          </h2>
          <h2 className='font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-zinc-900 italic'>
            Life&apos;s Moments.
          </h2>
        </div>
      </div>

      {/* Right Side - Dark Background & Content */}
      <div className='w-full lg:w-1/2 bg-zinc-900 text-white flex flex-col justify-center p-8 md:p-16 lg:p-24 relative'>
        <div className='max-w-xl'>
          <h2 className='font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-12'>
            WE OFFER
            <br />
            A SEAMLESS
            <br />
            <span className='flex items-center gap-4 text-amber-500'>
              <span className='italic'>SHOPPING</span>
              {/* Diamond Icon */}
              <span className='inline-block w-4 h-4 md:w-5 md:h-5 bg-amber-500 transform rotate-45' />
            </span>
            EXPERIENCE
          </h2>

          <Link href='/collections' className='inline-block'>
            <button className='group bg-white text-zinc-900 px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-zinc-200 transition-colors duration-300'>
              Discover More
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
