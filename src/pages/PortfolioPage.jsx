import React, { useEffect } from 'react'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import { gsap } from 'gsap'

const PortfolioPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className="relative z-10 pt-20">
            <Portfolio />
            <Contact />
        </main>
    )
}

export default PortfolioPage
