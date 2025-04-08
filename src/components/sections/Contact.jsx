import React, { useState } from 'react'
import RevealOnScroll from '../RevealOnScroll'
import emailjs from "emailjs-com"
import {toast} from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedinIn, faXTwitter} from '@fortawesome/free-brands-svg-icons'




const Contact = () => {
    const [formData, setFormData] = useState ({
        name: "",
        email: "",
        message: "",
    })

    
    const handleSubmit = (e) =>{
        e.preventDefault()

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
          toast.success("Message Sent!");
          setFormData({name: "", email: "", message: "" });
        }).catch (() => toast.error("Oops! Something went wrong. Please Try again."))
    }

  return (
    <section id='contact' className='w-full min-h-screen flex items-center justify-center py-20'>
      <div className='w-full max-w-2xl px-4'>
        <RevealOnScroll>
          <div className='w-full'> 
            <h2 className='text-4xl text-center font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
              Get In Touch
            </h2>
            
      
            <form className='w-full space-y-6' onSubmit={handleSubmit}>

              {/* Input Field */}
              <div className='w-full'>
                <input 
                  type="text"
                  id='name'
                  name='name'
                  required
                  value={formData.name}
                  className='
                    w-full 
                    block /* Ensures box model works correctly */
                    bg-white/5 
                    border 
                    border-white/10 
                    rounded 
                    px-4 
                    py-3 
                    text-white 
                    transition 
                    focus:outline-none 
                    focus:border-blue-500 
                    focus:bg-blue-500/5
                  ' 
                  placeholder='Name...' 
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              {/* Email Field */}
              <div className='w-full'>
                <input 
                  type="email"
                  id='email'
                  name='email'
                  required
                  value={formData.email}
                  className='
                    w-full
                    block
                    bg-white/5
                    border
                    border-white/10
                    rounded
                    px-4
                    py-3
                    text-white
                    transition
                    focus:outline-none
                    focus:border-blue-500
                    focus:bg-blue-500/5
                  '
                  placeholder='email@gmail.com'
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              {/* Textarea Field */}
              <div className='w-full'>
                <textarea
                  id='message'
                  name='message'
                  required
                  value={formData.message}
                  rows={5}
                  className='
                    w-full
                    block
                    bg-white/5
                    border
                    border-white/10
                    rounded
                    px-4
                    py-3
                    text-white
                    transition
                    focus:outline-none
                    focus:border-blue-500
                    focus:bg-blue-500/5
                  '
                  placeholder='Your Message...'
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <button type='submit' className='w-full bg-blue-500 text-white bg-gradient-to-r from-blue-500 to-purple-600 py-3 px-6  rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)'>Send Message</button>
            </form>
          </div>

          <div className='text-center justify-center'>
                  <h1 className='py-7'>You can also reach me on Socials: </h1>

                  <div className='flex gap-4 text-center justify-center'>

                    {/* GITHUB */}

                  <a href="https://github.com/Big-Solo29"> 

                 <FontAwesomeIcon icon={faGithub} className='size-5 bg-blue-500 text-white bg-gradient-to-r from-blue-500 to-purple-600 py-2 px-2 rounded-full font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4) '/>
                  </a>

                    {/* LINKDEN */}

                  <a href="https://www.linkedin.com/in/solomon-wise-122797338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> 

                 <FontAwesomeIcon icon={faLinkedinIn} className='size-5 bg-blue-500 text-white bg-gradient-to-r from-blue-500 to-purple-600 py-2 px-2 rounded-full font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4) '/>
                  </a>

                  {/* TWITTER */}

                  <a href="https://x.com/Big_Soolo?t=6VeeWBZOgybYflpyXiFcUQ&s=09"> 

                 <FontAwesomeIcon icon={faXTwitter} className='size-5 bg-blue-500 text-white bg-gradient-to-r from-blue-500 to-purple-600 py-2 px-2 rounded-full font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4) '/>
                  </a>
                  </div>

          </div>
  
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default Contact