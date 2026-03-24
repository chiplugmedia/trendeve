import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data'

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on resize
  useEffect(() => {
    const handler = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navBg    = dark ? 'bg-[#073936]/90 border-white/8'  : 'bg-white/90 border-zinc-200'
  const linkBase = 'text-[0.87rem] font-medium no-underline transition-colors'
  const linkClr  = dark ? 'text-white/60 hover:text-amber-300' : 'text-[#2e5550] hover:text-amber-600'
  const activeCl = dark ? 'text-amber-300'                     : 'text-amber-600'

  return (
    <>
      <nav className={`sticky top-0 z-50 ${navBg} border-b backdrop-blur-xl px-[5%] flex items-center justify-between h-16 transition-colors duration-300`}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 no-underline">
          <span className="font-extrabold text-lg tracking-tight">
            Daily<span className="text-amber-300">Boost</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `${linkBase} ${linkClr} ${isActive ? activeCl : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-all cursor-pointer ${
              dark
                ? 'border-white/10 bg-white/5 text-white hover:border-amber-300 hover:bg-amber-300/10'
                : 'border-zinc-200 bg-zinc-100 text-zinc-700 hover:border-amber-400 hover:bg-amber-100'
            }`}
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <Link
            to="/signin"
            className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all no-underline ${
              dark
                ? 'border-white/20 text-white/80 hover:border-amber-300 hover:text-amber-300'
                : 'border-zinc-300 text-zinc-700 hover:border-amber-500 hover:text-amber-600'
            }`}
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 rounded-lg text-sm font-bold bg-amber-300 text-[#073936] hover:bg-amber-400 transition-all no-underline hover:-translate-y-px"
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg cursor-pointer border-none bg-transparent"
          aria-label="Toggle menu"
        >
          {menuOpen
            ? <X    size={22} className={dark ? 'text-white' : 'text-[#0d2926]'} />
            : <Menu size={22} className={dark ? 'text-white' : 'text-[#0d2926]'} />
          }
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`fixed inset-0 top-[105px] z-40 px-[5%] pt-4 pb-8 flex flex-col border-t overflow-y-auto transition-colors ${
            dark ? 'bg-[#073936] border-white/10' : 'bg-white border-zinc-200'
          }`}
        >
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-4 text-base font-medium border-b no-underline transition-colors ${
                  dark ? 'border-white/8' : 'border-zinc-200'
                } ${
                  isActive
                    ? 'text-amber-300'
                    : dark ? 'text-white/80 hover:text-amber-300' : 'text-[#0d2926] hover:text-amber-600'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <div className="flex flex-col gap-3 mt-6">
            <Link
              to="/signin"
              onClick={() => setMenuOpen(false)}
              className={`py-3 rounded-xl text-center font-semibold border no-underline transition-all ${
                dark ? 'border-white/20 text-white' : 'border-zinc-300 text-zinc-800'
              }`}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="py-3 rounded-xl text-center font-bold bg-amber-300 text-[#073936] hover:bg-amber-400 transition-all no-underline"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
