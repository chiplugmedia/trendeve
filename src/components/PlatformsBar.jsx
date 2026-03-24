import {
  Instagram,
  Music,
  Youtube,
  Send,
  Facebook,
  MessageCircle,
  Headphones
} from 'lucide-react'
import { PLATFORMS } from '../data'

const PLATFORM_ICONS = {
  Instagram: Instagram,
  TikTok: Music,
  YouTube: Youtube,
  Telegram: Send,
  Facebook: Facebook,
  WhatsApp: MessageCircle,
  Spotify: Music,
  Audiomack: Headphones,
}

export default function PlatformsBar({ dark }) {
  return (
    <div
      className={`transition-colors ${
        dark
          ? 'bg-[#0a4e49] border-y border-white/10'
          : 'bg-[#e8f4f2] border-y border-zinc-200'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 py-5 flex flex-wrap justify-center gap-4">

        {PLATFORMS.map((name) => {
          const Icon = PLATFORM_ICONS[name]

          return (
            <div
              key={name}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                dark
                  ? 'text-white/70 hover:text-white hover:bg-white/10'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-white'
              }`}
            >
              <Icon size={16} />
              {name}
            </div>
          )
        })}

      </div>
    </div>
  )
}