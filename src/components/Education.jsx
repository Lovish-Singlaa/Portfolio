import React from 'react'
import { FaGraduationCap, FaCertificate, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      id: 1,
      type: "degree",
      title: "Bachelor of Technology in Computer Science",
      institution: "University of Technology",
      duration: "2018 - 2022",
      location: "New Delhi, India",
      gpa: "8.5/10",
      description: "Specialized in software engineering with focus on web technologies and database management. Completed capstone project on AI-powered recommendation system.",
      achievements: [
        "Dean's List for Academic Excellence (3 semesters)",
        "Best Final Year Project Award",
        "Member of Computer Science Club",
        "Completed 15+ technical courses"
      ],
      relevantCourses: ["Data Structures", "Algorithms", "Database Systems", "Web Development", "Machine Learning"],
      certificateUrl: "#"
    },
    {
      id: 2,
      type: "certification",
      title: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      duration: "2023",
      location: "Online",
      gpa: "Passed with Distinction",
      description: "Comprehensive certification covering AWS cloud architecture, security, and best practices for designing scalable applications.",
      achievements: [
        "Scored 950/1000 on certification exam",
        "Completed 40+ hours of hands-on labs",
        "Implemented multi-tier architecture projects",
        "Gained expertise in cloud security and compliance"
      ],
      relevantCourses: ["Cloud Architecture", "Security", "DevOps", "Serverless Computing"],
      certificateUrl: "#"
    },
    {
      id: 3,
      type: "certification",
      title: "React Developer Certification",
      institution: "Meta",
      duration: "2022",
      location: "Online",
      gpa: "Passed with Excellence",
      description: "Advanced React development certification covering modern React patterns, hooks, and best practices for building scalable applications.",
      achievements: [
        "Completed 8 comprehensive modules",
        "Built 5 real-world projects",
        "Mastered advanced React concepts",
        "Learned state management with Redux"
      ],
      relevantCourses: ["React Hooks", "Context API", "Redux", "Testing", "Performance Optimization"],
      certificateUrl: "#"
    }
  ];

  return (
    <div id='education' className='min-h-screen p-4 flex flex-col justify-center items-center text-white font-semibold max-w-6xl mx-auto'>
      {/* Header Section */}
      <div className='relative my-10 text-center'>
        <h1 className='text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>
          Education
        </h1>
        <p className='text-gray-400 mt-4 text-lg max-w-2xl mx-auto'>
          Academic background and professional certifications
        </p>
      </div>

      {/* Education Timeline */}
      <div className='w-full max-w-5xl'>
        <div className='grid gap-8'>
          {education.map((item, index) => (
            <div 
              key={item.id} 
              className='animate-fade-in-up'
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className='relative'>
                {/* Timeline Line */}
                <div className='absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500'></div>
                
                {/* Timeline Dot */}
                <div className='absolute left-4 top-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-900'></div>

                {/* Education Card */}
                <div className='ml-12 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20'>
                  {/* Header */}
                  <div className='flex flex-col md:flex-row md:items-start md:justify-between mb-4'>
                    <div className='flex-1'>
                      <div className='flex items-center gap-3 mb-2'>
                        {item.type === "degree" ? (
                          <FaGraduationCap className='text-purple-400' size={24} />
                        ) : (
                          <FaCertificate className='text-purple-400' size={24} />
                        )}
                        <h3 className='text-2xl font-bold text-white'>{item.title}</h3>
                      </div>
                      <div className='flex flex-wrap items-center gap-4 text-gray-300 text-sm mb-2'>
                        <div className='flex items-center gap-1'>
                          <FaMapMarkerAlt className='text-purple-400' size={14} />
                          <span>{item.institution}</span>
                        </div>
                        <div className='flex items-center gap-1'>
                          <FaCalendarAlt className='text-purple-400' size={14} />
                          <span>{item.duration}</span>
                        </div>
                        <div className='flex items-center gap-1'>
                          <FaMapMarkerAlt className='text-purple-400' size={14} />
                          <span>{item.location}</span>
                        </div>
                      </div>
                      <div className='text-purple-400 font-medium'>
                        {item.gpa}
                      </div>
                    </div>
                    
                    {/* Certificate Link */}
                    {item.certificateUrl && item.certificateUrl !== "#" && (
                      <a 
                        href={item.certificateUrl} 
                        target='_blank' 
                        rel='noopener noreferrer'
                        className='mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300'
                      >
                        <span>View Certificate</span>
                        <FaExternalLinkAlt size={14} />
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p className='text-gray-300 mb-6 leading-relaxed'>
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div className='mb-6'>
                    <h4 className='text-lg font-semibold text-white mb-3 flex items-center gap-2'>
                      <span className='w-2 h-2 bg-purple-500 rounded-full'></span>
                      Key Achievements
                    </h4>
                    <ul className='space-y-2'>
                      {item.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className='flex items-start gap-3 text-gray-300'>
                          <span className='text-purple-400 mt-1'>•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Relevant Courses */}
                  <div>
                    <h4 className='text-lg font-semibold text-white mb-3 flex items-center gap-2'>
                      <span className='w-2 h-2 bg-purple-500 rounded-full'></span>
                      Relevant Courses & Skills
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {item.relevantCourses.map((course, courseIndex) => (
                        <span 
                          key={courseIndex}
                          className='px-3 py-1 text-sm bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30'
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Education 