import React from 'react'

const features = [
  { title: 'Speaking Practice', desc: '1-on-1 speaking sessions focused on fluency and pronunciation.', icon: '🗣️' },
  { title: 'Mock Tests', desc: 'Full-length mock tests with detailed performance reports.', icon: '📝' },
  { title: 'AI Band Score', desc: 'Get instant AI-based band predictions and gap analysis.', icon: '🤖' },
  { title: 'Live Classes', desc: 'Small group live classes with experienced tutors.', icon: '👩‍🏫' },
]

export default function Features(){
  return (
    <section id="features" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">What we offer</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Everything you need to reach your target band — practice, feedback, and monitoring.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <article key={f.title} className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-lg transition-all focus-within:ring-2">
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">{f.desc}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-brand-500 hover:underline">Book a slot →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}