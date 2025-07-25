import React, { useState } from 'react'
import mywork_data from '../assets/mywork_data'
import theme_pattern from '../assets/theme_pattern.svg'
import { FaExternalLinkAlt, FaGithub, FaCode, FaEye, FaTimes } from "react-icons/fa";
import { ScrollAnimation } from '../hooks/useScrollAnimation.jsx'

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
      <ScrollAnimation className="scroll-fade-in">
                <div className='relative my-10'>
                    <h1 className='text-5xl md:text-6xl hover:text-gradient-animate transition-all duration-300'>Projects</h1>
                    <img className='absolute bottom-0 w-28 -right-6 -z-10 animate-float' src={theme_pattern} alt="" />
                </div>
            </ScrollAnimation>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
        {filteredProjects.map((work, index) => (
          <ScrollAnimation 
            key={index} 
            className="scroll-scale-in" 
            delay={index * 100}
          >
            <div 
              className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 card-hover'
            >
              {/* Project Image */}
              <div className='relative overflow-hidden h-48'>
                <img 
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' 
                  src={work.w_img} 
                  alt={work.w_name} 
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <div className='absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>

              {/* Project Content */}
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300 hover:animate-glitch-text'>
                  {work.w_name}
                </h3>
                
                <p className='text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed group-hover:text-gray-300 transition-colors duration-300'>
                  {work.w_desc}
                </p>

                {/* Technology Tags */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {work.tech_stack?.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className='px-3 py-1 text-xs bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30 hover:bg-purple-600/40 hover:scale-105 transition-all duration-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className='flex gap-3'>
                  <button
                    onClick={() => openProjectModal(work)}
                    className='flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 btn-animate'
                  >
                    <FaEye size={16} />
                    View Details
                  </button>
                  <a 
                    href={work.github} 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='flex items-center justify-center w-12 h-10 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12'
                  >
                    <FaGithub size={20} />
                  </a>
                  <a 
                    href={work.url} 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='flex items-center justify-center w-12 h-10 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110 hover:-rotate-12'
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className='absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
              
              {/* Shine Effect */}
              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'>
                <div className='absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer'></div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-scale-in'>
          <div className='bg-gray-900/95 backdrop-blur-md rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700/50 animate-scale-in card-hover'>
            <div className='relative'>
              {/* Close Button */}
              <button
                onClick={closeProjectModal}
                className='absolute top-4 right-4 z-10 p-2 bg-gray-800/80 text-gray-300 rounded-full hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-90'
              >
                <FaTimes size={20} />
              </button>

              {/* Modal Content */}
              <div className='p-8'>
                <div className='grid md:grid-cols-2 gap-8'>
                  {/* Project Image */}
                  <div className='relative overflow-hidden rounded-xl hover-tilt'>
                    <img 
                      className='w-full h-64 object-cover transition-transform duration-500 hover:scale-110' 
                      src={selectedProject.w_img} 
                      alt={selectedProject.w_name} 
                    />
                  </div>

                  {/* Project Details */}
                  <div>
                    <h2 className='text-3xl font-bold mb-4 text-white hover:text-gradient-animate transition-all duration-300'>
                      {selectedProject.w_name}
                    </h2>
                    
                    <p className='text-gray-300 mb-6 leading-relaxed hover:text-white transition-colors duration-300'>
                      {selectedProject.w_desc}
                    </p>

                    {/* Technology Stack */}
                    <div className='mb-6'>
                      <h3 className='text-lg font-semibold mb-3 text-white'>Technology Stack</h3>
                      <div className='flex flex-wrap gap-2'>
                        {selectedProject.tech_stack?.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className='px-4 py-2 bg-purple-600/20 text-purple-300 rounded-lg border border-purple-500/30 hover:bg-purple-600/40 hover:scale-105 transition-all duration-300'
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
                        className='flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 btn-animate'
                      >
                        <FaExternalLinkAlt size={16} />
                        Live Demo
                      </a>
                      <a 
                        href={selectedProject.github} 
                        target='_blank' 
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 btn-animate'
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
