import { Link } from 'react-router-dom'
import { Twitter, Instagram, MessageCircle, Send } from 'lucide-react'
import { FOOTER_LINKS } from '../data'

const SOCIALS = [
  { Icon: Twitter,        label: 'X / Twitter', href: '#' },
  { Icon: Instagram,      label: 'Instagram',   href: '#' },
  { Icon: MessageCircle,  label: 'WhatsApp',    href: '#' },
  { Icon: Send,           label: 'Telegram',    href: '#' },
]

export default function Footer({ dark }) {
  return (
    <footer className="bg-[#041f1d] text-white/55 px-[5%] pt-14 pb-7 transition-colors">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        {/* Brand column */}
        <div>
          <Link to="/" className="inline-flex items-center no-underline mb-4">
            <span className="font-extrabold text-lg text-white">
              Daily<span className="text-amber-300">Boost</span>
            </span>
          </Link>
          <p className="text-[0.83rem] leading-[1.78] text-white/45 max-w-[260px] mb-5">
            Nigeria's most reliable SMM panel for Instagram, TikTok, YouTube, Telegram &amp; Facebook. Quality services, quick delivery, fair pricing.
          </p>
          <div className="flex gap-2">
            {SOCIALS.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-white/6 border border-white/9 flex items-center justify-center transition-all hover:bg-amber-300 hover:border-amber-300 hover:text-[#073936] text-white/45"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="font-bold text-white text-[0.85rem] mb-4">{heading}</h4>
            {links.map((label) => (
              <Link
                key={label}
                to="#"
                className="block text-[0.82rem] text-white/45 no-underline mb-2.5 transition-colors hover:text-amber-300"
              >
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t border-white/7 pt-5 flex items-center justify-between flex-wrap gap-3">
        <p className="text-[0.78rem] text-white/35">© 2024 Daily Influencing. All rights reserved.</p>
        <span className="inline-flex items-center gap-1.5 bg-amber-300/10 border border-amber-300/20 text-amber-300 px-3 py-1 rounded-full text-[0.7rem] font-semibold">
          🇳🇬 Made in Nigeria
        </span>
      </div>
    </footer>
  )
}
