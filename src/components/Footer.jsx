import { Link } from 'react-router-dom'
import { Twitter, Instagram, MessageCircle, Send } from 'lucide-react'
import { FOOTER_LINKS } from '../data'

// Import logos (choose one method)
// Method 1: Import from src/assets
import logoLight from '/public/img/TrendeveWhite.png'
import logoDark from '/public/img/TrendeveWhite.png'

// Method 2: If logos are in public folder
// const logoLight = '/images/logo-light.png'
// const logoDark = '/images/logo-dark.png'

const SOCIALS = [
  { Icon: Twitter, label: 'X / Twitter', href: '#', color: 'from-blue-400 to-cyan-500' },
  { Icon: Instagram, label: 'Instagram', href: '#', color: 'from-pink-500 to-rose-500' },
  { Icon: MessageCircle, label: 'WhatsApp', href: '#', color: 'from-green-400 to-emerald-500' },
  { Icon: Send, label: 'Telegram', href: '#', color: 'from-sky-400 to-blue-500' },
]

export default function Footer({ dark }) {
  // Select logo based on theme
  const currentLogo = dark ? logoDark : logoLight

  return (
    <footer className="bg-[#041f1d] text-white/60">
      <div className="max-w-[1200px] mx-auto px-5 pt-16 pb-8">

        {/* Top Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand - Updated with image logo */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src={currentLogo} 
                alt="Trendeve Logo" 
                className="h-8 w-auto transition-opacity duration-200"
              />
            </Link>

            <p className="text-sm text-white/50 leading-relaxed max-w-[260px] mb-6">
              Nigeria's most reliable SMM panel for Instagram, TikTok,
              YouTube, Telegram & Facebook. Fast delivery and fair pricing.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {SOCIALS.map(({ Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group relative w-9 h-9 rounded-lg flex items-center justify-center transition"
                >
                  {/* Gradient bg */}
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition`} />

                  {/* Glow */}
                  <div className="absolute inset-0 rounded-lg blur-md opacity-0 group-hover:opacity-40 bg-white/20 transition" />

                  {/* Icon */}
                  <Icon size={15} className="relative z-10 text-white/70 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {heading}
              </h4>

              <div className="space-y-2">
                {links.map((label) => (
                  <Link
                    key={label}
                    to="#"
                    className="block text-sm text-white/50 hover:text-amber-400 transition"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-white/40 text-center md:text-left">
            © 2026 Trendeve. All rights reserved.
          </p>

          {/* Badge */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Made in Nigeria
          </div>

        </div>
      </div>
    </footer>
  )
}