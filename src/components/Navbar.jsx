import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data'

// Import logos (choose one method)
// Method 1: Import from src/assets
import logoLight from '/public/img/Trendeveblack.png'
import logoDark from '/public/img/TrendeveWhite.png'

// Method 2: If logos are in public folder
// const logoLight = '/images/logo-light.png'
// const logoDark = '/images/logo-dark.png'

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [menuOpen])

  const navBg = dark
    ? 'bg-[#073936]/80 border-white/10'
    : 'bg-white/80 border-zinc-200'

  // Select logo based on theme
  const currentLogo = dark ? logoDark : logoLight

  return (
    <>
      <nav className={`sticky top-0 z-50 border-b backdrop-blur-xl ${navBg}`}>
        <div className="max-w-[1200px] mx-auto px-5 h-16 flex items-center justify-between">

          {/* Logo - Changes based on theme */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={currentLogo} 
              alt="Trendeve Logo" 
              className="h-8 w-auto transition-opacity duration-200"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-amber-500'
                        : dark
                        ? 'text-white/70 hover:text-white'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">

            {/* Theme toggle */}
            <button
              onClick={() => setDark(!dark)}
              className={`w-9 h-9 flex items-center justify-center rounded-lg border transition ${
                dark
                  ? 'border-white/10 text-white hover:bg-white/10'
                  : 'border-zinc-200 text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Sign in */}
            <Link
              to="/signin"
              className={`text-sm font-medium px-3 py-2 rounded-md transition ${
                dark
                  ? 'text-white/80 hover:text-white'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Sign in
            </Link>

            {/* Primary button */}
            <Link
              to="/signup"
              className="text-sm font-semibold px-4 py-2 rounded-md bg-amber-400 text-[#073936] hover:bg-amber-500 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
          >
            {menuOpen ? (
              <X size={22} className={dark ? 'text-white' : 'text-zinc-800'} />
            ) : (
              <Menu size={22} className={dark ? 'text-white' : 'text-zinc-800'} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`fixed inset-0 top-16 z-40 px-5 py-6 flex flex-col gap-4 ${
            dark ? 'bg-[#073936]' : 'bg-white'
          }`}
        >
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium py-3 border-b ${
                  isActive
                    ? 'text-amber-500'
                    : dark
                    ? 'text-white/80'
                    : 'text-zinc-700'
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
              className={`py-3 text-center rounded-md border ${
                dark
                  ? 'border-white/20 text-white'
                  : 'border-zinc-300 text-zinc-800'
              }`}
            >
              Sign in
            </Link>

            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-center rounded-md bg-amber-400 text-[#073936] font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </>
  )
}