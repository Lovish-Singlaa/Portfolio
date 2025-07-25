import React, { useState } from 'react'
import theme_pattern from '../assets/theme_pattern.svg'
import mail_icon from '../assets/mail_icon.svg'
import location_icon from '../assets/location_icon.svg'
import call_icon from '../assets/call_icon.svg'
import { ScrollAnimation } from '../hooks/useScrollAnimation.jsx'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const [isSubmitting, setIsSubmitting] = useState(false);
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
    
        const submissionData = new FormData();
        submissionData.append('access_key', '749cd161-120b-477c-ae4c-c328f0beada8');
        submissionData.append('name', formData.name);
        submissionData.append('email', formData.email);
        submissionData.append('message', formData.message);
    
        try {
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: submissionData
          });
    
          const data = await response.json();
    
          if (data.success) {
            alert('Form Submitted Successfully');
            setFormData({ name: '', email: '', message: '' }); // Reset form data
          } else {
            alert(data.message);
          }
        } catch (error) {
          alert('There was an error submitting the form.');
        } finally {
          setIsSubmitting(false);
        }
      };

    return (
        <div id='contact' className='p-4 flex flex-col justify-center items-center text-white font-semibold max-w-xl md:max-w-6xl mx-auto my-10 mb-12'>
            <ScrollAnimation className="scroll-fade-in">
                <div className='relative my-10'>
                    <h1 className='text-5xl md:text-6xl hover:text-gradient-animate transition-all duration-300'>Get in touch</h1>
                    <img className='absolute bottom-0 w-28 -right-6 -z-10 animate-float' src={theme_pattern} alt="" />
                </div>
            </ScrollAnimation>
            
            <div className='w-full flex md:flex-row flex-col gap-8'>
                <ScrollAnimation className="scroll-slide-left">
                    <div className='w-full'>
                        <h1 className='text-4xl md:text-5xl bg-custom-gradient text-transparent bg-clip-text my-5 hover:animate-pulse-glow transition-all duration-300'>Let's talk</h1>
                        <p className='md:pr-6 text-gray-300 hover:text-white transition-colors duration-300 leading-relaxed'>I'm currently avaliable to take on new opportunities, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                        
                        <div className='space-y-4 my-8'>
                            <div className='flex gap-4 items-center hover:scale-105 transition-all duration-300 hover-lift group'>
                                <img src={mail_icon} alt="" width={25} className='group-hover:animate-bounce' />
                                <span className='text-gray-300 group-hover:text-white transition-colors duration-300'>singlalovish26@gmail.com</span>
                            </div>
                            <div className='flex gap-4 items-center hover:scale-105 transition-all duration-300 hover-lift group'>
                                <img src={location_icon} alt="" width={22} className='group-hover:animate-bounce' />
                                <span className='text-gray-300 group-hover:text-white transition-colors duration-300'>Ludhiana,Punjab,India</span>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
                
                <div className=' w-full'>
                    <ScrollAnimation className="scroll-slide-right">
                        <form action="" className='space-y-6'>
                            <div className='flex flex-col w-full group'>
                                <label className='my-2 group-hover:text-purple-400 transition-colors duration-300'>Your Name</label>
                                <input 
                                    required 
                                    name='name' 
                                    onChange={handleChange} 
                                    value={formData.name} 
                                    type='text' 
                                    placeholder='Enter your name' 
                                    className='w-full p-4 bg-[#32323c] border-2 border-transparent outline-none rounded-lg focus:border-purple-500 focus:bg-[#2a2a35] transition-all duration-300 hover:bg-[#2a2a35] hover:scale-[1.02]' 
                                />
                            </div>
                            <div className='flex flex-col w-full group'>
                                <label className='my-2 group-hover:text-purple-400 transition-colors duration-300'>Your Email</label>
                                <input 
                                    required 
                                    name='email' 
                                    onChange={handleChange} 
                                    value={formData.email} 
                                    type='email' 
                                    placeholder='Enter your email' 
                                    className='w-full p-4 bg-[#32323c] border-2 border-transparent outline-none rounded-lg focus:border-purple-500 focus:bg-[#2a2a35] transition-all duration-300 hover:bg-[#2a2a35] hover:scale-[1.02]' 
                                />
                            </div>
                            <div className='flex flex-col w-full group'>
                                <label className='my-2 group-hover:text-purple-400 transition-colors duration-300'>Write your message here</label>
                                <textarea 
                                    required 
                                    name='message' 
                                    onChange={handleChange} 
                                    value={formData.message} 
                                    type='text' 
                                    placeholder='Enter your message' 
                                    rows='8' 
                                    cols='10' 
                                    className='w-full p-4 bg-[#32323c] border-2 border-transparent outline-none rounded-lg focus:border-purple-500 focus:bg-[#2a2a35] transition-all duration-300 hover:bg-[#2a2a35] hover:scale-[1.02] resize-none' 
                                />
                            </div>
                            <button 
                                type='submit' 
                                onClick={onSubmit} 
                                className='btn-animate border-2 border-none hover:border-solid hover:border-white bg-custom-gradient p-4 w-32 rounded-full hover-lift disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300' 
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Submit'}
                            </button>
                        </form>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    )
}

export default Contact
