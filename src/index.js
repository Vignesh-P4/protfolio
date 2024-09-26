import React from 'react'
import Header from '../../components/Header'
import SectionTitle from '../../components/SectionTitle.js'
import Intro from './Intro.js'
import About from '../About.js'

function Home(){
    return(
        <div>
            <Header />
            <div className='bg-primary px-20'>
            <Intro />
            <About />
        </div>
        </div>
    )
}

export default Home
