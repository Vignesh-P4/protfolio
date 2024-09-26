import React from 'react'
import SectionTitle from '../components/SectionTitle'

function About() {
    return (
        <div>
            <SectionTitle title="About" />
            <div className='flex'>
            <div className='h-[50vh]'>
                <lottie-player src="https://lottie.host/cc4da658-a71a-44b4-a171-219ee606d754/1UKWkXXDh4.json" background="##FFFFFF" speed="1"  controls loop autoplay direction="1" mode="normal"></lottie-player>
            </div>
            <div className='flex flex-col gap-10 py-4  text-justify'>
                <p className='text-white'>
                Here’s a personalized introduction for you:

---

Hello, my name is Vignesh Pobbathi. I'm currently a student passionate about full-stack web development, with a particular focus on the MERN stack (MongoDB, Express, React, and Node.js). I enjoy building dynamic, user-friendly web applications that solve real-world problems. I'm always looking for opportunities to grow my skills and tackle new challenges through hands-on projects. Aside from coding, I love exploring emerging technologies and collaborating with like-minded people to create innovative solutions.
                </p>

            </div>
            </div>
        </div>
    )
}

export default About;
