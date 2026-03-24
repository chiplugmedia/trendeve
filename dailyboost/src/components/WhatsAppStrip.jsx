import { MessageCircle } from 'lucide-react'

export default function WhatsAppStrip() {
  return (
    <div className="bg-amber-300 px-[5%] py-4 flex items-center justify-center gap-4 flex-wrap">
      <p className="text-[#073936] font-semibold text-[0.88rem] text-center">
        <strong className="font-black">Don't miss this!</strong> We drop exclusive discounts and
        bonus offers on our WhatsApp channel — before anyone else sees them.
      </p>
      <a
        href="https://whatsapp.com/channel/0029Vb7aFwzJ3jv2YlvNhq20"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#073936] text-amber-300 px-5 py-2 rounded-xl font-bold text-[0.83rem] no-underline transition-all hover:-translate-y-px hover:shadow-lg flex-shrink-0"
      >
        <MessageCircle size={14} />
        Join WhatsApp Channel
      </a>
    </div>
  )
}
