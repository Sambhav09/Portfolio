import About from '@/component/About'
import Cursor from '@/component/Cursor'
import Home from '@/component/Home'
import Information from '@/component/Information'
import LazyMount from '@/component/LazyMount'
import Navbar from '@/component/Navbar'
import Projects from '@/component/Projects'
import Skills from '@/component/Skills'
import React from 'react'

const page = () => {
  return (
    <main className='relative'>
      <Cursor />
      <Navbar />

      {/* Background Mesh */}
      <div className="bg-mesh pointer-events-none"></div>

      <div className='relative z-10 flex flex-col'>
        <section id='home' className='min-h-screen'>
          <LazyMount id='home'>
            <Home />
          </LazyMount>
        </section>

        <section id='about'>
          <LazyMount id='about'>
            <About />
          </LazyMount>
        </section>

        <section id='skills'>
          <LazyMount id='skills'>
            <Skills />
          </LazyMount>
        </section>

        <section id='projects'>
          <LazyMount id='projects'>
            <Projects />
          </LazyMount>
        </section>

        <section id='contact'>
          <LazyMount id='contact'>
            <Information />
          </LazyMount>
        </section>
      </div>

      {/* Footer / Copyright */}
      <footer className="relative z-10 py-12 border-t border-white/5 bg-black/50 backdrop-blur-sm text-center">
        <p className="text-gray-500 text-sm font-medium">
          © {new Date().getFullYear()} Sambhav Jain. Built with Next.js & Framer Motion.
        </p>
      </footer>
    </main>
  )
}

export default page
