import { Link } from 'react-router-dom'
import { Rocket, ArrowRight } from 'lucide-react'

export default function CtaSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(140deg,#041f1d 0%,#073936 55%,#0a4e49 100%)',
      }}
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,222,164,0.08),transparent_70%)]" />

      {/* Content */}
      <div className="relative max-w-[1200px] mx-auto px-5 py-20 md:py-24 text-center text-white">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
          Ready to grow your social media today?
        </h2>

        {/* Subtext */}
        <p className="text-base text-white/70 max-w-[520px] mx-auto mb-10 leading-relaxed">
          Join over 10,000 Nigerians already boosting their Instagram, TikTok,
          YouTube and Telegram with Daily Boost.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">

          {/* Primary CTA */}
          <Link
            to="/signup"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-amber-400 text-[#073936] text-sm font-semibold transition-all duration-200 hover:bg-amber-500 hover:shadow-lg"
          >
            <div className="relative flex items-center justify-center">
              <Rocket size={16} className="relative z-10" />
              <div className="absolute inset-0 blur-sm opacity-30 bg-amber-300 rounded-full" />
            </div>
            Create Free Account
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium border border-white/20 text-white/90 transition-all duration-200 hover:bg-white/10"
          >
            View Services
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>
      </div>
    </section>
  )
}