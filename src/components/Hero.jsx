import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * Hero Section
 * Premium "Liquid Glass" landing experience.
 * Optimized for mobile responsiveness and screen space.
 */
const Hero = () => {
    const heroRef = useRef(null)
    const titleRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
            })
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={heroRef} className="relative min-h-[60vh] sm:min-h-[70vh] w-full flex items-center justify-center overflow-hidden mesh-gradient py-8 sm:py-12 pt-28 sm:pt-32">

            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary/20 rounded-full blur-[80px] sm:blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-secondary/15 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="flex flex-col items-center gap-4 sm:gap-6">


                    {/* Headline Deck */}
                    <div ref={titleRef} className="space-y-1">
                        <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-orbitron font-black tracking-tighter text-foreground leading-[0.85] select-none uppercase">
                            BINARY <br />
                            <span className="text-gradient drop-shadow-[0_0_20px_rgba(99,102,241,0.2)]">BRILLIANCE</span>
                        </h1>
                    </div>

                    {/* Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-[11px] sm:text-sm md:text-lg font-medium text-muted max-w-sm sm:max-w-xl mx-auto leading-relaxed px-4"
                    >
                        We engineer high-performance ecosystems for global leaders.
                        Precision logic meets avant-garde design.
                    </motion.p>

                    {/* Premium Action Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto px-6 sm:px-0"
                    >
                        <Link
                            to="/portfolio"
                            className="group relative w-full sm:w-auto px-10 py-4 bg-primary text-white font-orbitron font-bold text-[10px] uppercase tracking-[0.2em] rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_-10px_rgba(99,102,241,0.4)]"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Explore Work <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </Link>

                        <Link
                            to="/#contact"
                            className="w-full sm:w-auto px-10 py-4 glass-premium text-foreground font-orbitron font-bold text-[10px] uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
                        >
                            <Play size={14} className="fill-primary text-primary" /> Start Project
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Anchors */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted/20 hidden sm:block">
                <ChevronDown size={20} className="animate-bounce" />
            </div>
        </section>
    )
}

export default Hero
