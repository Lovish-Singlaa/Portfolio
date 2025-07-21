import React from 'react'
import theme_pattern from '../assets/theme_pattern.svg'
import about_profile from '../assets/about_profile.jpg'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

const About = () => {
    return (
        <div id='about' className='p-4 flex flex-col justify-center items-center text-white font-semibold max-w-xl md:max-w-6xl mx-auto my-5'>
            <div className='relative my-10'>
                <h1 className='text-6xl'>About me</h1>
                <img className='absolute bottom-0 w-28 -right-6 -z-10' src={theme_pattern} alt="" />
            </div>
            <div className='flex gap-14'>
                <div className='hidden md:flex'>
                    <img src={about_profile} alt="" width={800} className='rounded-lg' />
                </div>
                <div>
                    I am a passionate and driven software developer with hands-on experience in building various web applications. My strength lies in my ability to quickly grasp new technologies, solve complex coding challenges, and work collaboratively in a team environment.<br /><br />
                    Whether it’s designing user-friendly interfaces or building scalable backends, I am always looking for innovative solutions to complex challenges. My enthusiasm for technology, coupled with my academic background and hackathon experience, drives me to continuously improve and learn.
                    <div className='my-8'>
                        <div className='w-full flex items-center gap-7 my-4 text-xl hover:transition duration-300 hover:scale-105'><span className='w-20 md:w-32'>HTML & CSS</span><hr className='w-[70%] bg-custom-gradient h-2 border-none rounded-e' /></div>

                        <div className='w-full flex items-center gap-7 my-4 text-xl hover:transition duration-300 hover:scale-105'><span className='w-20 md:w-32'>Javascript</span><hr className='w-[70%] bg-custom-gradient h-2 border-none rounded-e' /></div>

                        <div className='w-full flex items-center gap-7 my-4 text-xl hover:transition duration-300 hover:scale-105'><span className='w-20 md:w-32 '>React JS</span><hr className='w-[67%] bg-custom-gradient h-2 border-none rounded-e' /></div>

                        <div className='w-full flex items-center gap-7 my-4 text-xl hover:transition duration-300 hover:scale-105'><span className='w-20 md:w-32'>Next JS</span><hr className='w-[67%] bg-custom-gradient h-2 border-none rounded-e' /></div>

                        <div className='w-full flex items-center gap-7 my-4 text-xl hover:transition duration-300 hover:scale-105'><span className='w-20 md:w-32'>Next JS</span><hr className='w-[67%] bg-custom-gradient h-2 border-none rounded-e' /></div>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col md:flex-row justify-around items-center my-10 font-bold mb-9'>
                <div className='text-center'>
                    <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                        {({ isVisible }) => (
                            <p className='text-4xl bg-custom-gradient text-transparent bg-clip-text'>
                                {isVisible ? <CountUp end={500} duration={2} /> : '0'}+
                            </p>
                        )}
                    </VisibilitySensor>
                    <p className='text-xl'>DSA PROBLEMS</p>
                </div>
                <hr className='md:border-l-2 h-16 mx-4' />
                <div className='text-center'>
                    <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                        {({ isVisible }) => (
                            <p className='text-4xl bg-custom-gradient text-transparent bg-clip-text'>
                                {isVisible ? <CountUp end={6} duration={2} /> : '0'}+
                            </p>
                        )}
                    </VisibilitySensor>
                    <p className='text-xl'>PROJECTS</p>
                </div>
                <hr className='md:border-l-2 h-16 mx-4' />
                <div className='text-center'>
                    <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                        {({ isVisible }) => (
                            <p className='text-4xl bg-custom-gradient text-transparent bg-clip-text'>
                                {isVisible ? <CountUp end={2} duration={2} /> : '0'}+
                            </p>
                        )}
                    </VisibilitySensor>
                    <p className='text-xl'>Hackathons</p>
                </div>
            </div>
        </div>
    )
}

export default About
