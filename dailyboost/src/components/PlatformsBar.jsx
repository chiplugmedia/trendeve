import { PLATFORMS } from '../data'

const PLATFORM_EMOJIS = {
  Instagram: '📸', TikTok: '🎵', YouTube: '▶️', Telegram: '✈️',
  Facebook: '👥', WhatsApp: '💬', Spotify: '🎵', Audiomack: '🎧',
}

export default function PlatformsBar({ dark }) {
  return (
    <div
      className={`px-[5%] py-4 transition-colors ${
        dark ? 'bg-[#0a4e49] border-y border-white/8' : 'bg-[#e8f4f2] border-y border-zinc-200'
      }`}
    >
      <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto gap-x-1 gap-y-2">
        {PLATFORMS.map((name, i) => (
          <span key={name} className="flex items-center">
            <span
              className={`flex items-center gap-2 px-4 py-2 text-[0.82rem] font-semibold ${
                dark ? 'text-white/55' : 'text-[#2e5550]'
              }`}
            >
              <span className="text-base">{PLATFORM_EMOJIS[name]}</span>
              {name}
            </span>
            {i < PLATFORMS.length - 1 && (
              <span
                className={`w-px h-4 hidden sm:block ${dark ? 'bg-white/10' : 'bg-zinc-300'}`}
              />
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
