import React, { useState, useEffect } from 'react'
import { FaCode, FaUsers, FaProjectDiagram, FaAward, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

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
    // {
    //   id: 2,
    //   icon: FaUsers,
    //   number: 15,
    //   label: "Happy Clients",
    //   description: "Satisfied customers and partners"
    // },
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
    // {
    //   id: 1,
    //   icon: FaGithub,
    //   number: "150+",
    //   label: "GitHub Repositories",
    //   description: "Open source contributions and projects",
    //   url: "https://github.com/yourusername"
    // },
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
      <div className='relative my-10 text-center'>
        <h1 className='text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>
          Impact & Achievements
        </h1>
        <p className='text-gray-400 mt-4 text-lg max-w-2xl mx-auto'>
          Key metrics that demonstrate my expertise and contributions
        </p>
      </div>

      {/* Main Stats Grid */}
      <div className='w-full max-w-6xl mb-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className='animate-fade-in-up bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className='flex justify-center mb-4'>
                <div className='w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center'>
                  <stat.icon className='text-white' size={28} />
                </div>
              </div>
              <div className='text-4xl font-bold text-white mb-2'>
                {counts[Object.keys(counts)[index]]}+
              </div>
              <h3 className='text-lg font-semibold text-purple-400 mb-2'>
                {stat.label}
              </h3>
              <p className='text-gray-400 text-sm'>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Stats */}
      <div className='w-full max-w-4xl mb-16'>
        <h2 className='text-3xl font-bold text-center mb-8 text-white'>
          Online Presence
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {socialStats.map((stat, index) => (
            <a
              key={stat.id}
              href={stat.url}
              target='_blank'
              rel='noopener noreferrer'
              className='group animate-fade-in-up bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-105'
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
            >
              <div className='flex justify-center mb-4'>
                <div className='w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <stat.icon className='text-white' size={24} />
                </div>
              </div>
              <div className='text-3xl font-bold text-white mb-2'>
                {stat.number}
              </div>
              <h3 className='text-lg font-semibold text-purple-400 mb-2'>
                {stat.label}
              </h3>
              <p className='text-gray-400 text-sm'>
                {stat.description}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Additional Achievements
      <div className='w-full max-w-4xl'>
        <h2 className='text-3xl font-bold text-center mb-8 text-white'>
          Recent Highlights
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500'>
            <h3 className='text-xl font-bold text-white mb-3'>Technical Excellence</h3>
            <ul className='space-y-2 text-gray-300'>
              <li className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-purple-500 rounded-full'></span>
                <span>100% project completion rate</span>
              </li>
              <li className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-purple-500 rounded-full'></span>
                <span>Average 4.9/5 client satisfaction</span>
              </li>
              <li className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-purple-500 rounded-full'></span>
                <span>50+ code reviews conducted</span>
              </li>
              <li className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-purple-500 rounded-full'></span>
                <span>Mentored 5+ junior developers</span>
              </li>
            </ul>
          </div>
          
          <div className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500'>
            <h3 className='text-xl font-bold text-white mb-3'>Community Impact</h3>
            <ul className='space-y-2 text-gray-300'>
              <li className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-purple-500 rounded-full'></span>
                <span>Active open source contributor</span>
              </li>
              <li className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-purple-500 rounded-full'></span>
                <span>Tech community speaker</span>
              </li>
              <li className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-purple-500 rounded-full'></span>
                <span>Published technical articles</span>
              </li>
              <li className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-purple-500 rounded-full'></span>
                <span>Volunteer coding instructor</span>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

    </div>
  )
}

export default Stats 