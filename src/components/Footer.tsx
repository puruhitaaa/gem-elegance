import Link from "next/link"

const footerLinks = {
  getInTouch: {
    title: "Get In Touch",
    links: [
      { label: "Contact", href: "#" },
      { label: "About us", href: "/about" },
      { label: "Appointments", href: "#" },
      { label: "Philadelphia Shop", href: "#" },
      { label: "Newsletter", href: "#" },
    ],
  },
  about: {
    title: "About",
    links: [
      { label: "About", href: "/about" },
      { label: "Who We Are", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  social: {
    title: "Social",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Pinterest", href: "#" },
    ],
  },
  policy: {
    title: "Policy",
    links: [
      { label: "Log In", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Returns & Exchanges", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
  },
  faqs: {
    title: "FAQs",
    links: [
      { label: "Warranty", href: "#" },
      { label: "Ring resizing", href: "#" },
      { label: "Jewelry Care", href: "#" },
      { label: "Gem For You", href: "#" },
      { label: "Shipping", href: "#" },
    ],
  },
}

export function Footer() {
  return (
    <footer className='w-full bg-[#fcfaf9] border-t border-zinc-100 flex flex-col pt-16 md:pt-24'>
      <div className='w-full px-8 md:px-12 lg:px-24 mb-16 md:mb-24'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-12 gap-x-8'>
          {/* Column 1: Get In Touch */}
          <div className='flex flex-col gap-6'>
            <h4 className='font-bold text-zinc-900'>
              {footerLinks.getInTouch.title}
            </h4>
            <div className='flex flex-col gap-4 text-sm text-zinc-600'>
              {footerLinks.getInTouch.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className='hover:text-amber-600 transition-colors'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: About */}
          <div className='flex flex-col gap-6'>
            <h4 className='font-bold text-zinc-900'>
              {footerLinks.about.title}
            </h4>
            <div className='flex flex-col gap-4 text-sm text-zinc-600'>
              {footerLinks.about.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className='hover:text-amber-600 transition-colors'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Social */}
          <div className='flex flex-col gap-6'>
            <h4 className='font-bold text-zinc-900'>
              {footerLinks.social.title}
            </h4>
            <div className='flex flex-col gap-4 text-sm text-zinc-600'>
              {footerLinks.social.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className='hover:text-amber-600 transition-colors'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4-5: Center Logo & Newsletter (Spans 2 on desktop, full on mobile/tablet if needed) */}
          <div className='col-span-2 md:col-span-4 lg:col-span-2 flex flex-col items-center justify-start pt-4 lg:pt-0 order-last lg:order-none mt-8 lg:mt-0'>
            {/* Logo */}
            <Link
              href='/'
              className='font-serif text-4xl tracking-tight mb-8 text-center'
            >
              <span className='text-zinc-900'>Gem</span>
              <span className='text-amber-500 mx-2'>✦</span>
              <span className='text-amber-600'>Elegance.</span>
            </Link>

            {/* Newsletter Form */}
            <form className='flex w-full max-w-sm flex-col gap-4'>
              <input
                type='email'
                placeholder='Email address'
                className='flex-1 border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500'
              />
              <button
                type='submit'
                className='bg-[#a84408] text-white self-center px-6 py-3 text-xs w-fit font-bold uppercase tracking-wider hover:bg-[#8a3806] transition-colors'
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Column 6: Policy */}
          <div className='flex flex-col gap-6'>
            <h4 className='font-bold text-zinc-900'>
              {footerLinks.policy.title}
            </h4>
            <div className='flex flex-col gap-4 text-sm text-zinc-600'>
              {footerLinks.policy.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className='hover:text-amber-600 transition-colors'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 7: FAQs */}
          <div className='flex flex-col gap-6'>
            <h4 className='font-bold text-zinc-900'>
              {footerLinks.faqs.title}
            </h4>
            <div className='flex flex-col gap-4 text-sm text-zinc-600'>
              {footerLinks.faqs.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className='hover:text-amber-600 transition-colors'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className='w-full bg-[#1c1c1c] text-white/60 py-4 text-center text-xs tracking-wide'>
        @2025 gemelegance copyright reserved
      </div>
    </footer>
  )
}
