import { Link } from 'react-router-dom'
import { Zap, ArrowRight, Rocket, Play, Music, Instagram, Send, Twitter } from 'lucide-react'
import { HERO_STATS, LIVE_ORDERS } from '../data'

const PLATFORM_ICONS = {
  youtube:   { Icon: Play,      color: 'bg-red-500/10 text-red-400' },
  tiktok:    { Icon: Music,     color: 'bg-pink-500/10 text-pink-400' },
  instagram: { Icon: Instagram, color: 'bg-rose-500/10 text-rose-400' },
  telegram:  { Icon: Send,      color: 'bg-sky-500/10 text-sky-400' },
  twitter:   { Icon: Twitter,   color: 'bg-blue-400/10 text-blue-400' },
}

export default function HeroSection({ dark }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: dark
          ? 'linear-gradient(140deg,#041f1d 0%,#073936 50%,#0a4e49 100%)'
          : 'linear-gradient(140deg,#073936 0%,#0a4e49 60%,#0d6259 100%)',
      }}
    >
      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-5 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">

        {/* Glow */}
        <div className="absolute right-[-120px] top-[-120px] w-[420px] h-[420px] rounded-full bg-amber-300/10 blur-3xl" />

        {/* LEFT */}
        <div className="relative z-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-300/10 border border-amber-300/20 text-amber-300 px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
            <span className="w-2 h-2 bg-amber-300 rounded-full animate-pulse" />
            Nigeria's #1 SMM Panel
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Grow Faster with{' '}
            <span className="text-amber-300">Trendeve</span>
          </h1>

          {/* Subtext */}
          <p className="text-white/70 text-base leading-relaxed max-w-md mb-8">
            Boost your Instagram, TikTok, YouTube, Telegram & Facebook with fast,
            reliable and affordable social media growth services.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 bg-amber-400 text-[#073936] font-semibold px-6 py-3 rounded-lg text-sm hover:bg-amber-500 transition"
            >
              <Rocket size={16} />
              Get Started
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-white/90 border border-white/20 px-6 py-3 rounded-lg text-sm hover:bg-white/10 transition"
            >
              View Services
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-10 flex-wrap">
            {HERO_STATS.map((s) => (
              <div key={s.label}>
                <div className="text-xl font-bold text-white">{s.num}</div>
                <div className="text-xs text-white/50 uppercase tracking-wide mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden md:block relative z-10">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl shadow-xl">

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-white text-sm font-semibold">
                Live Orders
              </span>
              <span className="text-xs text-amber-300 flex items-center gap-1">
                <span className="w-2 h-2 bg-amber-300 rounded-full animate-pulse" />
                Live
              </span>
            </div>

            {/* Orders */}
            <div className="space-y-2">
              {LIVE_ORDERS.map((o, i) => {
                const { Icon, color } =
                  PLATFORM_ICONS[o.platform] || {
                    Icon: Zap,
                    color: 'bg-white/10 text-white',
                  }

                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
                  >
                    <div className={`w-8 h-8 flex items-center justify-center rounded-md ${color}`}>
                      <Icon size={14} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-white font-medium truncate">
                        {o.name}
                      </div>
                      <div className="text-xs text-white/40">
                        {o.meta}
                      </div>
                    </div>

                    <div className="text-sm font-semibold text-amber-300">
                      {o.price}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-5 -left-5 bg-[#073936] border border-white/10 px-4 py-3 rounded-xl flex items-center gap-2 shadow-xl">
            <Zap size={16} className="text-amber-300" />
            <div className="text-xs text-white">
              Instant Delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}