import React from 'react'

export default function Navbar({logo}) {
  return (
    <nav className='bg-sky-600'>
    <div className='p-6 w-full flex flex-row items-center justify-between'>
          <div className='text-3xl font-bold'>{logo}</div>
          <div className='flex flex-row font-semibold justify-between text-2xl gap-7'>
            <div>Home</div>
            <div>Services</div>
            <div>Resume</div>
            <div>Portfolio</div>
          </div>
          <button className='px-6 py-2 bg-sky-300 rounded-full font-semibold hover:bg-sky-800'>Contact Me</button>
        </div>
        </nav>
  )
}

