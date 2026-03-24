import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Rocket, Search } from 'lucide-react'
import { SectionHeader, Eyebrow } from '../components/ui'
import CtaSection from '../components/CtaSection'
import { SERVICES } from '../data'

const PLATFORM_EMOJI = {
  instagram: '📸', tiktok: '🎵', youtube: '▶️', telegram: '✈️',
  facebook: '👥', twitter: '𝕏', spotify: '🎧', nigeria: '🇳🇬',
}

const ALL_CATEGORIES = ['All', 'Instagram', 'TikTok', 'YouTube', 'Telegram', 'Facebook', 'X (Twitter)', 'Spotify & Audiomack', 'Nigerian Services']

// Extended service list for the services page
const DETAILED_SERVICES = [
  { platform: 'instagram', category: 'Instagram',    name: 'Instagram Followers',      meta: 'Real accounts · Global',              price: '₦4,200/1K',  badge: 'Popular',  badgeClass: 'bg-amber-400/15 text-amber-300' },
  { platform: 'instagram', category: 'Instagram',    name: 'Instagram Likes 🇳🇬',       meta: 'Nigerian accounts · Real',             price: '₦16,000/1K', badge: 'Nigerian', badgeClass: 'bg-green-400/15 text-green-300' },
  { platform: 'instagram', category: 'Instagram',    name: 'Instagram Views',           meta: 'Global · Fast delivery',               price: '₦180/1K',    badge: 'Fast',     badgeClass: 'bg-sky-400/15 text-sky-300'     },
  { platform: 'instagram', category: 'Instagram',    name: 'Instagram Comments',        meta: 'Custom comments · Real',               price: '₦28,000/1K', badge: null,       badgeClass: ''                               },
  { platform: 'tiktok',    category: 'TikTok',       name: 'TikTok Followers',          meta: 'Global · Drip-feed available',         price: '₦6,189/1K',  badge: 'Popular',  badgeClass: 'bg-amber-400/15 text-amber-300' },
  { platform: 'tiktok',    category: 'TikTok',       name: 'TikTok Views',              meta: 'Worldwide · ~5 minutes',               price: '₦120/1K',    badge: 'Fastest',  badgeClass: 'bg-amber-400/15 text-amber-300' },
  { platform: 'tiktok',    category: 'TikTok',       name: 'TikTok Likes',              meta: 'Real profiles · Fast',                 price: '₦600/1K',    badge: null,       badgeClass: ''                               },
  { platform: 'youtube',   category: 'YouTube',      name: 'YouTube Views [Global]',    meta: '~48 minutes · High retention',         price: '₦945/1K',    badge: 'HQ',       badgeClass: 'bg-purple-400/15 text-purple-300'},
  { platform: 'youtube',   category: 'YouTube',      name: 'YouTube Subscribers',       meta: 'Real accounts · Gradual delivery',     price: '₦14,500/1K', badge: null,       badgeClass: ''                               },
  { platform: 'youtube',   category: 'YouTube',      name: 'YouTube Likes',             meta: 'Fast · Non-drop',                      price: '₦2,100/1K',  badge: null,       badgeClass: ''                               },
  { platform: 'telegram',  category: 'Telegram',     name: 'Telegram Members',          meta: 'Worldwide · ~52 minutes',              price: '₦418/1K',    badge: 'Cheapest', badgeClass: 'bg-sky-400/15 text-sky-300'     },
  { platform: 'telegram',  category: 'Telegram',     name: 'Telegram Post Views',       meta: 'Global · Instant',                     price: '₦50/1K',     badge: 'Instant',  badgeClass: 'bg-amber-400/15 text-amber-300' },
  { platform: 'facebook',  category: 'Facebook',     name: 'Facebook Page Likes',       meta: 'Real accounts · Worldwide',            price: '₦3,800/1K',  badge: null,       badgeClass: ''                               },
  { platform: 'facebook',  category: 'Facebook',     name: 'Facebook Post Views',       meta: 'Global · Fast',                        price: '₦200/1K',    badge: null,       badgeClass: ''                               },
  { platform: 'twitter',   category: 'X (Twitter)',  name: 'X Tweet Views',             meta: 'Global · ~1 minute',                   price: '₦173/1K',    badge: 'Fastest',  badgeClass: 'bg-amber-400/15 text-amber-300' },
  { platform: 'twitter',   category: 'X (Twitter)',  name: 'X Followers',               meta: 'Real profiles · Non-drop',             price: '₦5,500/1K',  badge: null,       badgeClass: ''                               },
  { platform: 'spotify',   category: 'Spotify & Audiomack', name: 'Spotify Streams',   meta: 'Global · Royalty eligible',            price: '₦380/1K',    badge: null,       badgeClass: ''                               },
  { platform: 'spotify',   category: 'Spotify & Audiomack', name: 'Audiomack Plays',   meta: 'Nigeria & Global',                     price: '₦220/1K',    badge: 'Popular',  badgeClass: 'bg-amber-400/15 text-amber-300' },
  { platform: 'nigeria',   category: 'Nigerian Services', name: 'IG Followers 🇳🇬',     meta: 'Real Nigerian accounts',               price: '₦22,000/1K', badge: 'Nigerian', badgeClass: 'bg-green-400/15 text-green-300' },
  { platform: 'nigeria',   category: 'Nigerian Services', name: 'TikTok Views 🇳🇬',     meta: 'Nigerian viewers · Fast',              price: '₦1,200/1K',  badge: 'Nigerian', badgeClass: 'bg-green-400/15 text-green-300' },
]

