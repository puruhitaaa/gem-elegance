import Image from "next/image"

export function Hero() {
  return (
    <section className='w-full grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-140px)]'>
      {/* Left Content */}
      <div className='flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 bg-white order-2 md:order-1'>
        <span className='text-[#a84408] font-bold tracking-[0.2em] mb-2 uppercase'>
          Discover
        </span>
        <h1 className='text-6xl lg:text-7xl font-serif text-zinc-900 leading-tight'>
          Premier <span className='italic font-semibold'>Jewelry</span>
          <br />
          Destination
        </h1>
      </div>

      {/* Right Images */}
      <div className='relative bg-[#faefe5] h-[50vh] md:h-auto order-1 md:order-2 flex overflow-hidden'>
        <div className='w-1/2 h-full relative border-r border-white/20'>
          <Image
            src='/images/hero-1.png'
            alt='Elegant jewelry on hand'
            fill
            className='object-cover'
            priority
          />
        </div>
        <div className='w-1/2 h-full relative'>
          <Image
            src='/images/hero-2.png'
            alt='Gold necklaces on stone'
            fill
            className='object-cover'
            priority
          />
        </div>
      </div>
    </section>
  )
}
