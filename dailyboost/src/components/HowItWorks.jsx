import { UserPlus, CreditCard, BarChart2, ChevronRight } from 'lucide-react'
import { SectionHeader } from './ui'
import { STEPS } from '../data'

const ICONS = { UserPlus, CreditCard, BarChart2 }

export default function HowItWorks({ dark }) {
  const card = dark
    ? 'bg-white/[0.04] border-white/10 hover:border-amber-300/30 hover:bg-white/[0.08]'
    : 'bg-white border-zinc-200 hover:border-amber-300/50 hover:bg-amber-50'

  return (
    <section className={`px-[5%] py-20 transition-colors ${dark ? 'bg-[#073936]' : 'bg-[#f5f9f8]'}`}>
      <SectionHeader
        center
        eyebrow="How It Works"
        title="Start growing in 3 simple steps"
        sub="No technical skills needed. Sign up, pick a service, and watch your numbers grow."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STEPS.map((s) => {
          const Icon = ICONS[s.icon]
          return (
            <div
              key={s.num}
              className={`relative rounded-2xl p-7 border transition-all duration-200 group overflow-hidden hover:-translate-y-1 hover:shadow-[0_10px_36px_rgba(250,222,164,0.08)] ${card}`}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-300 to-amber-300/20 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl" />

              <div className="w-10 h-10 rounded-xl bg-amber-300/10 border border-amber-300/25 text-amber-300 font-extrabold text-base flex items-center justify-center mb-4">
                {s.num}
              </div>
              <div className={`mb-3 ${dark ? 'text-amber-300' : 'text-amber-600'}`}>
                <Icon size={22} />
              </div>
              <h3 className={`font-bold text-[0.95rem] mb-2 ${dark ? 'text-white' : 'text-[#0d2926]'}`}>
                {s.title}
              </h3>
              <p className={`text-[0.85rem] leading-[1.72] ${dark ? 'text-white/55' : 'text-[#2e5550]'}`}>
                {s.desc}
              </p>

              {s.arrow && (
                <div className="absolute right-[-14px] top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-amber-300/15 text-amber-300 flex items-center justify-center z-10 border-2 border-[#073936]">
                  <ChevronRight size={12} strokeWidth={3} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
