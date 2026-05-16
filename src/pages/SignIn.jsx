import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Eye, EyeOff, ArrowRight, ChevronLeft,
  ShieldCheck, Zap, BarChart2, Globe, Users
} from 'lucide-react'

const STATS = [
  { icon: ShieldCheck, value: '99.8%',   label: 'Delivery rate'    },
  { icon: Zap,         value: '< 5min',  label: 'Avg. start time'  },
  { icon: BarChart2,   value: '50K+',    label: 'Orders completed' },
]

export default function SignIn({ dark }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPass, setShowPass] = useState(false)
  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [authErr, setAuthErr] = useState('')

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!form.email.match(/^\S+@\S+\.\S+$/)) e.email = 'Enter a valid email address'
    if (!form.password) e.password = 'Password is required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setAuthErr('')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if (form.email === 'wrong@example.com') {
        setAuthErr('Invalid email or password. Please try again.')
      } else {
        navigate('/dashboard')
      }
    }, 1500)
  }

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

      {/* Left decorative panel */}
      <div className="hidden lg:flex lg:w-[45%] flex-col justify-between p-12 relative overflow-hidden"
           style={{ background: 'linear-gradient(150deg,#041f1d 0%,#073936 50%,#0a4e49 100%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none"
             style={{ background: 'radial-gradient(circle, rgba(250,222,164,0.07) 0%, transparent 65%)' }} />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
             style={{ background: 'radial-gradient(circle, rgba(13,98,89,0.5) 0%, transparent 65%)' }} />

        <Link to="/" className="flex items-center gap-1 no-underline z-10">
          <span className="font-extrabold text-xl tracking-tight text-white">
            Daily<span className="text-amber-300">Boost</span>
          </span>
        </Link>

        <div className="z-10">
          <h2 className="text-[2.4rem] font-extrabold text-white leading-tight tracking-tight mb-4">
            Welcome back.<br />
            <span className="text-amber-300">Keep growing.</span>
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-12 max-w-xs">
            Your orders, balance, and analytics are waiting for you in your dashboard.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-12">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-white/[0.04] border border-white/8 rounded-2xl p-4 text-center">
                <div className="w-8 h-8 rounded-xl bg-amber-300/10 border border-amber-300/20 flex items-center justify-center mx-auto mb-3">
                  <Icon size={14} className="text-amber-300" />
                </div>
                <div className="text-white font-extrabold text-lg leading-none mb-1">{value}</div>
                <div className="text-white/35 text-[0.65rem] uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 relative">
        <Link to="/" className={`lg:hidden inline-flex items-center gap-1.5 text-xs font-semibold mb-8 no-underline transition-colors ${dark ? 'text-white/45 hover:text-amber-300' : 'text-zinc-500 hover:text-amber-600'}`}>
          <ChevronLeft size={14} /> Back to home
        </Link>

        <div className="w-full max-w-md mx-auto">
          <Link to="/" className="lg:hidden flex items-center gap-1 no-underline mb-8">
            <span className="font-extrabold text-xl tracking-tight">
              Daily<span className="text-amber-300">Boost</span>
            </span>
          </Link>

          <h1 className={`text-2xl font-extrabold tracking-tight mb-1 ${dark ? 'text-white' : 'text-[#0d2926]'}`}>Sign in to your account</h1>
          <p className={`text-sm mb-8 ${dark ? 'text-white/45' : 'text-zinc-500'}`}>
            Don't have an account?{' '}
            <Link to="/signup" className="text-amber-400 font-semibold hover:text-amber-300 no-underline">
              Create one for free
            </Link>
          </p>

          {/* Auth error */}
          {authErr && (
            <div className="mb-5 flex items-center gap-3 bg-red-400/10 border border-red-400/25 text-red-400 px-4 py-3 rounded-xl text-sm">
              <span className="text-base">⚠️</span>
              <span>{authErr}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            {/* Email */}
            <div>
              <label className={labelCls}>Email Address</label>
              <input
                type="email"
                placeholder="adaeze@example.com"
                value={form.email}
                onChange={set('email')}
                className={inputCls('email')}
                autoComplete="email"
              />
              {errors.email && <p className="text-red-400 text-[0.75rem] mt-1.5">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className={`text-[0.78rem] font-semibold ${dark ? 'text-white/70' : 'text-[#2e5550]'}`}>Password</label>
                <Link to="/forgot-password" className="text-[0.75rem] text-amber-400 font-semibold hover:text-amber-300 no-underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="Your password"
                  value={form.password}
                  onChange={set('password')}
                  className={`${inputCls('password')} pr-11`}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className={`absolute right-3.5 top-1/2 -translate-y-1/2 cursor-pointer bg-transparent border-none p-0 ${dark ? 'text-white/35 hover:text-white/70' : 'text-zinc-400 hover:text-zinc-600'}`}
                >
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
              {errors.password && <p className="text-red-400 text-[0.75rem] mt-1.5">{errors.password}</p>}
            </div>

            {/* Remember me */}
            <label className="flex items-center gap-3 cursor-pointer group">
              <div
                onClick={() => setRemember(!remember)}
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all cursor-pointer ${
                  remember
                    ? 'bg-amber-300 border-amber-300'
                    : dark ? 'border-white/20 group-hover:border-amber-300/50' : 'border-zinc-300 group-hover:border-amber-400'
                }`}
              >
                {remember && (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#073936" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className={`text-[0.82rem] select-none ${dark ? 'text-white/55' : 'text-zinc-600'}`}>
                Keep me signed in for 30 days
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-sm bg-amber-300 text-[#073936] hover:bg-amber-400 transition-all hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2 cursor-pointer border-none mt-1"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-[#073936]/30 border-t-[#073936] animate-spin" />
                  Signing in…
                </>
              ) : (
                <>Sign In <ArrowRight size={15} /></>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className={`flex-1 h-px ${dark ? 'bg-white/8' : 'bg-zinc-200'}`} />
            <span className={`text-[0.75rem] font-medium ${dark ? 'text-white/25' : 'text-zinc-400'}`}>or continue with</span>
            <div className={`flex-1 h-px ${dark ? 'bg-white/8' : 'bg-zinc-200'}`} />
          </div>

          {/* Social buttons */}
          <div className="grid grid-cols-2 gap-3">
            {[{ label: 'Google', icon: Globe }, { label: 'Facebook', icon: Users }].map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-semibold transition-all hover:-translate-y-px cursor-pointer ${
                  dark ? 'bg-white/5 border-white/10 text-white/70 hover:border-amber-300/40 hover:bg-white/8' : 'bg-white border-zinc-200 text-zinc-700 hover:border-amber-300 hover:bg-amber-50'
                }`}
              >
                <Icon size={16} /> {label}
              </button>
            ))}
          </div>

          {/* Sign up nudge */}
          <p className={`text-[0.75rem] text-center mt-8 ${dark ? 'text-white/25' : 'text-zinc-400'}`}>
            New to Daily Boost?{' '}
            <Link to="/signup" className="text-amber-400 font-semibold hover:text-amber-300 no-underline">
              Create a free account
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
