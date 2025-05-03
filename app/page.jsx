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
    <>
      <Cursor />
      <Navbar />
      <div className='container'>
        <section id='home' className='min-h-[calc(100vh-4rem)]'>
          <Home />
        </section>
        <section id='about'>
          <LazyMount>
            <About />
          </LazyMount>
        </section>
        <section id='skills'>
          <LazyMount>
            <Skills />
          </LazyMount>
        </section>
        <section id='contact'>
          <LazyMount>
            <Information />
          </LazyMount>
        </section>
        <section id='projects'>
          <LazyMount>
            <Projects />
          </LazyMount>
        </section>
      </div>
    </>
  )
}

export default page
