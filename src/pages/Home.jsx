import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Reviews from '../components/Reviews'
import About from '../components/About'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <main className="relative z-10">
            <Hero />
            <Services />
            <Reviews />
            <About />
            <Contact />
        </main>
    )
}

export default Home
