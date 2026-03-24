import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Eye, EyeOff, ArrowRight, Check, Zap, Users, TrendingUp,
  Instagram, Music, Play, Send, ChevronLeft
} from 'lucide-react'

const PERKS = [
  { icon: Zap,        text: 'Orders start in minutes'         },
  { icon: Users,      text: '10,000+ happy Nigerian customers' },
  { icon: TrendingUp, text: 'Real engagement, real growth'     },
]

const SOCIAL_PROOF = [
  { icon: Instagram, color: 'bg-rose-500/15 text-rose-400',  platform: 'Instagram', stat: '₦4,200/1K followers' },
  { icon: Music,     color: 'bg-pink-500/15 text-pink-400',  platform: 'TikTok',    stat: '₦120/1K views'       },
  { icon: Play,      color: 'bg-red-500/15 text-red-400',    platform: 'YouTube',   stat: '₦945/1K views'       },
  { icon: Send,      color: 'bg-sky-500/15 text-sky-400',    platform: 'Telegram',  stat: '₦418/1K members'     },
]

export default function SignUp({ dark }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', referral: '' })
  const [showPass, setShowPass] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!form.name.trim())                       e.name     = 'Full name is required'
    if (!form.email.match(/^\S+@\S+\.\S+$/))     e.email    = 'Enter a valid email address'
    if (form.password.length < 8)                e.password = 'Password must be at least 8 characters'
    if (!agreed)                                 e.agreed   = 'You must agree to the terms'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    setTimeout(() => { setLoading(false); navigate('/') }, 1800)
  }

  // Password strength
  const strength = (() => {
    const p = form.password
    if (!p) return 0
    let s = 0
    if (p.length >= 8)                        s++
    if (/[A-Z]/.test(p))                      s++
    if (/[0-9]/.test(p))                      s++
    if (/[^A-Za-z0-9]/.test(p))              s++
    return s
  })()
  const strengthLabel = ['', 'Weak', 'Fair', 'Good', 'Strong'][strength]
  const strengthColor = ['', 'bg-red-400', 'bg-orange-400', 'bg-yellow-400', 'bg-green-400'][strength]

  const inputCls = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 ${
      errors[field]
        ? 'border-red-400/60 bg-red-400/5 focus:border-red-400'
        : dark
        ? 'bg-white/5 border-white/10 text-white placeholder-white/25 focus:border-amber-300 focus:bg-white/8'
        : 'bg-white border-zinc-200 text-[#0d2926] placeholder-zinc-400 focus:border-amber-400 focus:shadow-[0_0_0_3px_rgba(251,191,36,0.08)]'
    }`

  const labelCls = `block text-[0.78rem] font-semibold mb-1.5 ${dark ? 'text-white/70' : 'text-[#2e5550]'}`

  return (
    <div className={`min-h-screen flex transition-colors duration-300 ${dark ? 'bg-[#041f1d] text-[#f0f4f3]' : 'bg-[#f5f9f8] text-[#0d2926]'}`}>

      {/* ── Left panel (decorative) — hidden on mobile ── */}
      <div
        className="hidden lg:flex lg:w-[45%] flex-col justify-between p-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(150deg,#041f1d 0%,#073936 50%,#0a4e49 100%)' }}
      >
        {/* Mesh glows */}
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(250,222,164,0.12) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(13,98,89,0.6) 0%, transparent 65%)' }} />

        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 no-underline z-10">
          <span className="font-extrabold text-xl tracking-tight text-white">
            Daily<span className="text-amber-300">Boost</span>
          </span>
        </Link>

        {/* Centre content */}
        <div className="z-10">
          <div className="inline-flex items-center gap-2 bg-amber-300/10 border border-amber-300/20 text-amber-300 px-3 py-1.5 rounded-full text-[0.7rem] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
            Nigeria's #1 SMM Panel
          </div>
          <h2 className="text-[2.4rem] font-extrabold text-white leading-tight tracking-tight mb-4">
            Grow your audience<br />
            <span className="text-amber-300">starting today.</span>
          </h2>
          <p className="text-white/55 text-sm leading-relaxed mb-10 max-w-sm">
            Join 10,000+ Nigerians boosting their Instagram, TikTok, YouTube, and Telegram — all in Naira.
          </p>

          {/* Perks */}
          <div className="flex flex-col gap-3 mb-10">
            {PERKS.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-amber-300/10 border border-amber-300/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={13} className="text-amber-300" />
                </div>
                <span className="text-white/65 text-[0.85rem]">{text}</span>
              </div>
            ))}
          </div>

          {/* Live pricing cards */}
          <div className="grid grid-cols-2 gap-2">
            {SOCIAL_PROOF.map(({ icon: Icon, color, platform, stat }) => (
              <div key={platform} className="bg-white/[0.04] border border-white/8 rounded-xl p-3 flex items-center gap-2.5">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}>
                  <Icon size={13} />
                </div>
                <div>
                  <div className="text-white text-[0.75rem] font-semibold">{platform}</div>
                  <div className="text-amber-300 text-[0.68rem] font-bold">{stat}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom trust */}
        <div className="z-10 flex items-center gap-3">
          <div className="flex -space-x-2">
            {['A','K','M','T','B'].map((l, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-amber-300 border-2 border-[#041f1d] flex items-center justify-center text-[0.7rem] font-extrabold text-[#073936]">{l}</div>
            ))}
          </div>
          <span className="text-white/45 text-[0.78rem]">10,000+ customers & growing</span>
        </div>
      </div>

      {/* ── Right panel (form) ── */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 relative">

        {/* Back link (mobile) */}
        <Link
          to="/"
          className={`lg:hidden inline-flex items-center gap-1.5 text-xs font-semibold mb-8 no-underline transition-colors ${dark ? 'text-white/45 hover:text-amber-300' : 'text-zinc-500 hover:text-amber-600'}`}
        >
          <ChevronLeft size={14} /> Back to home
        </Link>

        <div className="w-full max-w-md mx-auto">
          {/* Mobile logo */}
          <Link to="/" className="lg:hidden flex items-center gap-1 no-underline mb-8">
            <span className="font-extrabold text-xl tracking-tight">
              Daily<span className="text-amber-300">Boost</span>
            </span>
          </Link>

          <h1 className={`text-2xl font-extrabold tracking-tight mb-1 ${dark ? 'text-white' : 'text-[#0d2926]'}`}>
            Create your account
          </h1>
          <p className={`text-sm mb-8 ${dark ? 'text-white/45' : 'text-zinc-500'}`}>
            Free to sign up. No credit card required.&nbsp;
            <Link to="/signin" className="text-amber-400 font-semibold hover:text-amber-300 no-underline">
              Sign in instead
            </Link>
          </p>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

            {/* Full name */}
            <div>
              <label className={labelCls}>Full Name</label>
              <input
                type="text"
                placeholder="Adaeze Okonkwo"
                value={form.name}
                onChange={set('name')}
                className={inputCls('name')}
              />
              {errors.name && <p className="text-red-400 text-[0.75rem] mt-1.5">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className={labelCls}>Email Address</label>
              <input
                type="email"
                placeholder="adaeze@example.com"
                value={form.email}
                onChange={set('email')}
                className={inputCls('email')}
              />
              {errors.email && <p className="text-red-400 text-[0.75rem] mt-1.5">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label className={labelCls}>Password</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="At least 8 characters"
                  value={form.password}
                  onChange={set('password')}
                  className={`${inputCls('password')} pr-11`}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className={`absolute right-3.5 top-1/2 -translate-y-1/2 cursor-pointer bg-transparent border-none p-0 ${dark ? 'text-white/35 hover:text-white/70' : 'text-zinc-400 hover:text-zinc-600'}`}
                >
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
              {/* Strength meter */}
              {form.password && (
                <div className="mt-2.5">
                  <div className="flex gap-1 mb-1">
                    {[1,2,3,4].map((n) => (
                      <div key={n} className={`h-1 flex-1 rounded-full transition-all duration-300 ${strength >= n ? strengthColor : dark ? 'bg-white/10' : 'bg-zinc-200'}`} />
                    ))}
                  </div>
                  <p className={`text-[0.72rem] font-semibold ${['','text-red-400','text-orange-400','text-yellow-500','text-green-400'][strength]}`}>
                    {strengthLabel} password
                  </p>
                </div>
              )}
              {errors.password && <p className="text-red-400 text-[0.75rem] mt-1.5">{errors.password}</p>}
            </div>

            {/* Referral (optional) */}
            <div>
              <label className={labelCls}>
                Referral Code <span className={`font-normal ${dark ? 'text-white/30' : 'text-zinc-400'}`}>(optional)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. BOOST100"
                value={form.referral}
                onChange={set('referral')}
                className={inputCls('referral')}
              />
            </div>

            {/* Terms */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer group">
                <div
                  onClick={() => setAgreed(!agreed)}
                  className={`w-5 h-5 mt-0.5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all cursor-pointer ${
                    agreed
                      ? 'bg-amber-300 border-amber-300'
                      : errors.agreed
                      ? 'border-red-400'
                      : dark ? 'border-white/20 group-hover:border-amber-300/50' : 'border-zinc-300 group-hover:border-amber-400'
                  }`}
                >
                  {agreed && <Check size={11} strokeWidth={3} className="text-[#073936]" />}
                </div>
                <span className={`text-[0.82rem] leading-relaxed select-none ${dark ? 'text-white/55' : 'text-zinc-600'}`}>
                  I agree to the{' '}
                  <Link to="#" className="text-amber-400 font-semibold hover:text-amber-300 no-underline">Terms of Service</Link>
                  {' '}and{' '}
                  <Link to="#" className="text-amber-400 font-semibold hover:text-amber-300 no-underline">Privacy Policy</Link>
                </span>
              </label>
              {errors.agreed && <p className="text-red-400 text-[0.75rem] mt-1.5">{errors.agreed}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-sm bg-amber-300 text-[#073936] hover:bg-amber-400 transition-all hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2 cursor-pointer border-none mt-1"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-[#073936]/30 border-t-[#073936] animate-spin" />
                  Creating account…
                </>
              ) : (
                <>Create Free Account <ArrowRight size={15} /></>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className={`flex-1 h-px ${dark ? 'bg-white/8' : 'bg-zinc-200'}`} />
            <span className={`text-[0.75rem] font-medium ${dark ? 'text-white/25' : 'text-zinc-400'}`}>or continue with</span>
            <div className={`flex-1 h-px ${dark ? 'bg-white/8' : 'bg-zinc-200'}`} />
          </div>

          {/* Social login placeholders */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Google',   icon: '🌐' },
              { label: 'Facebook', icon: '👥' },
            ].map(({ label, icon }) => (
              <button
                key={label}
                type="button"
                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-semibold transition-all hover:-translate-y-px cursor-pointer ${
                  dark ? 'bg-white/5 border-white/10 text-white/70 hover:border-amber-300/40 hover:bg-white/8' : 'bg-white border-zinc-200 text-zinc-700 hover:border-amber-300 hover:bg-amber-50'
                }`}
              >
                <span>{icon}</span> {label}
              </button>
            ))}
          </div>

          <p className={`text-[0.75rem] text-center mt-8 ${dark ? 'text-white/25' : 'text-zinc-400'}`}>
            Already have an account?{' '}
            <Link to="/signin" className="text-amber-400 font-semibold hover:text-amber-300 no-underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
