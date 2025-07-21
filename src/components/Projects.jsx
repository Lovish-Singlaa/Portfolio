import React, { useState } from 'react'
import mywork_data from '../assets/mywork_data'
import theme_pattern from '../assets/theme_pattern.svg'
import { FaExternalLinkAlt, FaGithub, FaCode, FaEye, FaTimes } from "react-icons/fa";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? mywork_data 
    : mywork_data.filter(project => project.w_no <= 4);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id='projects' className='min-h-screen p-4 flex flex-col justify-center items-center text-white font-semibold max-w-7xl mx-auto'>
      {/* Header Section */}
      <div className='relative my-10 text-center'>
      <h1 className='text-6xl'>Projects</h1>
      <img className='absolute bottom-0 w-28 -right-6 -z-10' src={theme_pattern} alt="" />
        <img className='absolute bottom-0 w-28 -right-6 -z-10 opacity-50' src={theme_pattern} alt="" />
        <p className='text-gray-400 mt-4 text-lg max-w-2xl mx-auto'>
          Explore my latest work showcasing full-stack development, modern technologies, and innovative solutions
        </p>
      </div>

      {/* Filter Buttons */}
      {/* <div className='flex flex-wrap gap-3 mb-8 justify-center'>
        <button
          onClick={() => setFilter('all')}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            filter === 'all'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => setFilter('web')}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            filter === 'web'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Web Apps
        </button>
        <button
          onClick={() => setFilter('mobile')}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            filter === 'mobile'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Mobile Apps
        </button>
      </div> */}

      {/* Projects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
        {filteredProjects.map((work, index) => (
          <div 
            key={index} 
            className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in-up'
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Project Image */}
            <div className='relative overflow-hidden h-48'>
              <img 
                className='w-full h-full object-cover' 
                src={work.w_img} 
                alt={work.w_name} 
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </div>

            {/* Project Content */}
            <div className='p-6'>
              <h3 className='text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300'>
                {work.w_name}
              </h3>
              
              <p className='text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed'>
                {work.w_desc}
              </p>

              {/* Technology Tags */}
              <div className='flex flex-wrap gap-2 mb-4'>
                {work.tech_stack?.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className='px-3 py-1 text-xs bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className='flex gap-3'>
                <button
                  onClick={() => openProjectModal(work)}
                  className='flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105'
                >
                  <FaEye size={16} />
                  View Details
                </button>
                <a 
                  href={work.github} 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='flex items-center justify-center w-12 h-10 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300'
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href={work.url} 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='flex items-center justify-center w-12 h-10 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300'
                >
                  <FaExternalLinkAlt size={16} />
                </a>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className='absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-scale-in'>
          <div className='bg-gray-900/95 backdrop-blur-md rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700/50 animate-scale-in'>
            <div className='relative'>
              {/* Close Button */}
              <button
                onClick={closeProjectModal}
                className='absolute top-4 right-4 z-10 p-2 bg-gray-800/80 text-gray-300 rounded-full hover:bg-gray-700 hover:text-white transition-all duration-300'
              >
                <FaTimes size={20} />
              </button>

              {/* Modal Content */}
              <div className='p-8'>
                <div className='grid md:grid-cols-2 gap-8'>
                  {/* Project Image */}
                  <div className='relative overflow-hidden rounded-xl'>
                    <img 
                      className='w-full h-64 object-cover' 
                      src={selectedProject.w_img} 
                      alt={selectedProject.w_name} 
                    />
                  </div>

                  {/* Project Details */}
                  <div>
                    <h2 className='text-3xl font-bold mb-4 text-white'>
                      {selectedProject.w_name}
                    </h2>
                    
                    <p className='text-gray-300 mb-6 leading-relaxed'>
                      {selectedProject.w_desc}
                    </p>

                    {/* Technology Stack */}
                    <div className='mb-6'>
                      <h3 className='text-lg font-semibold mb-3 text-white'>Technology Stack</h3>
                      <div className='flex flex-wrap gap-2'>
                        {selectedProject.tech_stack?.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className='px-4 py-2 bg-purple-600/20 text-purple-300 rounded-lg border border-purple-500/30'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className='flex gap-4'>
                      <a 
                        href={selectedProject.url} 
                        target='_blank' 
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105'
                      >
                        <FaExternalLinkAlt size={16} />
                        Live Demo
                      </a>
                      <a 
                        href={selectedProject.github} 
                        target='_blank' 
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300'
                      >
                        <FaGithub size={20} />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
