IELTS Institute — Home Page (React + Vite + Tailwind)
Overview

Hi! I’m Meghana Tamrakar, and this is a single-page, responsive home page for a fictional IELTS Institute. I built this project to practice modern frontend development, improve React skills, and create a professional portfolio project.

The project demonstrates modern UI/UX design, accessibility, and responsiveness for both desktop and mobile devices.

Features

Navbar: Logo, menu links, mobile hamburger menu, and light/dark theme switch.

Hero Section: Headline, supporting text, CTA button, and banner image.

Feature Cards: 4 cards showcasing services like Speaking Practice, Mock Tests, AI Band Score, and Live Classes.

Student Testimonials: 3 short reviews in a responsive grid.

Footer: Contact info, useful links, and copyright.

Theme Switch: Light/dark mode persisted in localStorage.

Accessibility: ARIA labels, focus-visible rings, and alt text for images.

Micro-interactions: Hover effects, subtle transforms, smooth transitions.

Motivation

I created this project because I wanted to:

Build a modern, responsive UI from scratch using React + Tailwind CSS.

Apply component-based architecture in React.

Improve accessibility and UX skills (focus rings, alt text, ARIA labels).

Create a portfolio-ready project showcasing my frontend abilities.

Tech Stack

Frontend: React JS (with Vite)

Styling: Tailwind CSS

Build Tool: Vite

Data: Static/mock (no backend)

Folder Structure
/ielts-institute
├─ index.html
├─ package.json
├─ postcss.config.cjs
├─ tailwind.config.cjs
├─ vite.config.js
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ index.css
│  └─ components/
│     ├─ Navbar.jsx
│     ├─ Hero.jsx
│     ├─ Features.jsx
│     ├─ Testimonials.jsx
│     └─ Footer.jsx
└─ README.md

Getting Started
Prerequisites

Node.js v16+ (Node 18+ recommended)

npm (comes with Node)

Installation

Clone the repository (or unzip project folder):

git clone <repository-url>
cd ielts-institute


Install dependencies:

npm install


Start development server:

npm run dev


Open your browser at http://localhost:5173

Build for Production
npm run build
npm run preview

Design Choices

Tailwind CSS: Utility-first styling for rapid and responsive design.

Responsive layout: Mobile-first approach with grid and flex layouts.

Accessibility:

aria-label for navigation and buttons

Focus-visible outline rings for keyboard navigation

Alt text for all images

Theme switch: Light/dark mode with localStorage persistence.

Micro-interactions:

Hover shadows on cards and buttons

Subtle translate effects for interactive elements

Smooth transition effects for better UX

Personal Notes

I built this to practice real-world UI challenges like hero sections, feature cards, and responsive grids.

This project helped me understand React component structure, state management (theme toggle), and Tailwind responsive utilities.

I plan to add animations, more interactive features, and a backend in future versions.

Deployment (Optional)

You can deploy this project using Vercel, Netlify, or GitHub Pages:

Vercel: Connect GitHub repo → Build: npm run build → Output dir: dist

Netlify: Connect GitHub repo → Build: npm run build → Publish dir: dist