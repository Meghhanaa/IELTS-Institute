import React from 'react'

export default function Footer(){
  return (
    <footer id="contact" className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="text-2xl font-bold text-brand-500">IELTS+</div>
          <p className="mt-2 text-sm">Modern coaching, measurable results.</p>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-2 text-sm">Email: hello@ieltsplus.example</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
        </div>

        <div>
          <h4 className="font-semibold">Links</h4>
          <ul className="mt-2 text-sm space-y-1">
            <li><a href="#features" className="hover:underline">Services</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 text-center py-4 text-sm">© {new Date().getFullYear()} IELTS Institute — All rights reserved</div>
    </footer>
  )
}