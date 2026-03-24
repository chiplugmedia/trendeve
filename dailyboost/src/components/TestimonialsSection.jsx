import { Star } from 'lucide-react'
import { SectionHeader } from './ui'
import { TESTIMONIALS } from '../data'

export default function TestimonialsSection({ dark }) {
  const card = dark
    ? 'bg-white/[0.04] border-white/10 hover:border-amber-300/30'
    : 'bg-white border-zinc-200 hover:border-amber-300/30'

  return (
    <section className={`px-[5%] py-20 transition-colors ${dark ? 'bg-[#073936]' : 'bg-[#f5f9f8]'}`}>
      <SectionHeader
        center
        eyebrow="Testimonials"
        title="Trusted by thousands across Nigeria"
        sub="Here's what our customers say about Daily Boost."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl p-6 border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl ${card}`}
          >
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={12} className="text-amber-300 fill-amber-300" />
              ))}
            </div>
            <p className={`text-[0.87rem] leading-[1.78] italic mb-5 ${dark ? 'text-white/55' : 'text-zinc-600'}`}>
              "{t.text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-300 text-[#073936] font-bold text-[0.88rem] flex items-center justify-center flex-shrink-0">
                {t.initial}
              </div>
              <div>
                <div className={`font-bold text-[0.86rem] ${dark ? 'text-white' : 'text-[#0d2926]'}`}>
                  {t.name}
                </div>
                <div className={`text-[0.72rem] ${dark ? 'text-white/35' : 'text-zinc-500'}`}>
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
