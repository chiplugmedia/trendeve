import { Link } from 'react-router-dom'
import { Rocket, ArrowRight } from 'lucide-react'

export default function CtaSection() {
  return (
    <section
      className="relative px-[5%] py-20 text-center text-white overflow-hidden"
      style={{ background: 'linear-gradient(150deg,#041f1d 0%,#073936 50%,#0a4e49 100%)' }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 65% at 50% 50%,rgba(250,222,164,0.09),transparent 70%)',
        }}
      />

      <div className="relative">
        <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-extrabold tracking-tight mb-4">
          Ready to grow your social media today?
        </h2>
        <p className="text-[0.95rem] text-white/70 max-w-[480px] mx-auto mb-9 leading-[1.8]">
          Join over 10,000 Nigerians already boosting their Instagram, TikTok, YouTube and
          Telegram with Daily Boost.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 bg-amber-300 text-[#073936] font-bold px-7 py-3.5 rounded-xl text-sm transition-all hover:bg-amber-400 hover:-translate-y-0.5 no-underline"
          >
            <Rocket size={16} /> Create Free Account
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-white/[0.07] text-white/90 border border-white/20 font-semibold px-7 py-3.5 rounded-xl text-sm transition-all hover:bg-white/[0.13] no-underline"
          >
            View All Services <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
