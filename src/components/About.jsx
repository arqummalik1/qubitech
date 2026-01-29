import React, { useEffect, useRef } from 'react'
import { Rocket, Award, ShieldCheck, Github, Youtube, Linkedin, MoveRight } from 'lucide-react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'

/**
 * About Section
 * Premium "Liquid Glass" branding and founder storytelling.
 * Optimized for mobile responsiveness.
 */
const About = () => {
    const sectionRef = useRef(null)
    const statsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            const stats = statsRef.current.filter(Boolean)
            if (stats.length === 0) return

            gsap.set(stats, { y: 20, opacity: 0 })

            gsap.to(stats, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#stats-grid",
                    start: "top 95%",
                    once: true
                }
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section id="about" ref={sectionRef} className="py-8 sm:py-10 bg-background relative overflow-hidden">

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col gap-12 sm:gap-20">

                    {/* Brand Storytelling */}
                    <div className="space-y-8 sm:space-y-12 text-left max-w-4xl">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-[10px] sm:text-xs font-orbitron text-primary uppercase tracking-[0.5em] mb-4"
                            >
                                Our DNA
                            </motion.h2>
                            <h3 className="text-4xl sm:text-5xl md:text-7xl font-orbitron font-black text-foreground leading-[1.1] tracking-tighter">
                                The Qubit <br />
                                <span className="text-gradient font-bold italic">Philosophy.</span>
                            </h3>
                        </div>

                        <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl font-medium text-muted leading-relaxed font-inter">
                            <p>
                                Born from the technical hub of Jammu, <span className="text-foreground font-black underline decoration-primary/30 decoration-4 underline-offset-8">Qubit Technologies</span> is where high-end software logic meets avant-garde digital design.
                            </p>
                            <p>
                                Founded by the architect behind <span className="text-primary font-black">@qubitplay</span> on YouTube, our agency was built to eliminate digital friction. We automate the redundant and beautify the complex.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 pt-4 items-center justify-start">
                            <div className="flex items-center gap-4">
                                <span className="text-[9px] sm:text-[10px] font-orbitron font-black uppercase tracking-[0.3em] text-primary">Founder</span>
                                <div className="flex gap-4">
                                    {[Github, Youtube, Linkedin].map((Icon, i) => (
                                        <a key={i} href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl glass-premium flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all">
                                            <Icon size={18} sm:size={20} />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <a href="#contact" className="group flex items-center gap-3 text-[10px] sm:text-xs font-orbitron font-black text-foreground uppercase tracking-[0.3em] hover:text-primary transition-colors">
                                View Identity <MoveRight size={16} sm:size={18} className="group-hover:translate-x-2 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Key Statistics Grid - Horizontal Row */}
                    <div id="stats-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { val: '50+', label: 'Global Launches', icon: <Rocket size={20} sm:size={24} /> },
                            { val: 'AI-First', label: 'Architecture', icon: <Award size={20} sm:size={24} /> },
                            { val: '24/7', label: 'Mission Support', icon: <ShieldCheck size={20} sm:size={24} /> },
                            { val: 'Jammu', label: 'Core Base', icon: <Github size={20} sm:size={24} /> },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                ref={el => statsRef.current[i] = el}
                                className="glass-premium p-6 sm:p-8 flex flex-col items-center text-center group cursor-default rounded-[1.5rem] sm:rounded-[2rem] transition-all duration-500 hover:bg-primary/5 hover:-translate-y-1.5"
                            >
                                <div className="mb-3 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                                    {stat.icon}
                                </div>
                                <div className="text-xl sm:text-2xl font-orbitron font-black text-foreground mb-1 group-hover:text-primary transition-colors">{stat.val}</div>
                                <div className="text-[7px] sm:text-[8px] font-orbitron font-bold text-muted uppercase tracking-[0.3em]">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Ambient Decoration */}
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-primary/5 rounded-full blur-[150px] sm:blur-[200px] pointer-events-none" />
        </section>
    )
}

export default About
