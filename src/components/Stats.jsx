import React, { useState, useEffect } from 'react'
import { FaCode, FaUsers, FaProjectDiagram, FaAward, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { ScrollAnimation } from '../hooks/useScrollAnimation.jsx'

const Stats = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    experience: 0,
    clients: 0,
    awards: 0
  });

  const stats = [
    {
      id: 1,
      icon: FaCode,
      number: 10,
      label: "Projects Completed",
      description: "Full-stack applications and web solutions"
    },
    {
      id: 3,
      icon: FaProjectDiagram,
      number: 2,
      label: "Years Experience",
      description: "Professional development experience"
    },
    {
      id: 4,
      icon: FaAward,
      number: 5,
      label: "Awards & Certifications",
      description: "Recognitions and professional credentials"
    }
  ];

  const socialStats = [
    {
      id: 2,
      icon: FaLinkedin,
      number: "500+",
      label: "LinkedIn Connections",
      description: "Professional network and endorsements",
      url: "https://linkedin.com/in/lovishsinglaa"
    },
    {
      id: 3,
      icon: FaGlobe,
      number: "10+",
      label: "Live Websites",
      description: "Deployed and maintained applications",
      url: "#"
    }
  ];

  useEffect(() => {
    const animateCounts = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      stats.forEach((stat, index) => {
        let current = 0;
        const target = stat.number;
        const increment = target / steps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }

          setCounts(prev => ({
            ...prev,
            [Object.keys(prev)[index]]: Math.floor(current)
          }));
        }, stepDuration);
      });
    };

    // Start animation when component mounts
    const timer = setTimeout(animateCounts, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id='stats' className='min-h-screen p-4 flex flex-col justify-center items-center text-white font-semibold max-w-6xl mx-auto'>
      {/* Header Section */}
      <ScrollAnimation className="scroll-fade-in">
        <div className='relative my-10 text-center'>
          <h1 className='text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent hover:text-gradient-animate transition-all duration-300'>
            Impact & Achievements
          </h1>
          <p className='text-gray-400 mt-4 text-lg max-w-2xl mx-auto hover:text-white transition-colors duration-300'>
            Key metrics that demonstrate my expertise and contributions
          </p>
        </div>
      </ScrollAnimation>

      {/* Main Stats Grid */}
      <div className='w-full max-w-6xl mb-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {stats.map((stat, index) => (
            <ScrollAnimation 
              key={stat.id}
              className="scroll-scale-in" 
              delay={index * 200}
            >
              <div className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 card-hover'>
                <div className='flex justify-center mb-4'>
                  <div className='w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:animate-pulse-glow'>
                    <stat.icon className='text-white hover:scale-110 transition-all duration-300' size={28} />
                  </div>
                </div>
                <div className='text-4xl font-bold text-white mb-2 hover:text-gradient-animate transition-all duration-300'>
                  {counts[Object.keys(counts)[index]]}+
                </div>
                <h3 className='text-lg font-semibold text-purple-400 mb-2 hover:text-white transition-colors duration-300'>
                  {stat.label}
                </h3>
                <p className='text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300'>
                  {stat.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Social Stats */}
      <ScrollAnimation className="scroll-fade-in">
        <div className='w-full max-w-4xl mb-16'>
          <h2 className='text-3xl font-bold text-center mb-8 text-white hover:text-gradient-animate transition-all duration-300'>
            Online Presence
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {socialStats.map((stat, index) => (
              <ScrollAnimation 
                key={stat.id}
                className="scroll-slide-left" 
                delay={index * 200}
              >
                <a
                  href={stat.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 card-hover block'
                >
                  <div className='flex justify-center mb-4'>
                    <div className='w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 hover:animate-pulse-glow'>
                      <stat.icon className='text-white group-hover:scale-110 transition-all duration-300' size={24} />
                    </div>
                  </div>
                  <div className='text-3xl font-bold text-white mb-2 group-hover:text-gradient-animate transition-all duration-300'>
                    {stat.number}
                  </div>
                  <h3 className='text-lg font-semibold text-purple-400 mb-2 group-hover:text-white transition-colors duration-300'>
                    {stat.label}
                  </h3>
                  <p className='text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300'>
                    {stat.description}
                  </p>
                </a>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default Stats 