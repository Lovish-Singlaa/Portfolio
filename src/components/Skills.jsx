import React from 'react'
import theme_pattern from '../assets/theme_pattern.svg'
import { ScrollAnimation } from '../hooks/useScrollAnimation.jsx'

const skillsArray = ['C++', 'JAVA', 'DSA', 'JAVASCRIPT', 'HTML', 'REACT JS', 'MONGO DB', 'Shadcn UI', 'EXPRESS JS', 'GIT', 'NODE JS', 'MYSQL', 'NEXT JS']

const Skills = () => {
  return (
    <div id='skills' className='p-4 flex flex-col flex- justify-center items-center text-white font-semibold md:max-w-6xl max-w-xl mx-auto my-10 mb-12'>
      <ScrollAnimation className="scroll-fade-in">
        <div className='relative my-10'>
          <h1 className='text-6xl hover:text-gradient-animate transition-all duration-300'>Skills</h1>
          <img className='absolute bottom-0 w-28 -right-6 -z-10 animate-float' src={theme_pattern} alt="" />
        </div>
      </ScrollAnimation>
      
      <div className='w-full flex flex-wrap gap-4'>
        {skillsArray.map((skill, index) => (
          <ScrollAnimation 
            key={index} 
            className="scroll-scale-in" 
            delay={index * 50}
          >
            <div className='border rounded-md p-2 hover:border-purple-600 hover-lift hover-glow hover-shine bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:bg-purple-600/10 hover:scale-105 hover:rotate-1 cursor-pointer'>
              {skill}
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  )
}

export default Skills