export default function Services({ dark }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = DETAILED_SERVICES.filter((s) => {
    const matchCat = activeCategory === 'All' || s.category === activeCategory
    const matchQ   = s.name.toLowerCase().includes(query.toLowerCase())
    return matchCat && matchQ
  })

  const inputBg = dark
    ? 'bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-amber-300'
    : 'bg-white border-zinc-200 text-[#0d2926] placeholder-zinc-400 focus:border-amber-400'

  const tabActive  = 'bg-amber-300 text-[#073936] border-amber-300'
  const tabInactive = dark
    ? 'bg-white/5 border-white/10 text-white/60 hover:border-amber-300/50 hover:text-white'
    : 'bg-white border-zinc-200 text-zinc-600 hover:border-amber-300 hover:text-[#0d2926]'

  const card = dark
    ? 'bg-white/[0.04] border-white/10 hover:border-amber-300/30'
    : 'bg-white border-zinc-200 hover:border-amber-300/40'

  return (
    <>
      {/* Header */}
      <section
        className="px-[5%] py-16 text-center"
        style={{ background: dark ? 'linear-gradient(150deg,#041f1d,#073936 60%,#0a4e49)' : 'linear-gradient(150deg,#073936,#0a4e49)' }}
      >
        <Eyebrow>Our Services</Eyebrow>
        <h1 className="text-[clamp(1.9rem,3vw,2.7rem)] font-extrabold text-white tracking-tight mb-4">
          Every Platform. Every Metric.
        </h1>
        <p className="text-white/65 text-[0.97rem] max-w-[500px] mx-auto leading-[1.8] mb-8">
          Real Nigerian &amp; global services across every major social platform — affordable, fast,
          and reliable.
        </p>
        {/* Search */}
        <div className="relative max-w-sm mx-auto">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
          <input
            type="text"
            placeholder="Search services…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm outline-none transition-colors bg-white/10 border-white/20 text-white placeholder-white/35 focus:border-amber-300`}
          />
        </div>
      </section>

      {/* Body */}
      <section className={`px-[5%] py-14 transition-colors ${dark ? 'bg-[#073936]' : 'bg-[#f5f9f8]'}`}>
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                activeCategory === cat ? tabActive : tabInactive
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service rows */}
        {filtered.length === 0 ? (
          <p className={`text-center py-20 text-sm ${dark ? 'text-white/40' : 'text-zinc-400'}`}>
            No services match your search.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((s, i) => (
              <div
                key={i}
                className={`rounded-2xl p-5 border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${card}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br ${SERVICES.find(sv => sv.platform === s.platform)?.color ?? 'from-zinc-700/20 to-zinc-600/20'}`}>
                    {PLATFORM_EMOJI[s.platform]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-bold text-[0.87rem] truncate ${dark ? 'text-white' : 'text-[#0d2926]'}`}>
                      {s.name}
                    </div>
                    <div className={`text-[0.72rem] ${dark ? 'text-white/40' : 'text-zinc-500'}`}>
                      {s.meta}
                    </div>
                  </div>
                  {s.badge && (
                    <span className={`text-[0.65rem] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${s.badgeClass}`}>
                      {s.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-300 font-extrabold text-base">{s.price}</span>
                  <Link
                    to="/signup"
                    className="inline-flex items-center gap-1.5 bg-amber-300 text-[#073936] font-bold px-3.5 py-1.5 rounded-lg text-xs transition-all hover:bg-amber-400 no-underline"
                  >
                    Order <Rocket size={11} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <CtaSection />
    </>
  )
}
