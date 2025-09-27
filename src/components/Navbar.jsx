import React, { useState } from 'react'

export default function Navbar({ theme, setTheme }){
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold text-brand-500">IELTS+</div>
            <p className="text-sm text-gray-500 dark:text-gray-300">English mastery</p>
          </div>

          <nav className="hidden md:flex items-center gap-6" aria-label="Main">
            <a href="#features" className="hover:text-brand-500 focus:outline-none focus:ring-2 rounded">Services</a>
            <a href="#testimonials" className="hover:text-brand-500 focus:outline-none focus:ring-2 rounded">Students</a>
            <a href="#contact" className="hover:text-brand-500 focus:outline-none focus:ring-2 rounded">Contact</a>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="ml-4 p-2 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              {theme === 'dark' ? '🌙' : '🌞'}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme" className="p-2 rounded border border-gray-200 dark:border-gray-700">
              {theme === 'dark' ? '🌙' : '🌞'}
            </button>
            <button onClick={() => setOpen(!open)} aria-label="Open menu" className="p-2 rounded-md focus:outline-none focus:ring-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path></svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <a href="#features" className="block">Services</a>
            <a href="#testimonials" className="block">Students</a>
            <a href="#contact" className="block">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}