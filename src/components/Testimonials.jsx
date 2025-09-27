import React from 'react'

const reviews = [
  { name: 'Priya S.', text: 'I improved from 6.0 to 7.5 in 3 months. The mock tests were very realistic.' },
  { name: 'Rahul K.', text: 'Fantastic speaking practice and clear, actionable feedback.' },
  { name: 'Aisha R.', text: 'Loved the tutors — they focus on what actually matters in the exam.' },
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold">What our students say</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <figure key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <blockquote className="text-sm">“{r.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}