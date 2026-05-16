import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AlertCircle,
  BarChart3,
  Bell,
  CheckCircle2,
  ChevronDown,
  Clock3,
  CreditCard,
  Facebook,
  Headphones,
  Home,
  Instagram,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Music2,
  Plus,
  Search,
  Send,
  Settings,
  ShoppingCart,
  Users,
  Wallet,
  X,
  Youtube,
} from 'lucide-react'

import logoLight from '/public/img/Trendeveblack.png'
import logoDark from '/public/img/TrendeveWhite.png'

const NAV_ITEMS = [
  { label: 'Overview', icon: LayoutDashboard, active: true },
  { label: 'New Order', icon: Plus },
  { label: 'Orders', icon: ShoppingCart },
  { label: 'Wallet', icon: Wallet },
  { label: 'Support', icon: Headphones },
  { label: 'Settings', icon: Settings },
]

const STATS = [
  { label: 'Wallet Balance', value: 'N48,650', trend: '+N12,000 this week', icon: Wallet, color: 'text-emerald-400 bg-emerald-400/10' },
  { label: 'Active Orders', value: '14', trend: '6 delivering now', icon: Clock3, color: 'text-sky-400 bg-sky-400/10' },
  { label: 'Completed', value: '238', trend: '99.8% success rate', icon: CheckCircle2, color: 'text-amber-300 bg-amber-300/10' },
  { label: 'Total Reach', value: '1.8M', trend: '+18.4% this month', icon: BarChart3, color: 'text-rose-400 bg-rose-400/10' },
]

const SERVICES = [
  { name: 'Instagram Followers', platform: 'Instagram', rate: 4200, min: 100, icon: Instagram, color: 'text-rose-400 bg-rose-400/10' },
  { name: 'TikTok Views', platform: 'TikTok', rate: 600, min: 1000, icon: Music2, color: 'text-pink-400 bg-pink-400/10' },
  { name: 'YouTube Views', platform: 'YouTube', rate: 945, min: 1000, icon: Youtube, color: 'text-red-400 bg-red-400/10' },
  { name: 'Telegram Members', platform: 'Telegram', rate: 418, min: 500, icon: Send, color: 'text-sky-400 bg-sky-400/10' },
  { name: 'Facebook Page Likes', platform: 'Facebook', rate: 1800, min: 100, icon: Facebook, color: 'text-blue-400 bg-blue-400/10' },
]

const ORDERS = [
  { id: '#TD-4819', service: 'Instagram Likes NG', link: '@ada.styles', amount: 'N16,000', status: 'Processing', progress: 68, time: '12 min ago' },
  { id: '#TD-4818', service: 'TikTok Views', link: 'vm.tiktok.com/24M...', amount: 'N6,000', status: 'Delivering', progress: 42, time: '28 min ago' },
  { id: '#TD-4817', service: 'Telegram Members', link: 't.me/trendhub', amount: 'N4,180', status: 'Completed', progress: 100, time: '1 hr ago' },
  { id: '#TD-4816', service: 'YouTube Views', link: 'youtu.be/launch', amount: 'N9,450', status: 'Review', progress: 12, time: '2 hrs ago' },
]

const ACTIVITY = [
  { title: 'Wallet funded successfully', meta: 'Paystack transfer - N12,000', time: '8:24 PM', icon: CreditCard },
  { title: 'Order #TD-4817 completed', meta: 'Telegram Members delivered', time: '7:48 PM', icon: CheckCircle2 },
  { title: 'Support replied to your ticket', meta: 'Ticket DB-204 is waiting', time: '6:10 PM', icon: MessageSquare },
]

const CHART = [42, 58, 46, 74, 64, 88, 79]
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function StatusBadge({ status }) {
  const styles = {
    Completed: 'bg-emerald-400/10 text-emerald-300 border-emerald-300/20',
    Delivering: 'bg-sky-400/10 text-sky-300 border-sky-300/20',
    Processing: 'bg-amber-300/10 text-amber-300 border-amber-300/20',
    Review: 'bg-rose-400/10 text-rose-300 border-rose-300/20',
  }

  return (
    <span className={`inline-flex items-center rounded-md border px-2 py-1 text-[0.72rem] font-bold ${styles[status]}`}>
      {status}
    </span>
  )
}

