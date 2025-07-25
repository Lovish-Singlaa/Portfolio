import React, { useState } from 'react'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { workExperience } from '../assets/work_experience';
import { ScrollAnimation } from '../hooks/useScrollAnimation.jsx'

const WorkExperience = () => {
  const [expandedJob, setExpandedJob] = useState(null);  

  const toggleJobExpansion = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div id='experience' className='min-h-screen p-4 flex flex-col justify-center items-center text-white font-semibold max-w-6xl mx-auto'>
      {/* Header Section */}
      <ScrollAnimation className="scroll-fade-in">
        <div className='relative my-10 text-center'>
          <h1 className='text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent hover:text-gradient-animate transition-all duration-300'>
            Work Experience
          </h1>
          <p className='text-gray-400 mt-4 text-lg max-w-2xl mx-auto hover:text-white transition-colors duration-300'>
            My professional journey in software development, showcasing growth and achievements
          </p>
        </div>
      </ScrollAnimation>

      {/* Experience Timeline */}
      <div className='w-full max-w-4xl'>
        {workExperience.map((job, index) => (
          <ScrollAnimation 
            key={job.id} 
            className="scroll-slide-left" 
            delay={index * 200}
          >
            <div className='mb-8'>
              <div className='relative'>
                {/* Timeline Line */}
                <div className='absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 animate-pulse-glow'></div>
                
                {/* Timeline Dot */}
                <div className='absolute left-4 top-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 hover:scale-125 transition-all duration-300'></div>

                {/* Job Card */}
                <div className='ml-12 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 card-hover'>
                  {/* Job Header */}
                  <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                    <div className='flex-1'>
                      <div className='flex items-center gap-3 mb-2'>
                        <FaBriefcase className='text-purple-400 hover:scale-110 transition-all duration-300' size={20} />
                        <h3 className='text-2xl font-bold text-white hover:text-purple-400 transition-colors duration-300'>{job.position}</h3>
                      </div>
                      <div className='flex items-center gap-4 text-gray-300 text-sm'>
                        <div className='flex items-center gap-1 hover:text-white transition-colors duration-300'>
                          <FaMapMarkerAlt className='text-purple-400' size={14} />
                          <span>{job.company}</span>
                        </div>
                        <div className='flex items-center gap-1 hover:text-white transition-colors duration-300'>
                          <FaCalendarAlt className='text-purple-400' size={14} />
                          <span>{job.duration}</span>
                        </div>
                        <div className='flex items-center gap-1 hover:text-white transition-colors duration-300'>
                          <FaMapMarkerAlt className='text-purple-400' size={14} />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => toggleJobExpansion(job.id)}
                      className='mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 btn-animate hover-lift'
                    >
                      {expandedJob === job.id ? (
                        <>
                          <span>Show Less</span>
                          <FaChevronUp size={16} className='transition-transform duration-300' />
                        </>
                      ) : (
                        <>
                          <span>Show More</span>
                          <FaChevronDown size={16} className='transition-transform duration-300' />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Job Description */}
                  <p className='text-gray-300 mb-4 leading-relaxed hover:text-white transition-colors duration-300'>
                    {job.description}
                  </p>

                  {/* Expanded Content */}
                  {expandedJob === job.id && (
                    <div className='animate-scale-in'>
                      {/* Key Achievements */}
                      <div className='mb-6'>
                        <h4 className='text-lg font-semibold text-white mb-3 flex items-center gap-2'>
                          <span className='w-2 h-2 bg-purple-500 rounded-full animate-pulse'></span>
                          Key Achievements
                        </h4>
                        <ul className='space-y-2'>
                          {job.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className='flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105'>
                              <span className='text-purple-400 mt-1'>•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Used */}
                      <div className='mb-6'>
                        <h4 className='text-lg font-semibold text-white mb-3 flex items-center gap-2'>
                          <span className='w-2 h-2 bg-purple-500 rounded-full animate-pulse'></span>
                          Technologies Used
                        </h4>
                        <div className='flex flex-wrap gap-2'>
                          {job.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className='px-3 py-1 text-sm bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30 hover:bg-purple-600/40 hover:scale-105 transition-all duration-300'
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Company Link */}
                      {job.companyUrl && job.companyUrl !== "#" && (
                        <div className='flex justify-end'>
                          <a 
                            href={job.companyUrl} 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 btn-animate hover-lift'
                          >
                            <span>Visit Company</span>
                            <FaExternalLinkAlt size={14} />
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
      
    </div>
  )
}

export default WorkExperience 