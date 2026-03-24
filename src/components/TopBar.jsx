import { Link } from 'react-router-dom'

export default function TopBar({ dark }) {
  return (
    <div className="bg-amber-300 text-[#0d2926] text-center py-2 px-4 text-xs font-semibold">
      🔥 Nigerian Music Promotion is now live!&nbsp;&nbsp;
      <Link to="/services" className="font-black underline text-[#073936]">
        Explore Services →
      </Link>
    </div>
  )
}
