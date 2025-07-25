import React from 'react'
import theme_pattern from '../assets/theme_pattern.svg'
import about_profile from '../assets/about_profile.jpg'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import { ScrollAnimation } from '../hooks/useScrollAnimation.jsx'

const About = () => {
    return (
        <div id='about' className='p-4 flex flex-col justify-center items-center text-white font-semibold max-w-xl md:max-w-6xl mx-auto my-5'>
            <ScrollAnimation className="scroll-fade-in">
                <div className='relative my-10'>
                    <h1 className='text-6xl hover:text-gradient-animate transition-all duration-300'>About me</h1>
                    <img className='absolute bottom-0 w-28 -right-6 -z-10 animate-float' src={theme_pattern} alt="" />
                </div>
            </ScrollAnimation>
            
            <div className='flex gap-14'>
                <ScrollAnimation className="scroll-slide-left">
                    <div className='hidden md:flex'>
                        <img 
                            src={about_profile} 
                            alt="About Profile" 
                            width={800} 
                            className='rounded-lg hover-tilt hover-glow transition-all duration-300' 
                        />
                    </div>
                </ScrollAnimation>
                
                <ScrollAnimation className="scroll-slide-right">
                    <div className='space-y-4'>
                        <p className='text-gray-300 hover:text-white transition-colors duration-300 leading-relaxed'>
                            I am a passionate and driven software developer with hands-on experience in building various web applications. My strength lies in my ability to quickly grasp new technologies, solve complex coding challenges, and work collaboratively in a team environment.
                        </p>
                        <p className='text-gray-300 hover:text-white transition-colors duration-300 leading-relaxed'>
                            Whether it's designing user-friendly interfaces or building scalable backends, I am always looking for innovative solutions to complex challenges. My enthusiasm for technology, coupled with my academic background and hackathon experience, drives me to continuously improve and learn.
                        </p>
                        
                        <div className='my-8 space-y-4'>
                            <div className='w-full flex items-center gap-7 text-xl hover:scale-105 transition-all duration-300 group'>
                                <span className='w-20 md:w-32 group-hover:text-purple-400 transition-colors duration-300'>HTML & CSS</span>
                                <div className='flex-1 bg-gray-700 rounded-full h-2 overflow-hidden'>
                                    <div className='bg-custom-gradient h-full rounded-full transition-all duration-1000 ease-out' style={{ width: '98%' }}></div>
                                </div>
                            </div>

                            <div className='w-full flex items-center gap-7 text-xl hover:scale-105 transition-all duration-300 group'>
                                <span className='w-20 md:w-32 group-hover:text-purple-400 transition-colors duration-300'>Javascript</span>
                                <div className='flex-1 bg-gray-700 rounded-full h-2 overflow-hidden'>
                                    <div className='bg-custom-gradient h-full rounded-full transition-all duration-1000 ease-out' style={{ width: '97%' }}></div>
                                </div>
                            </div>

                            <div className='w-full flex items-center gap-7 text-xl hover:scale-105 transition-all duration-300 group'>
                                <span className='w-20 md:w-32 group-hover:text-purple-400 transition-colors duration-300'>React JS</span>
                                <div className='flex-1 bg-gray-700 rounded-full h-2 overflow-hidden'>
                                    <div className='bg-custom-gradient h-full rounded-full transition-all duration-1000 ease-out' style={{ width: '93%' }}></div>
                                </div>
                            </div>

                            <div className='w-full flex items-center gap-7 text-xl hover:scale-105 transition-all duration-300 group'>
                                <span className='w-20 md:w-32 group-hover:text-purple-400 transition-colors duration-300'>Next JS</span>
                                <div className='flex-1 bg-gray-700 rounded-full h-2 overflow-hidden'>
                                    <div className='bg-custom-gradient h-full rounded-full transition-all duration-1000 ease-out' style={{ width: '93%' }}></div>
                                </div>
                            </div>

                            <div className='w-full flex items-center gap-7 text-xl hover:scale-105 transition-all duration-300 group'>
                                <span className='w-20 md:w-32 group-hover:text-purple-400 transition-colors duration-300'>Node JS</span>
                                <div className='flex-1 bg-gray-700 rounded-full h-2 overflow-hidden'>
                                    <div className='bg-custom-gradient h-full rounded-full transition-all duration-1000 ease-out' style={{ width: '93%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
            
            <div className='w-full'>
            <ScrollAnimation className="scroll-fade-in">
                <div className='w-full flex flex-col md:flex-row justify-around items-center my-10 font-bold mb-9'>
                    <div className='text-center hover:scale-105 transition-all duration-300 hover-lift'>
                        <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                            {({ isVisible }) => (
                                <p className='text-4xl bg-custom-gradient text-transparent bg-clip-text hover:animate-pulse-glow'>
                                    {isVisible ? <CountUp end={500} duration={2} /> : '0'}+
                                </p>
                            )}
                        </VisibilitySensor>
                        <p className='text-xl hover:text-purple-400 transition-colors duration-300'>DSA PROBLEMS</p>
                    </div>
                    <hr className='md:border-l-2 h-16 mx-4 border-purple-600/50' />
                    <div className='text-center hover:scale-105 transition-all duration-300 hover-lift'>
                        <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                            {({ isVisible }) => (
                                <p className='text-4xl bg-custom-gradient text-transparent bg-clip-text hover:animate-pulse-glow'>
                                    {isVisible ? <CountUp end={6} duration={2} /> : '0'}+
                                </p>
                            )}
                        </VisibilitySensor>
                        <p className='text-xl hover:text-purple-400 transition-colors duration-300'>PROJECTS</p>
                    </div>
                    <hr className='md:border-l-2 h-16 mx-4 border-purple-600/50' />
                    <div className='text-center hover:scale-105 transition-all duration-300 hover-lift'>
                        <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                            {({ isVisible }) => (
                                <p className='text-4xl bg-custom-gradient text-transparent bg-clip-text hover:animate-pulse-glow'>
                                    {isVisible ? <CountUp end={2} duration={2} /> : '0'}+
                                </p>
                            )}
                        </VisibilitySensor>
                        <p className='text-xl hover:text-purple-400 transition-colors duration-300'>Hackathons</p>
                    </div>
                </div>  
            </ScrollAnimation>
            </div>
        </div>
    )
}

export default About
