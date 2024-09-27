import React from 'react'
import SectionTitle from '../../components/SectionTitle.js'

function About() {

    const skills=[
        "Python",
        "React",
        "Node",
        "MongoDB",
    ]

    return (
        <div>
            
            <SectionTitle title="About" />
            <div className='flex'>
            <div className='h-[70vh] w-1/2 py-8'>
                <lottie-player src="https://lottie.host/cc4da658-a71a-44b4-a171-219ee606d754/1UKWkXXDh4.json" background="##FFFFFF" speed="1"  controls loop autoplay direction="1" mode="normal"></lottie-player>
            </div>
            <div className='flex flex-col gap-10 py-4  w-1/2'>
                <p className='text-white flex align-center'>

Hello, my name is Vignesh Pobbathi. I'm currently a student passionate about full-stack web development, with a particular focus on the MERN stack (MongoDB, Express, React, and Node.js). I enjoy building dynamic, user-friendly web applications that solve real-world problems. I'm always looking for opportunities to grow my skills and tackle new challenges through hands-on projects. Aside from coding, I love exploring emerging technologies and collaborating with like-minded people to create innovative solutions.
                </p>

                <p className='text-white flex align-center'>
                I'm currently building my expertise in Business Analysis through hands-on experience with a startup company called ThinkMates, located in T-HUB, Hyderabad, Telangana, India. This learning journey has provided me with practical skills in understanding and interpreting business data to make informed decisions.

Along the way, I've also developed proficiency in various data visualization tools, such as Excel, Power BI, and SQL, allowing me to analyze, visualize, and present data effectively. My experience has equipped me to draw insights from complex datasets and present them in a clear, actionable way.


                </p>



            </div>
            </div>
            <div className='py-9'>
            <h1 className='text-tertiary text-2xl'>
                Here are a few technologies I've been working with recently:
                </h1>
            <div className='flex flex-wrap'>
            {skills.map((skill,index)=>(
                <div>
                    <h1>{skills}</h1>
                    </div>
            )
    )
}
            </div></div>
        </div>
    )
}

export default About;
