import Image from "next/image"

export function AboutSection() {
  return (
    <section className='w-full bg-[#faefe5] py-24 px-8 md:px-16 lg:px-24 text-center'>
      {/* Header */}
      <h2 className='text-[#a84408] font-bold text-sm uppercase tracking-wider mb-12'>
        About Us
      </h2>

      {/* Content */}
      <div className='max-w-4xl mx-auto'>
        <p className='text-4xl md:text-5xl lg:text-6xl font-serif text-zinc-900 leading-tight'>
          Our <span className='text-[#eab308] italic'>artisans</span> combine
          traditional techniques with innovative{" "}
          <span className='text-[#eab308] italic'>craftsmanship</span> to create
          jewelry{" "}
          <span className='inline-block align-middle mx-1 w-12 h-12 md:w-16 md:h-16 relative bg-white rounded-full overflow-hidden mb-2'>
            <Image
              src='/images/about-ring-1.png'
              alt='Diamond Ring'
              fill
              className='object-cover'
            />
          </span>{" "}
          that&apos;s not just beautiful{" "}
          <span className='inline-block align-middle mx-1 w-12 h-12 md:w-16 md:h-16 relative bg-white rounded-full overflow-hidden mb-2'>
            <Image
              src='/images/about-ring-2.png'
              alt='Gold Band Rings'
              fill
              className='object-cover'
            />
          </span>{" "}
          but also enduring. Each piece is a{" "}
          <span className='text-[#eab308] italic'>testament</span> to the
          artistry and dedication of our master{" "}
          <span className='text-[#eab308] italic'>jewelers</span>.
        </p>
      </div>
    </section>
  )
}
