import React, { useState } from 'react'
import theme_pattern from '../assets/theme_pattern.svg'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false); // State to control the menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className='flex justify-between items-center text-white font-semibold md:max-w-5xl max-w-xl mx-auto'>
      <div className='text-2xl relative'>
        <p className='z-10 text-white text-3xl'>Lovish</p>
        <img className='absolute bottom-2 -right-2 w-8 -z-10' src={theme_pattern} alt="" />
      </div>
      <div className='list-none hidden md:flex gap-4 font-normal '>
        <a href='#home'><li>Home</li></a>
        <a href='#about'><li>About Me</li></a>
        <a href='#skills'><li>Skills</li></a>
        <a href='#projects'><li>Projects</li></a>
        <a href='#contact'><li>Contact</li></a>
      </div>
      <a href='#contact'><button className='hidden md:flex border border-none bg-custom-gradient p-3 rounded-full tansition duration-300 hover:scale-110 font-semibold'>Connect With Me</button></a>
      <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
          </button>
        </div>
        {
          isOpen && (
            <div className="md:hidden bg-[#1F0016] p-4 fixed z-50 h-full top-0 right-0 w-[50%] flex transition duration-1000">
              <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
          <div className='flex flex-col gap-8 items-center'>
            <br/>
          <a href="#home" onClick={toggleMenu} className="block text-white hover:text-purple-400">Home</a>
          <a href="#about" onClick={toggleMenu} className="block text-white hover:text-purple-400">About</a>
          <a href="#skills" onClick={toggleMenu} className="block text-white hover:text-purple-400">Skills</a>
          <a href="#contact" onClick={toggleMenu} className="block text-white hover:text-purple-400">Contact</a>
          </div>
        </div>
          )
        }
    </div>
  )
}

export default Navbar
