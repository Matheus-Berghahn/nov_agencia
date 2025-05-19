'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/logo_azul.png'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToId = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = window.innerHeight * 0.1
      const y = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const navItemClasses = (isScrolled: boolean) =>
    `group relative cursor-pointer transition-colors duration-300 ${
      isScrolled ? 'text-[#0D2C7C]' : 'text-white'
    } hover:opacity-80`

  const underlineClasses = scrolled
    ? 'absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[#0D2C7C] transition-all duration-300 group-hover:w-full'
    : ''

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-0 md:duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="px-6 sm:px-16 lg:px-20 2xl:px-40 mx-auto py-4 flex items-center justify-between">
        <div className="transition-opacity duration-300">
          {(scrolled || mobileMenuOpen) && (
            <Image src={logo} alt="Logo" className="w-28 h-auto" />
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-12 text-sm sm:text-base font-medium transition-colors duration-300">
          <div
            className={navItemClasses(scrolled)}
            onClick={() => scrollToId('about')}
          >
            Quem somos
            <span className={underlineClasses} />
          </div>
          <div
            className={navItemClasses(scrolled)}
            onClick={() => scrollToId('work')}
          >
            Diferenciais
            <span className={underlineClasses} />
          </div>
          <div
            className={navItemClasses(scrolled)}
            onClick={() => scrollToId('whatwedo')}
          >
            Serviços
            <span className={underlineClasses} />
          </div>
          <a
            href="https://wa.me/555193318332"
            target="_blank"
            rel="noopener noreferrer"
            className={navItemClasses(scrolled)}
          >
            Contato
            <span className={underlineClasses} />
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {mobileMenuOpen ? (
            <HiX
              size={28}
              className="text-[#0D2C7C]"
              onClick={() => setMobileMenuOpen(false)}
            />
          ) : (
            <HiMenuAlt3
              size={28}
              className={scrolled || mobileMenuOpen ? 'text-[#0D2C7C]' : 'text-white'}
              onClick={() => setMobileMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 transition-all duration-300">
          <div
            className="text-[#0D2C7C] py-2 font-medium"
            onClick={() => scrollToId('about')}
          >
            Quem somos
          </div>
          <div
            className="text-[#0D2C7C] py-2 font-medium"
            onClick={() => scrollToId('work')}
          >
            Diferenciais
          </div>
          <div
            className="text-[#0D2C7C] py-2 font-medium"
            onClick={() => scrollToId('whatwedo')}
          >
            Serviços
          </div>
          <a
            href="https://wa.me/555193318332"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0D2C7C] py-2 font-medium block"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contato
          </a>
        </div>
      )}
    </header>
  )
}
