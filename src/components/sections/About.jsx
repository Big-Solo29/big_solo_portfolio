import React from 'react'
import RevealOnScroll from '../RevealOnScroll';

const About = () => {

  const frontendSkills = ["React", "Bootstrap", "Tailwindcss"];
  const backendSkills = ["PHP", "MySQL"];


  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-20'>

      <RevealOnScroll>

    <div className='max-w-3xl mx-auto px-4 '>
            <h2 className='text-4xl text-center justify-center font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 '>About Me</h2>
      
        <div className='glass rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all text-center justify-center'>
        <p>
            Passionate Developer with expertise in building scalable web application and creating innovative solutons.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>


          {/* FRONTEND SKILL */}


<div className='rounded-xl p-6 hover-translate-y-1 transition-all'>
    <h3 className='text-xl font-bold mb-4 '>FrontEnd</h3>
    <div className='flex flex-wrap gap-2 justify-center text-center'>
      {frontendSkills.map((tech, key) => (
        <span 
        key= {key} 
        className='bg-blue-500/10 text-center justify-center text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px-rgba(59, 130, 2246, 0.2 )] transition'>
          {tech}
        </span>
      ))}
    </div>
</div>

            {/*BACKEND SKILL */}

<div className='rounded-xl p-6 hover-translate-y-1 transition-all'>
    <h3 className='text-xl font-bold mb-4 '>BackEnd</h3>
    <div className='flex flex-wrap gap-2 justify-center text-center'>
      {backendSkills.map((tech, key) => (
        <span 
        key= {key} 
        className='bg-blue-500/10 text-center justify-center text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px-rgba(59, 130, 2246, 0.2 )] transition'>
          {tech}
        </span>
      ))}
    </div>
</div>

        </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
        <div className="p-6 rounded-xl border-white/10 border hover:traslate-y-1 transition-all">
        <h3 className='text-xl font-bold mb-4'>Education</h3>
        <ul className='list-disc list-inside text-gray-300 space-y-2'>
          <li>
            <strong>SSCE Certificate</strong> - Government Technical College, Nsukka, - (2021-2022)
          </li>
          <li>
            <strong>Relevant Coursework</strong> - Web Development, Computer Literate Proffesional...
          </li>

        </ul>



        </div>
        <div className="p-6 rounded-xl border-white/10 border hover:traslate-y-1 transition-all">
        <h3 className='text-xl font-bold mb-4'>Work Experience</h3>
        <ul className='list-disc list-inside text-gray-300 space-y-2'>
          <li>
            <strong>Freelance Web Developer</strong> | Self Employed <br /> - Designed and developed responsive websites for clients using [React, Tailwindcss]. <br /> - Improved website performance by optimizing code and fixing bugs
            
          </li>

        </ul>

        </div>
        </div>
    </div>
    </RevealOnScroll>
    </section> 
  )
}

export default About;