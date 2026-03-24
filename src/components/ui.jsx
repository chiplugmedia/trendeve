// ── Shared UI primitives ──────────────────────────────────────

export function Eyebrow({ children }) {
  return (
    <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.1em] text-amber-300 bg-amber-300/10 border border-amber-300/25 px-3 py-1 rounded-full mb-3">
      {children}
    </span>
  )
}

export function SectionHeader({ eyebrow, title, sub, center = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl lg:text-[2.1rem] font-extrabold tracking-tight leading-snug mb-3">
        {title}
      </h2>
      <p className={`text-sm text-zinc-400 leading-relaxed max-w-[520px] ${center ? 'mx-auto' : ''}`}>
        {sub}
      </p>
    </div>
  )
}

export function PlatformIcon({ platform, size = 16 }) {
  // Map platform slugs to unicode glyphs / letters for minimal footprint
  const map = {
    instagram: '📸',
    tiktok:    '🎵',
    youtube:   '▶',
    telegram:  '✈',
    facebook:  '👥',
    whatsapp:  '💬',
    spotify:   '🎧',
    audiomack: '🎧',
    twitter:   '𝕏',
    nigeria:   '🇳🇬',
  }
  return (
    <span style={{ fontSize: size }} aria-hidden="true">
      {map[platform] ?? '🌐'}
    </span>
  )
}
