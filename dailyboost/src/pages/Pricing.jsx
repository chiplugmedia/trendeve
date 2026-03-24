import { Check, HelpCircle } from 'lucide-react'
import { SectionHeader, Eyebrow } from '../components/ui'
import PricingCards from '../components/PricingCards'
import CtaSection from '../components/CtaSection'

const FAQS = [
  {
    q: 'Do I need a subscription?',
    a: 'No. Daily Boost is pay-as-you-go. Top up your balance in Naira and spend it on any service at any time. There are no monthly fees or hidden charges.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept Paystack (cards, bank transfer, USSD), direct bank transfer, and cryptocurrency. All transactions are processed in Naira.',
  },
  {
    q: 'Is there a minimum order amount?',
    a: 'The minimum wallet top-up is ₦2,000. Individual service orders start from as low as ₦50 depending on the service.',
  },
  {
    q: 'Can I get a refund if an order fails?',
    a: 'Yes. If an order cannot be fulfilled, the amount is automatically refunded to your wallet balance within minutes.',
  },
  {
    q: 'How do I access the API for reselling?',
    a: 'After signing up, navigate to Settings → API in your dashboard. Generate your API key and integrate it with our documented endpoints. Visit the API page for full documentation.',
  },
  {
    q: 'Are the followers and likes real?',
    a: 'We offer both global and Nigerian-targeted services. Nigerian-targeted services use real Nigerian accounts. Global services use a mix of real and high-quality accounts depending on the service.',
  },
]

export default function Pricing({ dark }) {
  const faqCard = dark
    ? 'bg-white/[0.04] border-white/8 hover:border-amber-300/25'
    : 'bg-white border-zinc-200 hover:border-amber-300/40'

  return (
    <>
      {/* Header */}
      <section
        className="px-[5%] py-16 text-center"
        style={{ background: dark ? 'linear-gradient(150deg,#041f1d,#073936 60%,#0a4e49)' : 'linear-gradient(150deg,#073936,#0a4e49)' }}
      >
        <Eyebrow>Pricing</Eyebrow>
        <h1 className="text-[clamp(1.9rem,3vw,2.7rem)] font-extrabold text-white tracking-tight mb-4">
          Simple, Transparent Pricing in Naira
        </h1>
        <p className="text-white/65 text-[0.97rem] max-w-[480px] mx-auto leading-[1.8]">
          No subscriptions. No surprises. Top up your balance and only pay for what you use.
        </p>
      </section>

      {/* Pricing cards */}
      <section className={`px-[5%] py-20 transition-colors ${dark ? 'bg-[#0a4e49]' : 'bg-[#e8f4f2]'}`}>
        <PricingCards dark={dark} />
      </section>

      {/* What's included table */}
      <section className={`px-[5%] py-16 transition-colors ${dark ? 'bg-[#073936]' : 'bg-[#f5f9f8]'}`}>
        <SectionHeader
          center
          eyebrow="What's Included"
          title="All plans come with these features"
          sub="Every account — regardless of balance — gets access to the same powerful platform."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {INCLUDED_FEATURES.map((f) => (
            <div key={f} className={`flex items-center gap-3 p-4 rounded-xl border transition-colors ${faqCard}`}>
              <div className="w-7 h-7 rounded-full bg-amber-300/15 flex items-center justify-center flex-shrink-0">
                <Check size={13} className="text-amber-300" strokeWidth={3} />
              </div>
              <span className={`text-[0.85rem] font-medium ${dark ? 'text-white/75' : 'text-[#2e5550]'}`}>{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`px-[5%] py-16 transition-colors ${dark ? 'bg-[#0a4e49]' : 'bg-[#e8f4f2]'}`}>
        <SectionHeader
          center
          eyebrow="FAQ"
          title="Frequently asked questions"
          sub="Everything you need to know about pricing and payments."
        />
        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-4">
          {FAQS.map((faq) => (
            <div
              key={faq.q}
              className={`rounded-xl border p-5 transition-colors ${faqCard}`}
            >
              <div className="flex items-start gap-3">
                <HelpCircle size={16} className="text-amber-300 mt-0.5 flex-shrink-0" />
                <div>
                  <div className={`font-bold text-[0.9rem] mb-2 ${dark ? 'text-white' : 'text-[#0d2926]'}`}>
                    {faq.q}
                  </div>
                  <p className={`text-[0.84rem] leading-relaxed ${dark ? 'text-white/55' : 'text-zinc-600'}`}>
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
