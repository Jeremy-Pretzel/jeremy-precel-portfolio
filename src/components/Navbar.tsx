import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        id="navbar"
        className="
          fixed top-0 left-0 right-0
          z-30
          w-full
          px-5 sm:px-8 md:px-10 lg:px-[6vw]
          py-5 sm:py-6
          flex justify-between items-center
        "
      >
       {/* Name / brand + Home */}
<div className="flex items-center gap-8">

  <a
    href="/"
    className="text-white select-none"
    style={{
      fontSize: 'clamp(15px, 1.3vw, 20px)',
      fontWeight: 600,
      letterSpacing: '0.08em',
    }}
  >
    JEREMY PRECEL
  </a>

  <a
    href="/"
    className="
      text-white/60
      hover:text-[#4F8CFF]
      uppercase
      tracking-[0.14em]
      text-xs
      transition-colors
    "
  >
    Home
  </a>

</div>

        {/* Desktop navigation */}
        <nav
          aria-label="Main Navigation"
          className="
            hidden md:flex
            items-center
            gap-7 lg:gap-9
            text-white
            uppercase
            tracking-[0.14em]
          "
          style={{
            fontSize: '12px',
            fontWeight: 500,
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                relative
                transition-opacity duration-200
                hover:opacity-60
              "
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          className="
            md:hidden
            relative z-40
            flex flex-col
            justify-center items-center
            gap-[5px]
            p-2
            cursor-pointer
          "
        >
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 origin-center ${
              isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />

          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />

          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 origin-center ${
              isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </header>

      {/* Mobile menu */}
      <div
        aria-hidden={!isMenuOpen}
        className={`
          fixed inset-0
          z-20
          md:hidden
          bg-black/95
          backdrop-blur-xl
          flex flex-col
          justify-center
          px-8
          gap-7
          transition-opacity duration-300
          ${
            isMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }
        `}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="
              text-white
              uppercase
              tracking-[0.08em]
              text-[34px]
              font-medium
              transition-opacity duration-200
              hover:opacity-60
            "
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}