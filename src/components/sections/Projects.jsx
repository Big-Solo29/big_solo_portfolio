import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

const Projects = () => {
  return (
    <section id='projects' className='min-h-screen flex items-center justify-center py-20'>

    <RevealOnScroll>

        <div className='max-w-5xl mx-auto px-4'>
            <h2 className='text-4xl text-center justify-center font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 '>Featured Projects
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className='p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition '>
        <h3 className='text-xl font-bold mb-2'>Movie App</h3>
        <p className='text-gray-400 mb-4'>
            Scalable Movie App built in better interactions for users. 
        </p>
        <div>
            {["React", "Tailwindcss"].map((tech, key) => (
                <span 
                key= {key} 
                className='bg-blue-500/10 text-center justify-center text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px-rgba(59, 130, 2246, 0.1)] transition-all'>
                  {tech}
                </span>
            ))}
        </div>
        <div className='flex justify-between items-center'>
            <a href="https://movieapp-iota-henna.vercel.app/" className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:text-blue-500 transition-colors my-4'>View Project →</a>
        </div>
    </div>


    <div className='p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition '>
        <h3 className='text-xl font-bold mb-2'>Acme Rocket</h3>
        <p className='text-gray-400 mb-4'>
            Scalable Rocket App built in better interactions for users. 
        </p>
        <div>
            {["HTML","Tailwindcss", "JavaScript" ].map((tech, key) => (
                <span 
                key= {key} 
                className='bg-blue-500/10 text-center justify-center text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px-rgba(59, 130, 2246, 0.1)] transition-all'>
                  {tech}
                </span>
            ))}
        </div>
        <div className='flex justify-between items-center'>
            <a href="https://movieapp-iota-henna.vercel.app/" className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:text-blue-500 transition-colors my-4'>View Project →</a>
        </div>
    </div>
</div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default Projects 