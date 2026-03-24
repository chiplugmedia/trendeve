import { Check, Star } from 'lucide-react'
import { PLANS } from '../data'

export default function PricingCards({ dark }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
      {PLANS.map((p) => (
        <div
          key={p.name}
          className={`relative rounded-2xl p-7 border-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl ${
            p.popular
              ? 'border-amber-300'
              : dark
              ? 'border-white/10 bg-white/[0.04]'
              : 'border-zinc-200 bg-white'
          }`}
        >
          {p.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-300 text-[#073936] text-[0.7rem] font-extrabold px-4 py-1 rounded-full whitespace-nowrap flex items-center gap-1">
              <Star size={11} fill="currentColor" /> Most Popular
            </div>
          )}

          <div className={`text-[0.72rem] font-bold uppercase tracking-widest mb-3 ${dark ? 'text-white/35' : 'text-[#6b9490]'}`}>
            {p.name}
          </div>
          <div className={`text-[2.2rem] font-extrabold leading-none tracking-tight mb-1 ${dark ? 'text-white' : 'text-[#0d2926]'}`}>
            {p.price}
          </div>
          <div className={`text-[0.8rem] mb-3 ${dark ? 'text-white/35' : 'text-zinc-500'}`}>
            {p.period}
          </div>
          <p className={`text-[0.85rem] leading-relaxed mb-5 ${dark ? 'text-white/55' : 'text-zinc-600'}`}>
            {p.desc}
          </p>
          <div className={`h-px mb-5 ${dark ? 'bg-white/8' : 'bg-zinc-200'}`} />

          <ul className="list-none mb-6 space-y-2 p-0">
            {p.features.map((f) => (
              <li key={f} className={`flex items-start gap-2 text-[0.84rem] ${dark ? 'text-white/60' : 'text-zinc-600'}`}>
                <Check size={14} className="text-amber-300 mt-0.5 flex-shrink-0" strokeWidth={3} />
                {f}
              </li>
            ))}
          </ul>

          <button
            className={`w-full py-3 rounded-xl font-bold text-[0.9rem] transition-all cursor-pointer border-2 ${
              p.popular
                ? 'bg-amber-300 text-[#073936] border-amber-300 hover:bg-amber-400'
                : 'bg-transparent border-amber-300 text-amber-300 hover:bg-amber-300/10'
            }`}
          >
            {p.cta}
          </button>
        </div>
      ))}
    </div>
  )
}
