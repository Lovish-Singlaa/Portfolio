import React from 'react'
import mywork_data from '../assets/mywork_data'
import theme_pattern from '../assets/theme_pattern.svg'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div id='projects' className='p-4 flex flex-col justify-center items-center text-white font-semibold max-w-6xl mx-auto my-10 mb-12'>
      <div className='relative my-10'>
        <h1 className='text-6xl'>Projects</h1>
        <img className='absolute bottom-0 w-28 -right-6 -z-10' src={theme_pattern} alt="" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {
          mywork_data.map((work, index) => (
            <div key={index} className='relative group'>
              <img className={`rounded-lg w-[400px] h-[180px] object-cover transition duration-300 opacity-100 group-hover:opacity-30 hover:border-purple-600`} src={work.w_img} alt={work.w_name} width="400" height="170" />
              <div className='absolute inset-0 flex flex-col p-3 text-white opacity-0 transition duration-500 group-hover:opacity-100'>
                <div className='mb-1'>{work.w_name}</div>
                <div className='text-sm h-28 overflow-clip font-thin font-serif'>{work.w_desc}</div>
                <div className='flex gap-4 justify-center items-center mt-1'>
                  <a href={work.url} target='_blank' className='hover:bg-gray-50 hover:text-black text-sm p-2 rounded-lg'><FaExternalLinkAlt /></a>
                  <a href={work.github} target='_blank'><FaGithub size={30}/></a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects
