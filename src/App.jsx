import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TopBar from './components/TopBar'
import Home     from './pages/Home'
import Services from './pages/Services'
import Pricing  from './pages/Pricing'
import API      from './pages/API'
import SignUp   from './pages/SignUp'
import SignIn   from './pages/SignIn'

// Pages that render their own full-screen layout (no shared chrome)
const AUTH_ROUTES = ['/signup', '/signin']

export default function App() {
  const [dark, setDark] = useState(true)
  const { pathname } = useLocation()
  const isAuth = AUTH_ROUTES.includes(pathname)

  // Auth pages: render standalone (own background, no nav/footer)
  if (isAuth) {
    return (
      <Routes>
        <Route path="/signup" element={<SignUp dark={dark} />} />
        <Route path="/signin" element={<SignIn dark={dark} />} />
      </Routes>
    )
  }

  // Main site layout
  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        dark ? 'bg-[#073936] text-[#f0f4f3]' : 'bg-[#f5f9f8] text-[#0d2926]'
      }`}
    >
      <TopBar dark={dark} />
      <Navbar dark={dark} setDark={setDark} />

      <main className="flex-1">
        <Routes>
          <Route path="/"         element={<Home     dark={dark} />} />
          <Route path="/services" element={<Services dark={dark} />} />
          <Route path="/pricing"  element={<Pricing  dark={dark} />} />
          <Route path="/api"      element={<API      dark={dark} />} />
        </Routes>
      </main>

      <Footer dark={dark} />
    </div>
  )
}
