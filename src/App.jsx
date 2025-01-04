import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import './index.css'

function App() {
  const [isShrunk, setIsShrunk] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true)
      } else {
        setIsShrunk(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ background: '#DBE6DE' }}>
      <motion.div
        className='header'
        initial={{
          height: '60px',
          width: '100%',
          borderRadius: 30,
        }}
        animate={{
          height: '60px',
          width: isShrunk ? '70%' : '95%',
          margin: '0px auto',
        }}
        transition={{ type: 'just', siffness: 300, damping: 20 }}>
        <div className='header-content'>
          <div className='logo' onClick={scrollToTop}>
            Logo
          </div>
          <nav className='nav-links'>
            <Link to='about' smooth={true} duration={400}>
              About
            </Link>
            <Link to='projects' smooth={true} duration={400}>
              Projects
            </Link>
            <Link to='process' smooth={true} duration={400}>
              Process
            </Link>
          </nav>

          <Link to='contact' smooth={true} duration={400}>
            <button to='contact' smooth={true} duration={400} className='contact-btn'>
              Contact
            </button>
          </Link>
        </div>
      </motion.div>

      <section id='about' style={{ padding: '100px 20px', height: '100vh' }}>
        <h1>About Section</h1>
        <p>Lorem ipsum dolor sit amet...</p>
      </section>

      <section id='projects' style={{ padding: '100px 20px', height: '100vh' }}>
        <h1>Projects Section</h1>
        <p>Lorem ipsum dolor sit amet...</p>
      </section>

      <section id='process' style={{ padding: '100px 20px', height: '100vh' }}>
        <h1>Process Section</h1>
        <p>Lorem ipsum dolor sit amet...</p>
      </section>

      <section id='contact' style={{ padding: '100px 20px', height: '100vh', backgroundColor: '#f0f0f0' }}>
        <h1>Contact us Section</h1>
        <p>Lorem ipsum dolor sit amet...</p>
      </section>
    </div>
  )
}

export default App
