import React, { useState } from 'react'
import theme_pattern from '../assets/theme_pattern.svg'
import mail_icon from '../assets/mail_icon.svg'
import location_icon from '../assets/location_icon.svg'
import call_icon from '../assets/call_icon.svg'

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
            <div className='relative my-10'>
                <h1 className='text-5xl md:text-6xl'>Get in touch</h1>
                <img className='absolute bottom-0 w-28 -right-6 -z-10' src={theme_pattern} alt="" />
            </div>
            <div className='w-full flex md:flex-row flex-col'>
                <div className='md:w-1/2 w-full'>
                    <h1 className='text-4xl md:text-5xl bg-custom-gradient text-transparent bg-clip-text my-5'>Let's talk</h1>
                    <p className='md:pr-6'>I'm currently avaliable to take on new opportunities, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className='flex gap-4 my-5'>
                        <img src={mail_icon} alt="" width={25} />
                        <span>singlalovish26@gmail.com</span>
                    </div>
                    <div className='flex gap-4 my-5'>
                        <img src={location_icon} alt="" width={22} />
                        <span>Ludhiana,Punjab,India</span>
                    </div>
                </div>
                <div className='flex flex-col md:w-1/2'>
                    <form action="">
                        <div className='flex flex-col mb-4 w-full'>
                            <label className='my-2'>Your Name</label>
                            <input required name='name' onChange={handleChange} value={formData.name} type='text' placeholder='Enter your name' className='p-4 bg-[#32323c] border-none outline-none rounded-sm' />
                        </div>
                        <div className='flex flex-col mb-4 w-full'>
                            <label className='my-2'>Your Email</label>
                            <input required name='email' onChange={handleChange} value={formData.email} type='email' placeholder='Enter your email' className='p-4 bg-[#32323c] border-none outline-none rounded-sm' />
                        </div>
                        <div className='flex flex-col mb-4 w-full'>
                            <label className='my-2'>Write your message here</label>
                            <textarea required name='message' onChange={handleChange} value={formData.message} type='text' placeholder='Enter your message' rows='8' cols='10' className='p-4 bg-[#32323c] border-none outline-none rounded-sm' />
                        </div>
                        <button type='submit' onClick={onSubmit} className='border-2 border-none hover:border-solid hover:border-white bg-custom-gradient p-4 w-32 rounded-full' disabled={isSubmitting}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
