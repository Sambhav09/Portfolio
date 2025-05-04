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
      <div className='container bg-black'>

        <section id='home' className='min-h-[calc(100vh-4rem)]'>
          <LazyMount id='home'>
            <Home />
          </LazyMount>
        </section>
        <section id='about' >
          <LazyMount id='about'>
            <About />
          </LazyMount>
        </section>
        <section id='skills' >
          <LazyMount id='skills'>
            <Skills />
          </LazyMount>
        </section>
        <section id='projects' >
          <LazyMount id='projects'>
            <Projects />
          </LazyMount>
        </section>
        <section id='contact' >
          <LazyMount id='contact'>
            <Information />
          </LazyMount>
        </section>
      </div>
    </>
  )
}

export default page
