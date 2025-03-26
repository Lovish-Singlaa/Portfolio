import React from 'react'
import theme_pattern from '../assets/theme_pattern.svg'

const skillsArray = ['C++', 'JAVA', 'DSA', 'JAVASCRIPT', 'HTML', 'REACT JS', 'MONGO DB', 'Shadcn UI', 'EXPRESS', 'GIT', 'NODE JS', 'MY SQL', 'NEXT JS']

const Skills = () => {
  return (
    <div id='skills' className='p-4 flex flex-col flex- justify-center items-center text-white font-semibold md:max-w-6xl max-w-xl mx-auto my-10 mb-12'>
      <div className='relative my-10'>
        <h1 className='text-6xl'>Skills</h1>
        <img className='absolute bottom-0 w-28 -right-6 -z-10' src={theme_pattern} alt="" />
      </div>
      <div className='w-full flex flex-wrap gap-4'>
      {
        skillsArray.map((skill,index)=>(
          <div key={index} className='border rounded-md p-2 hover:border-purple-600'>
            {skill}
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Skills
