import { MessageCircle } from 'lucide-react'

export default function WhatsAppStrip() {
  return (
    <div className="bg-amber-300">
      <div className="max-w-[1200px] mx-auto px-5 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Text */}
        <p className="text-[#073936] text-sm font-medium text-center md:text-left max-w-[600px] leading-relaxed">
          <span className="font-bold">
            Don’t miss out!
          </span>{' '}
          We drop exclusive discounts and bonus offers on our WhatsApp channel —
          before anyone else sees them.
        </p>

        {/* Button */}
        <a
          href="https://whatsapp.com/channel/0029Vb7aFwzJ3jv2YlvNhq20"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 bg-[#073936] text-amber-300 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-[#0a4e49] hover:shadow-md"
        >
          {/* Icon with subtle style */}
          <div className="relative flex items-center justify-center">
            <MessageCircle size={16} className="relative z-10" />
            <div className="absolute inset-0 blur-sm opacity-30 bg-amber-300 rounded-full" />
          </div>

          Join WhatsApp Channel
        </a>

      </div>
    </div>
  )
}