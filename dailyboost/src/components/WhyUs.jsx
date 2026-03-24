import { Zap, Shield, DollarSign, Plug } from 'lucide-react'
import { SectionHeader } from './ui'
import { FEATURES, METRICS, CHART_BARS } from '../data'

const ICONS = { Zap, Shield, DollarSign, Plug }

export default function WhyUs({ dark }) {
  const card = dark
    ? 'bg-white/[0.04] border-white/10 hover:border-amber-300/30 hover:bg-amber-300/5'
    : 'bg-white border-zinc-200 hover:border-amber-300/50 hover:bg-amber-50'

  return (
    <section className={`px-[5%] py-20 transition-colors ${dark ? 'bg-[#073936]' : 'bg-[#f5f9f8]'}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: features */}
        <div>
          <SectionHeader
            eyebrow="Why Daily Boost"
            title={<>Built for Nigeria.<br />Trusted across Africa.</>}
            sub="We don't just sell numbers — we deliver real results at the best prices in the market, paid in Naira."
          />
          <div className="flex flex-col gap-3.5">
            {FEATURES.map((f) => {
              const Icon = ICONS[f.icon]
              return (
                <div
                  key={f.title}
                  className={`flex gap-4 items-start p-4 rounded-xl border transition-all duration-200 cursor-default ${card}`}
                >
                  <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center bg-amber-300/10 border border-amber-300/25 text-amber-300">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className={`font-bold text-[0.88rem] mb-1 ${dark ? 'text-white' : 'text-[#0d2926]'}`}>
                      {f.title}
                    </div>
                    <div className={`text-[0.82rem] leading-[1.65] ${dark ? 'text-white/55' : 'text-[#2e5550]'}`}>
                      {f.desc}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right: metrics panel — always dark */}
        <div
          className="rounded-2xl p-6 border border-amber-300/10"
          style={{ background: 'linear-gradient(150deg,#041f1d,#073936)' }}
        >
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="flex items-center justify-between bg-white/[0.04] border border-white/6 rounded-xl px-4 py-3 mb-2"
            >
              <span className="text-[0.8rem] text-white/60 font-medium">{m.label}</span>
              <div className="flex items-center gap-2 ml-3 flex-shrink-0">
                <span className="text-[0.87rem] font-bold text-amber-300">{m.value}</span>
                <span className={`text-[0.67rem] font-bold px-2 py-0.5 rounded-full ${m.badgeClass}`}>
                  {m.badge}
                </span>
              </div>
            </div>
          ))}

          {/* Bar chart */}
          <div className="mt-4 bg-white/[0.03] border border-white/5 rounded-xl p-3.5">
            <div className="text-[0.67rem] text-white/35 uppercase tracking-widest mb-2.5">
              Weekly Order Volume
            </div>
            <div className="flex gap-1.5 items-end h-14">
              {CHART_BARS.map((b) => (
                <div
                  key={b.day}
                  className={`flex-1 rounded-t-sm transition-all cursor-pointer ${
                    b.hi
                      ? 'bg-amber-300/70'
                      : 'bg-amber-300/20 hover:bg-amber-300/60'
                  }`}
                  style={{ height: b.h }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1.5">
              {CHART_BARS.map((b) => (
                <span key={b.day} className="flex-1 text-center text-[0.62rem] text-white/30">
                  {b.day}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
