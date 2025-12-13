"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, ShoppingBag } from "lucide-react"

const navLinks = [
  { href: "/wedding", label: "Wedding" },
  { href: "/everyday", label: "Everyday" },
  { href: "/about", label: "About" },
  { href: "/additional", label: "Additional" },
]

export function NavBar() {
  const pathname = usePathname()

  return (
    <nav className='w-full bg-white py-6 px-8 md:px-12 flex items-center justify-between border-b border-transparent'>
      {/* Left Links */}
      <div className='hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-zinc-900 uppercase'>
        {navLinks.map((link) => {
          const isActive = pathname === link.href

          return (
            <Link
              key={link.href}
              href={link.href}
              className='relative flex flex-col items-center gap-1 group'
            >
              <span className='hover:text-zinc-600 transition-colors'>
                {link.label}
              </span>
              {isActive && (
                <span className='absolute -bottom-2 w-1 h-1 bg-black rounded-full' />
              )}
            </Link>
          )
        })}
      </div>

      {/* Center Logo */}
      <div className='flex-1 md:flex-none text-center'>
        <Link
          href='/'
          className='text-3xl font-serif text-[#a84408] tracking-tight'
        >
          Gem<span className='text-[#eab308] mx-1'>✦</span>Elegance
        </Link>
      </div>

      {/* Right Actions */}
      <div className='flex items-center gap-6 justify-end md:w-auto'>
        <Link
          href='#'
          className='hidden md:block text-xs font-semibold tracking-widest text-zinc-900 uppercase hover:text-zinc-600 transition-colors'
        >
          Support
        </Link>
        <button className='flex items-center gap-2 text-xs font-semibold tracking-widest text-zinc-900 uppercase hover:text-zinc-600 transition-colors rounded-none bg-transparent border-none p-0 cursor-pointer'>
          <Search className='w-4 h-4' />
          <span className='hidden sm:inline'>Search</span>
        </button>
        <button className='text-zinc-900 hover:text-zinc-600 transition-colors rounded-none bg-transparent border-none p-0 cursor-pointer'>
          <ShoppingBag className='w-5 h-5' />
        </button>
      </div>
    </nav>
  )
}
