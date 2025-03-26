import { ReactTyped } from 'react-typed'
import profile_img from '../assets/profile_img.png'
const HeroSection = () => {
    return (
        <div id='home' className='flex flex-col justify-center items-center mt-10 max-w-xl md:max-w-6xl'>
            <img className='rounded-full object-cover object-center' src={profile_img} alt="" width={300} />
            <h1 className='my-4 text-3xl md:text-6xl font-bold bg-custom-gradient text-transparent bg-clip-text p-3'>I'm Lovish Singla, <span className='text-white'>a <br className='md:hidden'/></span><ReactTyped
                className='text-white'
                strings={[
                    "Coder",
                    "Programmer",
                    "Developer",
                ]}
                typeSpeed={100}
                backSpeed={100}
                loop
            ></ReactTyped></h1>

            <p className='md:max-w-[60%] mx-auto md:text-lg'>Problem solver, tech enthusiast, and developer of modern web applications.</p>
            <div className='flex gap-5 my-5'>
            <a href='#contact'><button className='border-2 border-none hover:border-solid hover:border-white bg-custom-gradient text-sm md:text-base md:w-44 md:h-16 py-5 px-5 rounded-full'>Connect With Me</button></a>
                <a href='/resume.pdf' download='My_Resume.pdf'><button className='border-2 border-white hover:border-purple-600 text-sm md:text-base md:w-44 md:h-16 py-4 px-5 rounded-full'>My Resume</button></a>
            </div>
        </div>
    )
}

export default HeroSection
