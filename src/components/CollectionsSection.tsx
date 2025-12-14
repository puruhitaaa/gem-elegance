import Image from "next/image"

const collections = [
  {
    title: "Bracelet",
    subtitle: "Collections",
    image: "/images/collection-bracelet.png",
    alt: "Gold Chain Bracelet",
  },
  {
    title: "Rings",
    subtitle: "Collections",
    image: "/images/collection-rings.png",
    alt: "Gold Wedding Rings",
  },
  {
    title: "Necklace",
    subtitle: "Collections",
    image: "/images/collection-necklace.png",
    alt: "Gold Pendant Necklace",
  },
  {
    title: "Earrings",
    subtitle: "Collections",
    image: "/images/collection-earrings.png",
    alt: "Gold Drop Earrings",
  },
]

export function CollectionsSection() {
  return (
    <section className='w-full min-h-screen bg-[#fffcf8] py-24 px-8 md:px-16 lg:px-24'>
      {/* Header */}
      <div className='text-center mb-16'>
        <h2 className='text-[#eab308] font-bold text-sm uppercase tracking-wider mb-4'>
          Captivating Collections
        </h2>
        <h3 className='text-5xl md:text-6xl font-serif text-zinc-900 italic'>
          Our <span className='font-semibold'>Passion</span> for Perfection
        </h3>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {collections.map((item) => (
          <div
            key={item.alt}
            className='flex flex-col gap-4 group cursor-pointer'
          >
            <div className='relative aspect-square w-full overflow-hidden bg-[#faefe5]'>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-105'
              />
            </div>
            <div className='space-y-1'>
              <h4 className='text-2xl font-serif text-zinc-900'>
                {item.title}
              </h4>
              <p className='text-sm uppercase tracking-wider text-zinc-500'>
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
