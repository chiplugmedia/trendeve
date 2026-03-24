import { UserPlus, CreditCard, BarChart2 } from 'lucide-react'
import { SectionHeader } from './ui'
import { STEPS } from '../data'

const ICONS = { UserPlus, CreditCard, BarChart2 }

export default function HowItWorks({ dark }) {
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
          eyebrow="How It Works"
          title="Start growing in 3 simple steps"
          sub="No technical skills needed. Sign up, pick a service, and watch your numbers grow."
        />

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {STEPS.map((s, i) => {
            const Icon = ICONS[s.icon]

            return (
              <div
                key={s.num}
                className={`relative rounded-xl p-6 border transition ${
                  dark
                    ? 'bg-white/5 border-white/10 hover:bg-white/10'
                    : 'bg-white border-zinc-200 hover:shadow-md'
                }`}
              >
                {/* Step Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-amber-400/10 text-amber-400 font-semibold text-sm">
                    {s.num}
                  </div>

                  <Icon
                    size={20}
                    className={dark ? 'text-amber-300' : 'text-amber-500'}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`text-base font-semibold mb-2 ${
                    dark ? 'text-white' : 'text-zinc-900'
                  }`}
                >
                  {s.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed ${
                    dark ? 'text-white/60' : 'text-zinc-600'
                  }`}
                >
                  {s.desc}
                </p>

                {/* Connector line (desktop only) */}
                {i !== STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 w-8 h-px bg-amber-300/40" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}