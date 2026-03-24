import { Check, HelpCircle } from 'lucide-react'
import { SectionHeader, Eyebrow } from '../components/ui'
import PricingCards from '../components/PricingCards'
import CtaSection from '../components/CtaSection'

const FAQS = [
  {
    q: 'Do I need a subscription?',
    a: 'No. Daily Boost is pay-as-you-go. Top up your balance in Naira and spend it on any service at any time.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept Paystack, bank transfer, and cryptocurrency. All transactions are in Naira.',
  },
  {
    q: 'Is there a minimum order amount?',
    a: 'Minimum wallet top-up is ₦2,000. Orders can start from ₦50 depending on the service.',
  },
  {
    q: 'Can I get a refund if an order fails?',
    a: 'Yes. Failed orders are automatically refunded to your wallet within minutes.',
  },
  {
    q: 'How do I access the API?',
    a: 'Go to Settings → API after signup and generate your key.',
  },
  {
    q: 'Are the followers real?',
    a: 'We offer both global and Nigerian-targeted services using real or high-quality accounts.',
  },
]

export default function Pricing({ dark }) {
  const card = dark
    ? 'bg-white/[0.04] border-white/10 hover:border-amber-300/25'
    : 'bg-white border-zinc-200 hover:border-amber-300/40'

  return (
    <>
      {/* Header */}
      <section
        className="px-[5%] py-16 text-center"
        style={{
          background: dark
            ? 'linear-gradient(150deg,#041f1d,#073936 60%,#0a4e49)'
            : 'linear-gradient(150deg,#073936,#0a4e49)'
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <Eyebrow>Pricing</Eyebrow>

          <h1 className="text-[clamp(1.9rem,3vw,2.7rem)] font-extrabold text-white tracking-tight mb-4">
            Simple, Transparent Pricing in Naira
          </h1>

          <p className="text-white/65 text-[0.97rem] max-w-[480px] mx-auto leading-[1.8]">
            No subscriptions. No surprises. Pay only for what you use.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className={`px-[5%] py-20 ${dark ? 'bg-[#0a4e49]' : 'bg-[#e8f4f2]'}`}>
        <div className="max-w-[1200px] mx-auto">
          <PricingCards dark={dark} />
        </div>
      </section>

      {/* Included features */}
      <section className={`px-[5%] py-16 ${dark ? 'bg-[#073936]' : 'bg-[#f5f9f8]'}`}>
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            center
            eyebrow="What's Included"
            title="All plans include"
            sub="Every account gets full platform access."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {INCLUDED_FEATURES.map((f) => (
              <div key={f} className={`flex items-center gap-3 p-4 rounded-xl border ${card}`}>
                <div className="w-7 h-7 rounded-full bg-amber-300/15 flex items-center justify-center">
                  <Check size={13} className="text-amber-300" strokeWidth={3} />
                </div>

                <span className={`text-sm font-medium ${dark ? 'text-white/75' : 'text-[#2e5550]'}`}>
                  {f}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`px-[5%] py-16 ${dark ? 'bg-[#0a4e49]' : 'bg-[#e8f4f2]'}`}>
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            center
            eyebrow="FAQ"
            title="Frequently asked questions"
            sub="Everything you need to know."
          />

          <div className="max-w-3xl mx-auto grid gap-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className={`rounded-xl border p-5 ${card}`}>
                <div className="flex gap-3">
                  <HelpCircle size={16} className="text-amber-300 mt-0.5" />

                  <div>
                    <div className={`font-bold text-sm mb-2 ${dark ? 'text-white' : 'text-[#0d2926]'}`}>
                      {faq.q}
                    </div>

                    <p className={`text-sm ${dark ? 'text-white/55' : 'text-zinc-600'}`}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

const INCLUDED_FEATURES = [
  'Access to 500+ services',
  'Real-time order tracking',
  'Naira wallet & top-up',
  'Paystack & bank transfer',
  'Personal dashboard',
  'Order history & reports',
  'Nigerian-targeted services',
  'Drip-feed delivery option',
  'API access',
  'Bulk order support',
  'Affiliate programme',
  '24/7 support',
]