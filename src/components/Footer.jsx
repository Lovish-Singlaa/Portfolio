import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Lovish-Singlaa',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/lovishsinglaa',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:singlalovish26@gmail.com',
      color: 'hover:text-red-400'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className='bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700/50'>
      <div className='max-w-6xl mx-auto px-4 py-12'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* About Section */}
          <div className='text-center md:text-left'>
            <h3 className='text-2xl font-bold text-white mb-4'>Lovish Singla</h3>
            <p className='text-gray-400 leading-relaxed'>
              Full-stack developer passionate about creating innovative web solutions and delivering exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className='text-center md:text-left'>
            <h3 className='text-xl font-bold text-white mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#about' className='text-gray-400 hover:text-purple-400 transition-colors duration-300'>
                  About
                </a>
              </li>
              <li>
                <a href='#projects' className='text-gray-400 hover:text-purple-400 transition-colors duration-300'>
                  Projects
                </a>
              </li>
              <li>
                <a href='#experience' className='text-gray-400 hover:text-purple-400 transition-colors duration-300'>
                  Experience
                </a>
              </li>
              <li>
                <a href='#contact' className='text-gray-400 hover:text-purple-400 transition-colors duration-300'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='text-center md:text-left'>
            <h3 className='text-xl font-bold text-white mb-4'>Get in Touch</h3>
            <div className='space-y-2 text-gray-400'>
              <p>singlalovish26@gmail.com</p>
              <p>Ludhiana, Punjab, India</p>
              <p>Available for new opportunities</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className='flex justify-center mb-8'>
          <div className='flex gap-4'>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className={`w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                aria-label={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-gray-700/50 mb-8'></div>

        {/* Bottom Section */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <div className='text-center md:text-left'>
            <p className='text-gray-400'>
              © {currentYear} Lovish Singla. All rights reserved.
            </p>
          </div>
          
          <div className='flex items-center gap-2 text-gray-400'>
            <span>Made with</span>
            <FaHeart className='text-red-500 animate-pulse' size={16} />
            <span>using React & Tailwind CSS</span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className='w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110'
            aria-label='Back to top'
          >
            <FaArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer 