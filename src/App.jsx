import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light'
    } catch (e) {
      return 'light'
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try { localStorage.setItem('theme', theme) } catch(e){}
  }, [theme])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}