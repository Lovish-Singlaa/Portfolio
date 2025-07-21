import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WorkExperience from './components/WorkExperience'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [active, setActive] = useState();
  return (
    <div className='p-5 text-white md:max-w-6xl max-w-xl mx-auto'>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Skills/>
      <Projects/>
      <WorkExperience/>
      <Stats/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
