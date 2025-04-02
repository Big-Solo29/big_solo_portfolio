import React from 'react'
import RevealOnScroll from '../RevealOnScroll';

const Home = () => {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative'>

        <RevealOnScroll>

        <div className='text-center z-10 px-4'>
            <h1 className='text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-bold '>
                ...I'm Big Solo;
            </h1>

            <p className='text-gray-400 text-lg mb-8 max-w-lg mx-auto py'>
                I'm a FrontEnd Developer with a little knowledge of BackEnd Development, who loves crafting clean and scalable web application. My goal is to build solutions that offer both exeptional perfomance and a delightful user experience.

            </p>
            <div className='flex justify-center space-x-4'>
                <a href="#project" className='bg-blue-500 text-white bg-gradient-to-r from-blue-500 to-purple-600 py-3 px-6  rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)'>View Project</a>

                <a href="#contact" className=' border border-blue-500/50 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.3)] hover:bg-blue-500/10'>Contact Me</a>

            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default Home;