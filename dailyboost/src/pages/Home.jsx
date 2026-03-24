import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import PlatformsBar from '../components/PlatformsBar'
import HowItWorks from '../components/HowItWorks'
import WhyUs from '../components/WhyUs'
import TestimonialsSection from '../components/TestimonialsSection'
import WhatsAppStrip from '../components/WhatsAppStrip'
import CtaSection from '../components/CtaSection'
import { SectionHeader } from '../components/ui'
import { SERVICES } from '../data'

export default function Home({ dark }) {
  const card = dark
    ? 'bg-white/[0.04] border-white/10 hover:border-amber-300/30'
    : 'bg-white border-zinc-200 hover:border-amber-300/30'

  return (
    <>
      <HeroSection dark={dark} />
      <PlatformsBar dark={dark} />

      <HowItWorks dark={dark} />

      {/* ── Services preview ── */}
      <section className={`px-[5%] py-20 transition-colors ${dark ? 'bg-[#0a4e49]' : 'bg-[#e8f4f2]'}`}>
        <SectionHeader
          center
          eyebrow="Our Services"
          title="Every platform. Every metric."
          sub="Real Nigerian & global services across every major social platform — all in one affordable place."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          {SERVICES.map((s) => (
            <Link
              key={s.name}
              to="/services"
              className={`rounded-2xl p-5 text-center border no-underline block transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(250,222,164,0.08)] ${card}`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-3 text-2xl`}>
                {PLATFORM_EMOJI[s.platform]}
              </div>
              <div className={`font-bold text-[0.88rem] mb-1 ${dark ? 'text-white' : 'text-[#0d2926]'}`}>
                {s.name}
              </div>
              <div className={`text-[0.74rem] leading-snug ${dark ? 'text-white/35' : 'text-[#6b9490]'}`}>
                {s.sub}
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-amber-300 text-[#073936] font-bold px-6 py-3 rounded-xl text-sm transition-all hover:bg-amber-400 no-underline"
          >
            View All Services →
          </Link>
        </div>
      </section>

      <WhyUs dark={dark} />
      <TestimonialsSection dark={dark} />
      <WhatsAppStrip />
      <CtaSection />
    </>
  )
}

const PLATFORM_EMOJI = {
  instagram: '📸', tiktok: '🎵', youtube: '▶️', telegram: '✈️',
  facebook: '👥', twitter: '𝕏', spotify: '🎧', nigeria: '🇳🇬',
}
