import { ReactTyped } from 'react-typed'
import profile_img from '../assets/profile_img.png'
import { ScrollAnimation } from '../hooks/useScrollAnimation.jsx'

const HeroSection = () => {
    return (
        <div id='home' className='flex flex-col justify-center items-center mt-10 max-w-xl md:max-w-6xl'>
            <ScrollAnimation className="scroll-scale-in" delay={200}>
                <img 
                    className='rounded-full object-cover object-center animate-float hover-tilt hover-glow' 
                    src={profile_img} 
                    alt="Lovish Singla" 
                    width={300} 
                />
            </ScrollAnimation>
            
            <ScrollAnimation className="scroll-fade-in" delay={400}>
                <h1 className='my-4 text-3xl md:text-6xl font-bold bg-custom-gradient text-transparent bg-clip-text p-3 hover:animate-glitch-text transition-all duration-300'>
                    I'm Lovish Singla, <span className='text-white'>a <br className='md:hidden'/></span>
                    <ReactTyped
                        className='text-white hover:text-purple-400 transition-colors duration-300'
                        strings={[
                            "Coder",
                            "Programmer",
                            "Developer",
                        ]}
                        typeSpeed={100}
                        backSpeed={100}
                        loop
                    />
                </h1>
            </ScrollAnimation>

            <ScrollAnimation className="scroll-fade-in" delay={600}>
                <p className='md:max-w-[100%] mx-auto md:text-lg text-gray-300 hover:text-white transition-colors duration-300'>
                    Problem solver, tech enthusiast, and developer of modern web applications.
                </p>
            </ScrollAnimation>
            
            <ScrollAnimation className="scroll-fade-in" delay={800}>
                <div className='flex gap-5 my-5'>
                    <a href='#contact'>
                        <button className='btn-animate border-2 border-none hover:border-solid hover:border-white bg-custom-gradient text-sm md:text-base md:w-44 md:h-16 py-5 px-5 rounded-full hover-lift'>
                            Connect With Me
                        </button>
                    </a>
                    <a href='/resume.pdf' download='My_Resume.pdf'>
                        <button className='btn-animate border-2 border-white hover:border-purple-600 text-sm md:text-base md:w-44 md:h-16 py-4 px-5 rounded-full hover-lift hover:bg-purple-600/10 transition-all duration-300'>
                            My Resume
                        </button>
                    </a>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default HeroSection
