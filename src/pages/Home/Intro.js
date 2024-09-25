import React from 'react'

function Intro() {
return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
        <h1 className='text-tertiary'>Hi , I am</h1>
        <h1 className='text-7xl text-secondary font-semibold'>Vignesh Pobbathi</h1>
        <h1 className='text-6xl text-tertiary font-semibold'>I build things for the web.</h1>
        <p className='text-white w-2/3'>A passionate student actively building skills in web development using the MERN stack (MongoDB, Express, React, Node.js). I enjoy creating dynamic projects that enhance my understanding of full-stack development while exploring new technologies and problem-solving approaches. Constantly learning and refining my skills through hands-on projects.</p>
        <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
        </div>
)
}

export default Intro