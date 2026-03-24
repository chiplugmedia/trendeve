import { Link } from 'react-router-dom'
import { Zap, ArrowRight, Rocket, Play, Music, Instagram, Send, Twitter } from 'lucide-react'
import { HERO_STATS, LIVE_ORDERS } from '../data'

const PLATFORM_ICONS = {
  youtube:   { Icon: Play,      color: 'bg-red-500/10 text-red-400'   },
  tiktok:    { Icon: Music,     color: 'bg-pink-500/10 text-pink-400' },
  instagram: { Icon: Instagram, color: 'bg-rose-500/10 text-rose-400' },
  telegram:  { Icon: Send,      color: 'bg-sky-500/10 text-sky-400'   },
  twitter:   { Icon: Twitter,   color: 'bg-blue-400/10 text-blue-400' },
}

export default function HeroSection({ dark }) {
  return (
    <section
      className="relative overflow-hidden px-[5%] py-20 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      style={{
        background: dark
          ? 'linear-gradient(150deg,#041f1d 0%,#073936 45%,#0a4e49 100%)'
          : 'linear-gradient(150deg,#073936 0%,#0a4e49 50%,#0d6259 100%)',
      }}
    >
      {/* Glow blob */}
      <div
        className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(250,222,164,0.08) 0%, transparent 65%)' }}
      />

      {/* ── Left copy ── */}
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-amber-300/10 border border-amber-300/25 text-amber-300 px-4 py-1.5 rounded-full text-[0.72rem] font-bold uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse-dot" />
          Nigeria's #1 SMM Panel
        </div>

        <h1 className="text-[clamp(2rem,3.2vw,2.85rem)] font-extrabold leading-[1.18] text-white mb-5 tracking-tight">
          Grow Faster with <span className="text-amber-300">Daily Boost</span> —{' '}
          <br className="hidden sm:block" />
          Nigeria's Most Trusted SMM Panel
        </h1>

        <p className="text-[0.97rem] text-white/65 mb-9 max-w-[460px] leading-[1.8]">
          Boost your Instagram, TikTok, YouTube, Telegram &amp; Facebook with real, fast, and
          affordable social media services built for Nigeria.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 bg-amber-300 text-[#073936] font-bold px-6 py-3 rounded-xl text-sm transition-all hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(250,222,164,0.25)] no-underline"
          >
            <Rocket size={16} /> Get Started Free
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-white/[0.07] text-white/90 border border-white/20 font-semibold px-6 py-3 rounded-xl text-sm transition-all hover:bg-white/[0.13] no-underline"
          >
            View All Services <ArrowRight size={15} />
          </Link>
        </div>

        <div className="flex gap-8 flex-wrap">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="border-l-2 border-white/10 pl-4">
              <div className="text-2xl font-extrabold text-white tracking-tight leading-none">{s.num}</div>
              <div className="text-[0.7rem] text-white/45 uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right panel card ── */}
      <div className="hidden md:block relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white font-bold text-sm">Live Orders Dashboard</span>
            <span className="inline-flex items-center gap-1.5 bg-amber-300/12 border border-amber-300/25 text-amber-300 px-3 py-1 rounded-full text-[0.68rem] font-semibold">
              <span className="w-1 h-1 rounded-full bg-amber-300 animate-pulse-dot" /> Processing
            </span>
          </div>

          <div className="flex flex-col gap-1.5">
            {LIVE_ORDERS.map((o, i) => {
              const { Icon, color } = PLATFORM_ICONS[o.platform] ?? { Icon: Zap, color: 'bg-white/10 text-white' }
              return (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/5 hover:bg-white/8 transition-colors cursor-pointer">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}>
                    <Icon size={15} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[0.8rem] font-semibold text-white truncate">{o.name}</div>
                    <div className="text-[0.67rem] text-white/40 mt-0.5">{o.meta}</div>
                  </div>
                  <span className="text-[0.78rem] font-bold text-amber-300 whitespace-nowrap">{o.price}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Floating badge */}
        <div className="absolute -bottom-4 -left-7 bg-[#073936] border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 shadow-2xl">
          <Zap size={18} className="text-amber-300" />
          <div>
            <div className="text-[0.76rem] font-bold text-white">Instant Delivery</div>
            <div className="text-[0.66rem] text-white/40">Orders start in minutes</div>
          </div>
        </div>
      </div>
    </section>
  )
}
