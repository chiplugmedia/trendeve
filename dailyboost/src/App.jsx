import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TopBar from './components/TopBar'
import Home from './pages/Home'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import API from './pages/API'

export default function App() {
  const [dark, setDark] = useState(true)

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
