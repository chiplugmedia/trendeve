// ── Hero stats ──────────────────────────────────────────────
export const HERO_STATS = [
  { num: '50K+',  label: 'Orders Completed' },
  { num: '10K+',  label: 'Happy Customers'  },
  { num: '99.8%', label: 'Delivery Rate'    },
]

// ── Live orders (hero panel) ─────────────────────────────────
export const LIVE_ORDERS = [
  { platform: 'youtube',   name: 'YouTube Views [Global]',   meta: '~48 minutes · Fast',    price: '₦945/1K'    },
  { platform: 'tiktok',    name: 'TikTok Followers [Global]', meta: '~1h 22min · Faster!',  price: '₦6,189/1K'  },
  { platform: 'instagram', name: 'Instagram Likes 🇳🇬',       meta: 'Nigeria · Real · ~10min', price: '₦16,000/1K' },
  { platform: 'telegram',  name: 'Telegram Members',          meta: 'Worldwide · ~52min',    price: '₦418/1K'    },
  { platform: 'twitter',   name: 'X (Twitter) Views',         meta: 'Global · ~1 minute',    price: '₦173/1K'    },
]

// ── Platforms bar ────────────────────────────────────────────
export const PLATFORMS = [
  'Instagram', 'TikTok', 'YouTube', 'Telegram',
  'Facebook',  'WhatsApp', 'Spotify', 'Audiomack',
]

// ── How It Works steps ───────────────────────────────────────
export const STEPS = [
  {
    num: '01', icon: 'UserPlus',
    title: 'Create Your Account',
    desc:  'Sign up for free in seconds. No credit card required. Your dashboard is ready immediately after registration.',
    arrow: true,
  },
  {
    num: '02', icon: 'CreditCard',
    title: 'Add Funds & Pick a Service',
    desc:  'Top up with Paystack, bank transfer, or crypto. Browse services and place your order in seconds.',
    arrow: true,
  },
  {
    num: '03', icon: 'BarChart2',
    title: 'Watch Your Numbers Grow',
    desc:  'Delivery starts within minutes. Track your order status in real-time from your personal dashboard.',
    arrow: false,
  },
]

// ── Service cards ────────────────────────────────────────────
export const SERVICES = [
  { platform: 'instagram', name: 'Instagram',         sub: 'Followers, Likes, Views, Comments, Saves',   color: 'from-rose-500/20 to-pink-600/20'    },
  { platform: 'tiktok',    name: 'TikTok',            sub: 'Followers, Views, Likes, Shares, Saves',     color: 'from-slate-800/40 to-zinc-700/20'   },
  { platform: 'youtube',   name: 'YouTube',           sub: 'Views, Subscribers, Likes, Comments',        color: 'from-red-500/20 to-red-600/20'      },
  { platform: 'telegram',  name: 'Telegram',          sub: 'Members, Views, Reactions, Post Views',      color: 'from-sky-500/20 to-blue-600/20'     },
  { platform: 'facebook',  name: 'Facebook',          sub: 'Page Likes, Followers, Post Views',          color: 'from-blue-600/20 to-indigo-600/20'  },
  { platform: 'twitter',   name: 'X (Twitter)',       sub: 'Followers, Likes, Retweets, Views',          color: 'from-zinc-600/20 to-slate-700/20'   },
  { platform: 'spotify',   name: 'Spotify & Audiomack', sub: 'Plays, Streams, Followers, Saves',         color: 'from-green-500/20 to-emerald-600/20'},
  { platform: 'nigeria',   name: 'Nigerian Services', sub: 'Real Nigerian engagement on all socials',    color: 'from-amber-500/20 to-yellow-600/20' },
]

// ── Why Us features ──────────────────────────────────────────
export const FEATURES = [
  { icon: 'Zap',         title: 'Lightning-Fast Delivery',    desc: 'Most orders begin within minutes. Our automated system runs 24/7, processing requests without delays.'            },
  { icon: 'Shield',      title: 'Real Nigerian Targeting',    desc: 'Get genuine Nigerian followers, likes and comments — real accounts from people in Nigeria, not bots.'            },
  { icon: 'DollarSign',  title: 'Lowest Prices in Naira',     desc: 'Competitive NGN pricing with zero hidden charges. Pay via Paystack, bank transfer or crypto.'                    },
  { icon: 'Plug',        title: 'Full Reseller API',          desc: 'Build your own SMM panel on our infrastructure. Full API access for agencies and resellers.'                     },
]

