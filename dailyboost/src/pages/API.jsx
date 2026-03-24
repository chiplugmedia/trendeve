import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Zap, Lock, RefreshCw, Globe, Copy, Check, Terminal, ArrowRight } from 'lucide-react'
import { SectionHeader, Eyebrow } from '../components/ui'
import CtaSection from '../components/CtaSection'
import { API_FEATURES, API_ENDPOINTS } from '../data'

const FEATURE_ICONS = { Zap, Lock, RefreshCw, Globe }

const METHOD_COLORS = {
  GET:  'bg-sky-400/15 text-sky-300 border-sky-400/20',
  POST: 'bg-green-400/15 text-green-300 border-green-400/20',
}

const CODE_SAMPLE = `// Place an order via Daily Boost API
const response = await fetch('https://api.dailyboost.ng/v2/order', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'YOUR_API_KEY',
  },
  body: JSON.stringify({
    service_id: 1042,        // Instagram Followers 🇳🇬
    link: 'https://instagram.com/yourusername',
    quantity: 1000,
  }),
})

const data = await response.json()
console.log(data)
// {
//   "order_id": "ORD-7291",
//   "status": "pending",
//   "start_count": 4820,
//   "charge": "4200",
//   "currency": "NGN"
// }`

export default function API({ dark }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_SAMPLE)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const featureCard = dark
    ? 'bg-white/[0.04] border-white/10 hover:border-amber-300/30'
    : 'bg-white border-zinc-200 hover:border-amber-300/40'

  return (
    <>
      {/* Hero */}
      <section
        className="px-[5%] py-16 text-center relative overflow-hidden"
        style={{ background: dark ? 'linear-gradient(150deg,#041f1d,#073936 60%,#0a4e49)' : 'linear-gradient(150deg,#073936,#0a4e49)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%,rgba(250,222,164,0.07),transparent 70%)' }}
        />
        <div className="relative">
          <Eyebrow>API & Reseller</Eyebrow>
          <h1 className="text-[clamp(1.9rem,3vw,2.7rem)] font-extrabold text-white tracking-tight mb-4">
            Build on Daily Boost
          </h1>
          <p className="text-white/65 text-[0.97rem] max-w-[500px] mx-auto leading-[1.8] mb-8">
            Our RESTful API gives agencies and panel owners programmatic access to every service,
            real-time order status, and bulk ordering — all in Naira.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 bg-amber-300 text-[#073936] font-bold px-6 py-3 rounded-xl text-sm transition-all hover:bg-amber-400 no-underline"
            >
              Get Your API Key <ArrowRight size={15} />
            </Link>
            <a
              href="#endpoints"
              className="inline-flex items-center gap-2 bg-white/[0.07] text-white/90 border border-white/20 font-semibold px-6 py-3 rounded-xl text-sm transition-all hover:bg-white/[0.13] no-underline"
            >
              <Terminal size={14} /> View Endpoints
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={`px-[5%] py-16 transition-colors ${dark ? 'bg-[#073936]' : 'bg-[#f5f9f8]'}`}>
        <SectionHeader
          center
          eyebrow="API Features"
          title="Everything you need to scale"
          sub="A modern, well-documented API designed for speed, reliability, and ease of integration."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {API_FEATURES.map((f) => {
            const Icon = FEATURE_ICONS[f.icon]
            return (
              <div
                key={f.title}
                className={`rounded-2xl p-6 border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${featureCard}`}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-300/10 border border-amber-300/25 text-amber-300 flex items-center justify-center mb-4">
                  <Icon size={18} />
                </div>
                <h3 className={`font-bold text-[0.9rem] mb-2 ${dark ? 'text-white' : 'text-[#0d2926]'}`}>
                  {f.title}
                </h3>
                <p className={`text-[0.82rem] leading-relaxed ${dark ? 'text-white/55' : 'text-zinc-600'}`}>
                  {f.desc}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Code + Endpoints */}
      <section
        id="endpoints"
        className={`px-[5%] py-16 transition-colors ${dark ? 'bg-[#0a4e49]' : 'bg-[#e8f4f2]'}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Code sample */}
          <div>
            <SectionHeader
              eyebrow="Quick Start"
              title="Up and running in minutes"
              sub="Authenticate with your API key, choose a service, and place your first order."
            />
            <div
              className="rounded-2xl overflow-hidden border"
              style={{ background: '#0d1117', borderColor: 'rgba(255,255,255,0.08)' }}
            >
              {/* Code toolbar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/8">
                <div className="flex items-center gap-2">
                  <Terminal size={13} className="text-amber-300" />
                  <span className="text-[0.72rem] font-mono text-white/40">place-order.js</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-[0.72rem] font-semibold text-white/40 hover:text-amber-300 transition-colors cursor-pointer bg-transparent border-none"
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="p-5 text-[0.78rem] leading-[1.8] font-mono text-white/75 overflow-x-auto whitespace-pre">
                <code>{CODE_SAMPLE}</code>
              </pre>
            </div>
          </div>

          {/* Endpoints table */}
          <div>
            <SectionHeader
              eyebrow="Endpoints"
              title="REST API reference"
              sub="Base URL: https://api.dailyboost.ng"
            />
            <div className="flex flex-col gap-2.5">
              {API_ENDPOINTS.map((ep) => (
                <div
                  key={ep.path}
                  className={`rounded-xl border p-4 transition-colors ${featureCard}`}
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className={`text-[0.68rem] font-extrabold px-2 py-0.5 rounded border font-mono ${METHOD_COLORS[ep.method]}`}>
                      {ep.method}
                    </span>
                    <code className={`text-[0.78rem] font-mono font-semibold ${dark ? 'text-amber-300' : 'text-amber-600'}`}>
                      {ep.path}
                    </code>
                  </div>
                  <p className={`text-[0.8rem] ${dark ? 'text-white/50' : 'text-zinc-500'}`}>
                    {ep.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reseller CTA */}
      <section className={`px-[5%] py-16 transition-colors ${dark ? 'bg-[#073936]' : 'bg-[#f5f9f8]'}`}>
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeader
            center
            eyebrow="Reseller Program"
            title="Build your own SMM panel"
            sub="White-label our infrastructure. Set your own prices, manage your own clients, and keep 100% of your margin."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {RESELLER_PERKS.map((p) => (
              <div key={p} className={`rounded-xl border p-4 text-sm font-medium text-center transition-colors ${featureCard} ${dark ? 'text-white/65' : 'text-zinc-600'}`}>
                {p}
              </div>
            ))}
          </div>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 bg-amber-300 text-[#073936] font-bold px-7 py-3.5 rounded-xl text-sm transition-all hover:bg-amber-400 no-underline"
          >
            Apply for Reseller Access <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

const RESELLER_PERKS = [
  'Wholesale NGN pricing',
  'Child panel support',
  'Dedicated account manager',
  'Mass order feature',
  'Custom rate cards',
  'Priority queue access',
]
