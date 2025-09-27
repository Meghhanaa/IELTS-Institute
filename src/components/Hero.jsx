import React from 'react'

export default function Hero(){
  return (
    <section className="pt-12 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm font-semibold text-brand-500 mb-4">Unlock your best band score</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">IELTS coaching designed for results — practical, personalised and modern</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Targeted speaking practice, full mock tests, live tutor feedback, and AI-based band predictions to keep you on track.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center px-6 py-3 bg-brand-500 text-white rounded-lg shadow hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2">Get Started</a>
            <a href="#features" className="inline-flex items-center px-4 py-3 border rounded-lg text-gray-700 dark:text-gray-200">Explore Services</a>
          </div>

          <div className="mt-6 text-sm text-gray-500">Free 30-min trial class for new students.</div>
        </div>

        <div className="order-first md:order-last">
          <div className="banner-gradient rounded-xl p-4">
            <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=123" alt="students studying" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  )
}