export default function Dashboard({ dark }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(SERVICES[0].name)
  const [quantity, setQuantity] = useState(1000)
  const [search, setSearch] = useState('')

  const service = SERVICES.find((item) => item.name === selectedService) ?? SERVICES[0]
  const estimate = useMemo(() => Math.ceil((quantity / 1000) * service.rate), [quantity, service.rate])

  const shell = dark ? 'bg-[#041f1d] text-white' : 'bg-[#f5f9f8] text-[#0d2926]'
  const panel = dark ? 'bg-white/[0.04] border-white/10' : 'bg-white border-zinc-200'
  const muted = dark ? 'text-white/50' : 'text-zinc-500'
  const strong = dark ? 'text-white' : 'text-[#0d2926]'
  const input = dark
    ? 'bg-white/[0.06] border-white/10 text-white placeholder-white/30 focus:border-amber-300'
    : 'bg-white border-zinc-200 text-[#0d2926] placeholder-zinc-400 focus:border-amber-400'
  const logo = dark ? logoDark : logoLight

  return (
    <div className={`min-h-screen ${shell}`}>
      <div className="flex min-h-screen">
        <aside className={`fixed inset-y-0 left-0 z-50 w-72 border-r p-4 transition-transform duration-300 lg:static lg:translate-x-0 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} ${dark ? 'bg-[#052b28] border-white/10' : 'bg-white border-zinc-200'}`}>
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="Trendeve" className="h-8 w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className={`grid h-9 w-9 place-items-center rounded-lg border lg:hidden ${dark ? 'border-white/10 text-white' : 'border-zinc-200 text-zinc-700'}`}
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-1">
              {NAV_ITEMS.map(({ label, icon: Icon, active }) => (
                <button
                  key={label}
                  type="button"
                  className={`flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-semibold transition ${
                    active
                      ? 'bg-amber-300 text-[#073936]'
                      : dark
                      ? 'text-white/62 hover:bg-white/[0.06] hover:text-white'
                      : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                  }`}
                >
                  <Icon size={18} />
                  {label}
                </button>
              ))}
            </nav>

            <div className={`mt-auto rounded-lg border p-4 ${dark ? 'border-amber-300/20 bg-amber-300/8' : 'border-amber-200 bg-amber-50'}`}>
              <p className={`text-xs font-bold uppercase tracking-[0.12em] ${dark ? 'text-amber-200' : 'text-amber-700'}`}>Reseller API</p>
              <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-white/60' : 'text-zinc-600'}`}>
                Connect your panel and process bulk orders from one wallet.
              </p>
              <Link to="/api" className="mt-4 inline-flex h-9 items-center rounded-md bg-amber-300 px-3 text-xs font-bold text-[#073936] no-underline hover:bg-amber-400">
                View API
              </Link>
            </div>

            <Link to="/signin" className={`mt-4 flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-semibold no-underline ${dark ? 'text-white/50 hover:bg-white/[0.06] hover:text-white' : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900'}`}>
              <LogOut size={18} />
              Sign out
            </Link>
          </div>
        </aside>

        {menuOpen && (
          <button
            type="button"
            aria-label="Close dashboard menu"
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}

        <main className="min-w-0 flex-1">
          <header className={`sticky top-0 z-30 border-b backdrop-blur-xl ${dark ? 'bg-[#041f1d]/82 border-white/10' : 'bg-[#f5f9f8]/82 border-zinc-200'}`}>
            <div className="flex h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className={`grid h-10 w-10 place-items-center rounded-lg border lg:hidden ${dark ? 'border-white/10 text-white' : 'border-zinc-200 text-zinc-700'}`}
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>

              <div className={`hidden h-10 flex-1 max-w-xl items-center gap-2 rounded-lg border px-3 md:flex ${input}`}>
                <Search size={17} className={dark ? 'text-white/35' : 'text-zinc-400'} />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search orders, services, tickets"
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>

              <div className="ml-auto flex items-center gap-2">
                <button className={`relative grid h-10 w-10 place-items-center rounded-lg border ${dark ? 'border-white/10 text-white/70 hover:bg-white/[0.06]' : 'border-zinc-200 text-zinc-600 hover:bg-white'}`} aria-label="Notifications">
                  <Bell size={18} />
                  <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-400" />
                </button>
                <div className={`flex h-10 items-center gap-3 rounded-lg border pl-2 pr-3 ${panel}`}>
                  <div className="grid h-7 w-7 place-items-center rounded-md bg-amber-300 text-xs font-extrabold text-[#073936]">AO</div>
                  <div className="hidden sm:block">
                    <p className={`text-xs font-bold leading-none ${strong}`}>Ada Okafor</p>
                    <p className={`mt-1 text-[0.68rem] leading-none ${muted}`}>Customer</p>
                  </div>
                  <ChevronDown size={15} className={muted} />
                </div>
              </div>
            </div>
          </header>

          <div className="px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className={`text-sm font-semibold ${dark ? 'text-amber-200' : 'text-amber-700'}`}>Welcome back, Ada</p>
                <h1 className={`mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl ${strong}`}>User Dashboard</h1>
              </div>
              <div className="flex gap-2">
                <button className={`inline-flex h-10 items-center gap-2 rounded-lg border px-4 text-sm font-bold ${dark ? 'border-white/10 text-white hover:bg-white/[0.06]' : 'border-zinc-200 text-zinc-700 hover:bg-white'}`}>
                  <CreditCard size={17} />
                  Add Funds
                </button>
                <button className="inline-flex h-10 items-center gap-2 rounded-lg bg-amber-300 px-4 text-sm font-bold text-[#073936] hover:bg-amber-400">
                  <Plus size={17} />
                  New Order
                </button>
              </div>
            </div>

            <section className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {STATS.map(({ label, value, trend, icon: Icon, color }) => (
                <div key={label} className={`rounded-lg border p-4 ${panel}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className={`text-xs font-semibold ${muted}`}>{label}</p>
                      <p className={`mt-2 text-2xl font-extrabold ${strong}`}>{value}</p>
                    </div>
                    <div className={`grid h-10 w-10 place-items-center rounded-lg ${color}`}>
                      <Icon size={19} />
                    </div>
                  </div>
                  <p className={`mt-4 text-xs font-medium ${muted}`}>{trend}</p>
                </div>
              ))}
            </section>

            <section className="mt-6 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
              <div className={`rounded-lg border p-4 sm:p-5 ${panel}`}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className={`text-lg font-extrabold ${strong}`}>Place New Order</h2>
                    <p className={`text-sm ${muted}`}>Choose a service, paste your link, and submit in seconds.</p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-md border border-emerald-300/20 bg-emerald-400/10 px-2.5 py-1 text-xs font-bold text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Online
                  </span>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <label className="block">
                    <span className={`mb-1.5 block text-xs font-bold ${muted}`}>Service</span>
                    <select
                      value={selectedService}
                      onChange={(event) => setSelectedService(event.target.value)}
                      className={`h-11 w-full rounded-lg border px-3 text-sm outline-none ${input}`}
                    >
                      {SERVICES.map((item) => (
                        <option key={item.name} value={item.name}>{item.name}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className={`mb-1.5 block text-xs font-bold ${muted}`}>Quantity</span>
                    <input
                      type="number"
                      min={service.min}
                      step="100"
                      value={quantity}
                      onChange={(event) => setQuantity(Number(event.target.value))}
                      className={`h-11 w-full rounded-lg border px-3 text-sm outline-none ${input}`}
                    />
                  </label>
                  <label className="block lg:col-span-2">
                    <span className={`mb-1.5 block text-xs font-bold ${muted}`}>Link</span>
                    <input
                      type="url"
                      placeholder="https://instagram.com/p/example"
                      className={`h-11 w-full rounded-lg border px-3 text-sm outline-none ${input}`}
                    />
                  </label>
                </div>

                <div className={`mt-5 grid gap-3 rounded-lg border p-4 sm:grid-cols-3 ${dark ? 'border-white/10 bg-black/10' : 'border-zinc-200 bg-zinc-50'}`}>
                  <div>
                    <p className={`text-xs font-semibold ${muted}`}>Platform</p>
                    <p className={`mt-1 text-sm font-bold ${strong}`}>{service.platform}</p>
                  </div>
                  <div>
                    <p className={`text-xs font-semibold ${muted}`}>Rate</p>
                    <p className={`mt-1 text-sm font-bold ${strong}`}>N{service.rate.toLocaleString()}/1K</p>
                  </div>
                  <div>
                    <p className={`text-xs font-semibold ${muted}`}>Estimated Cost</p>
                    <p className="mt-1 text-sm font-extrabold text-amber-300">N{estimate.toLocaleString()}</p>
                  </div>
                </div>

                <button className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-amber-300 text-sm font-extrabold text-[#073936] hover:bg-amber-400 sm:w-auto sm:px-5">
                  <ShoppingCart size={17} />
                  Submit Order
                </button>
              </div>

              <div className={`rounded-lg border p-4 sm:p-5 ${panel}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className={`text-lg font-extrabold ${strong}`}>Weekly Growth</h2>
                    <p className={`text-sm ${muted}`}>Delivered engagement by day.</p>
                  </div>
                  <span className="text-sm font-extrabold text-emerald-300">+18.4%</span>
                </div>
                <div className="mt-6 flex h-56 items-end gap-3">
                  {CHART.map((height, index) => (
                    <div key={DAYS[index]} className="flex flex-1 flex-col items-center gap-2">
                      <div className={`relative flex h-44 w-full items-end rounded-md ${dark ? 'bg-white/[0.04]' : 'bg-zinc-100'}`}>
                        <div
                          className={`w-full rounded-md ${index === 5 ? 'bg-amber-300' : dark ? 'bg-[#1ba79b]' : 'bg-[#0a6f66]'}`}
                          style={{ height: `${height}%` }}
                        />
                      </div>
                      <span className={`text-[0.7rem] font-bold ${muted}`}>{DAYS[index]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-6 grid gap-4 xl:grid-cols-[1fr_360px]">
              <div className={`overflow-hidden rounded-lg border ${panel}`}>
                <div className="flex items-center justify-between border-b border-inherit p-4 sm:p-5">
                  <div>
                    <h2 className={`text-lg font-extrabold ${strong}`}>Recent Orders</h2>
                    <p className={`text-sm ${muted}`}>Live status from your latest purchases.</p>
                  </div>
                  <button className={`hidden rounded-lg border px-3 py-2 text-xs font-bold sm:inline-flex ${dark ? 'border-white/10 text-white/70 hover:bg-white/[0.06]' : 'border-zinc-200 text-zinc-600 hover:bg-zinc-50'}`}>
                    View All
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[720px] text-left">
                    <thead className={dark ? 'bg-white/[0.03]' : 'bg-zinc-50'}>
                      <tr className={`text-[0.72rem] uppercase tracking-[0.08em] ${muted}`}>
                        <th className="px-5 py-3 font-bold">Order</th>
                        <th className="px-5 py-3 font-bold">Service</th>
                        <th className="px-5 py-3 font-bold">Amount</th>
                        <th className="px-5 py-3 font-bold">Status</th>
                        <th className="px-5 py-3 font-bold">Progress</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {ORDERS.map((order) => (
                        <tr key={order.id} className={dark ? 'divide-white/10' : 'divide-zinc-200'}>
                          <td className="px-5 py-4">
                            <p className={`text-sm font-extrabold ${strong}`}>{order.id}</p>
                            <p className={`mt-1 text-xs ${muted}`}>{order.time}</p>
                          </td>
                          <td className="px-5 py-4">
                            <p className={`text-sm font-bold ${strong}`}>{order.service}</p>
                            <p className={`mt-1 max-w-[180px] truncate text-xs ${muted}`}>{order.link}</p>
                          </td>
                          <td className={`px-5 py-4 text-sm font-bold ${strong}`}>{order.amount}</td>
                          <td className="px-5 py-4"><StatusBadge status={order.status} /></td>
                          <td className="px-5 py-4">
                            <div className={`h-2 w-28 rounded-full ${dark ? 'bg-white/10' : 'bg-zinc-200'}`}>
                              <div className="h-full rounded-full bg-amber-300" style={{ width: `${order.progress}%` }} />
                            </div>
                            <p className={`mt-1 text-xs font-semibold ${muted}`}>{order.progress}%</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid gap-4">
                <div className={`rounded-lg border p-4 sm:p-5 ${panel}`}>
                  <h2 className={`text-lg font-extrabold ${strong}`}>Popular Services</h2>
                  <div className="mt-4 grid gap-2">
                    {SERVICES.slice(0, 4).map(({ name, rate, icon: Icon, color }) => (
                      <button key={name} className={`flex items-center justify-between rounded-lg border p-3 text-left transition ${dark ? 'border-white/10 hover:bg-white/[0.05]' : 'border-zinc-200 hover:bg-zinc-50'}`}>
                        <span className="flex min-w-0 items-center gap-3">
                          <span className={`grid h-9 w-9 place-items-center rounded-lg ${color}`}>
                            <Icon size={17} />
                          </span>
                          <span className="min-w-0">
                            <span className={`block truncate text-sm font-bold ${strong}`}>{name}</span>
                            <span className={`text-xs ${muted}`}>From N{rate.toLocaleString()}/1K</span>
                          </span>
                        </span>
                        <Plus size={16} className={muted} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className={`rounded-lg border p-4 sm:p-5 ${panel}`}>
                  <div className="flex items-center justify-between">
                    <h2 className={`text-lg font-extrabold ${strong}`}>Activity</h2>
                    <AlertCircle size={17} className={muted} />
                  </div>
                  <div className="mt-4 space-y-4">
                    {ACTIVITY.map(({ title, meta, time, icon: Icon }) => (
                      <div key={title} className="flex gap-3">
                        <div className={`mt-0.5 grid h-8 w-8 place-items-center rounded-lg ${dark ? 'bg-white/[0.06] text-amber-300' : 'bg-amber-50 text-amber-700'}`}>
                          <Icon size={16} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <p className={`truncate text-sm font-bold ${strong}`}>{title}</p>
                            <span className={`text-xs ${muted}`}>{time}</span>
                          </div>
                          <p className={`mt-1 text-xs ${muted}`}>{meta}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
