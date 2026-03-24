import { Star } from 'lucide-react'
import { SectionHeader } from './ui'
import { TESTIMONIALS } from '../data'

export default function TestimonialsSection({ dark }) {
  return (
    <section
      className={`transition-colors ${
        dark ? 'bg-[#073936]' : 'bg-[#f5f9f8]'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 py-20 md:py-24">

        {/* Header */}
        <SectionHeader
          center
          eyebrow="Testimonials"
          title="Trusted by thousands across Nigeria"
          sub="Here's what our customers say about Daily Boost."
        />

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className={`rounded-xl p-6 border transition-all duration-200 ${
                dark
                  ? 'bg-white/5 border-white/10 hover:bg-white/10'
                  : 'bg-white border-zinc-200 hover:shadow-md'
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  dark ? 'text-white/70' : 'text-zinc-600'
                }`}
              >
                “{t.text}”
              </p>

              {/* User */}
              <div className="flex items-center gap-3">

                {/* Avatar */}
                <div className="relative w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white bg-gradient-to-br from-amber-400 to-amber-500">
                  <div className="absolute inset-0 rounded-full blur-sm opacity-40 bg-amber-300" />
                  <span className="relative z-10">{t.initial}</span>
                </div>

                {/* Info */}
                <div>
                  <div
                    className={`text-sm font-semibold ${
                      dark ? 'text-white' : 'text-zinc-900'
                    }`}
                  >
                    {t.name}
                  </div>
                  <div
                    className={`text-xs ${
                      dark ? 'text-white/50' : 'text-zinc-500'
                    }`}
                  >
                    {t.role}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}