// ── Metrics panel ────────────────────────────────────────────
export const METRICS = [
  { label: 'Instagram Likes (Nigeria 🇳🇬)',    value: '₦16,000/1K', badge: 'Live',    badgeClass: 'bg-amber-400/15 text-amber-300'  },
  { label: 'TikTok Views [Faster!]',           value: '₦600/1K',    badge: 'Fastest', badgeClass: 'bg-amber-400/15 text-amber-300'  },
  { label: 'Telegram Members [Worldwide]',     value: '₦418/1K',    badge: 'Global',  badgeClass: 'bg-sky-400/15 text-sky-300'      },
  { label: 'YouTube Views [Global]',           value: '₦945/1K',    badge: '~48min',  badgeClass: 'bg-purple-400/15 text-purple-300'},
  { label: 'X Tweet Views [Global]',           value: '₦173/1K',    badge: '~1min',   badgeClass: 'bg-orange-400/15 text-orange-300'},
]

export const CHART_BARS = [
  { h: '38%', day: 'Mon' }, { h: '57%', day: 'Tue' }, { h: '44%', day: 'Wed' },
  { h: '74%', day: 'Thu' }, { h: '61%', day: 'Fri' }, { h: '92%', day: 'Sat', hi: true },
  { h: '80%', day: 'Sun' },
]

// ── Pricing plans ────────────────────────────────────────────
export const PLANS = [
  {
    name: 'Starter', price: '₦2,000', period: 'minimum deposit', popular: false,
    desc: 'Perfect for creators and individuals just getting started with social media growth.',
    features: ['All global services', 'TikTok, Instagram, Telegram & more', 'Fast automated delivery', 'Personal order dashboard'],
    cta: 'Get Started',
  },
  {
    name: 'Growth', price: '₦10,000', period: 'recommended deposit', popular: true,
    desc: 'Best for small businesses and influencers scaling their online presence.',
    features: ['Everything in Starter', 'Real Nigerian-targeted services', 'Priority order processing', 'Bulk order discounts', '24/7 live support'],
    cta: 'Start Now',
  },
  {
    name: 'Reseller / API', price: 'Custom', period: 'volume-based pricing', popular: false,
    desc: 'For agencies and panel owners who want to resell our services at scale.',
    features: ['Full API integration', 'Wholesale pricing', 'Child panel support', 'Mass order feature', 'Dedicated account manager'],
    cta: 'Contact Us',
  },
]

// ── Testimonials ─────────────────────────────────────────────
export const TESTIMONIALS = [
  { initial: 'A', name: 'Adaeze O.',  role: 'Fashion Influencer · Lagos', text: 'Daily Boost is the best SMM panel in Nigeria. Fast delivery, real engagement, and prices that actually make sense in Naira. My Instagram took off in 3 days.' },
  { initial: 'K', name: 'Kehinde B.', role: 'Agency Owner · Abuja',       text: 'I run a digital marketing agency and Daily Boost saves me hours every week. The API works perfectly and Nigerian targeting is exactly what my clients need.' },
  { initial: 'M', name: 'Musa I.',    role: 'Music Artist · Kano',        text: 'I promoted my song on TikTok and Audiomack through Daily Boost. Within 24 hours I had over 50K views. Affordable, fast, and it genuinely works!' },
]

// ── Footer links ─────────────────────────────────────────────
export const FOOTER_LINKS = {
  Platform: ['Services', 'API', 'Pricing', 'Order Status'],
  Company:  ['About Us', 'Blog', 'Affiliate Program', 'Contact'],
  Support:  ['Help Center', 'Terms of Service', 'Privacy Policy', 'Refund Policy'],
}

// ── Nav links ────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'Pricing',  to: '/pricing'  },
  { label: 'API',      to: '/api'      },
]

// ── API page data ────────────────────────────────────────────
export const API_FEATURES = [
  { icon: 'Zap',         title: 'Blazing Fast',       desc: 'Sub-100ms response times. Optimised for bulk order submission and real-time status polling.'          },
  { icon: 'Lock',        title: 'Secure by Default',  desc: 'API key authentication, HTTPS-only endpoints, and IP whitelist support for enterprise clients.'      },
  { icon: 'RefreshCw',   title: 'Real-Time Webhooks', desc: 'Push notifications for order status changes — no need to poll. Integrate into any stack instantly.'   },
  { icon: 'Globe',       title: 'Global Reach',       desc: 'Access every service across all platforms from a single endpoint. One integration, unlimited scale.'  },
]

export const API_ENDPOINTS = [
  { method: 'GET',  path: '/v2/services',          desc: 'List all available services with IDs and pricing'          },
  { method: 'POST', path: '/v2/order',             desc: 'Place a new order (service_id, link, quantity)'            },
  { method: 'GET',  path: '/v2/order/:id',         desc: 'Fetch status and progress of an existing order'            },
  { method: 'GET',  path: '/v2/balance',           desc: 'Retrieve current wallet balance in NGN'                    },
  { method: 'POST', path: '/v2/order/bulk',        desc: 'Submit multiple orders in a single request'                },
  { method: 'POST', path: '/v2/order/:id/cancel',  desc: 'Request cancellation for a refundable order'               },
]
