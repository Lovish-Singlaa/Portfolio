import React, { useState, useEffect } from 'react'
import theme_pattern from '../assets/theme_pattern.svg'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#stats', label: 'Stats' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className='flex justify-between items-center text-white font-semibold md:max-w-5xl max-w-xl mx-auto p-4'>
        <div className='text-2xl relative hover:scale-105 transition-all duration-300'>
          <p className='z-10 text-white text-3xl hover:text-gradient-animate transition-all duration-300'>Lovish</p>
          <img className='absolute bottom-2 -right-2 w-8 -z-10 animate-float' src={theme_pattern} alt="" />
        </div>
        
        <div className='list-none hidden md:flex gap-6 font-normal'>
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href}
              className='relative group hover:text-purple-400 transition-all duration-300 hover:scale-105'
            >
              <li className='cursor-pointer'>{item.label}</li>
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full'></span>
            </a>
          ))}
        </div>
        
        <a href='#contact'>
          <button className='hidden md:flex border border-none bg-custom-gradient p-3 rounded-full transition-all duration-300 hover:scale-110 font-semibold btn-animate hover-lift'>
            Connect With Me
          </button>
        </a>
        
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none hover:scale-110 transition-all duration-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-6 w-6 transition-all duration-300 ${isOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16m-7 6h7" 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-[70%] bg-black/95 backdrop-blur-md z-50 transition-all duration-500 ease-in-out transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className='flex flex-col h-full'>
          <div className='flex justify-end p-4'>
            <button 
              onClick={toggleMenu} 
              className="text-white hover:text-purple-400 hover:scale-110 transition-all duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>
          
          <div className='flex flex-col gap-6 items-center justify-center flex-1'>
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                onClick={toggleMenu} 
                className="block text-white hover:text-purple-400 transition-all duration-300 hover:scale-110 text-lg font-medium"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </a>
            ))}
            
            <a href='#contact' onClick={toggleMenu}>
              <button className='mt-6 border border-none bg-custom-gradient p-3 rounded-full transition-all duration-300 hover:scale-110 font-semibold btn-animate'>
                Connect With Me
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleMenu}
        />
      )}
    </div>
  )
}

export default Navbar
