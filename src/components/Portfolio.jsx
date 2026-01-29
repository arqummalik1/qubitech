import React, { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Play, X, ExternalLink, Github as GithubIcon, Cpu, Box, Shield, Zap, Globe, Layers } from 'lucide-react'
import { gsap } from 'gsap'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
    {
        id: 1,
        title: 'Nova Fintech Hub',
        category: 'Finance V3',
        tech: ['React', 'Solidity', 'AWS'],
        description: 'A revolutionary decentralized finance dashboard providing real-time analytic depth and secure asset management across multiple chains.',
        image: '/illustrations/systems_architecture_illustration_1769681075956.png',
        gradient: 'from-blue-600/20 to-cyan-500/10',
        icon: <Zap size={20} />,
        stats: '0.4s Latency'
    },
    {
        id: 2,
        title: 'NeuralSift AI',
        category: 'AI Agents',
        tech: ['Next.js', 'Python', 'OpenAI'],
        description: 'Advanced multi-agent neural platform designed to sift through millions of data points to provide actionable business intelligence.',
        image: '/illustrations/ai_neural_logic_illustration_1769681144070.png',
        gradient: 'from-purple-600/20 to-fuchsia-500/10',
        icon: <Cpu size={20} />,
        stats: '99.8% Acc.'
    },
    {
        id: 3,
        title: 'Luxe E-commerce',
        category: 'XR Retail',
        tech: ['Vite', 'Three.js', 'Stripe'],
        description: 'A premium virtual shopping experience utilizing WebGL for immersive product interactions and seamless high-speed checkouts.',
        image: '/illustrations/product_engineering_illustration_1769681168138.png',
        gradient: 'from-rose-600/20 to-pink-500/10',
        icon: <Box size={20} />,
        stats: '60 FPS Render'
    },
    {
        id: 4,
        title: 'StreamLine CRM',
        category: 'SaaS / Ops',
        tech: ['TypeScript', 'GraphQL', 'Docker'],
        description: 'Enterprise-grade CRM with automated deployment cycles and real-time synchronization across global team nodes.',
        image: '/illustrations/technical_audits_illustration_1769681193383.png',
        gradient: 'from-emerald-600/20 to-teal-500/10',
        icon: <Shield size={20} />,
        stats: 'Zero-Downtime'
    },
    {
        id: 5,
        title: 'Apex Analytics',
        category: 'Big Data',
        tech: ['D3.js', 'Go', 'GCP'],
        description: 'High-performance data visualization engine built for extreme scale, providing sub-second latency on billions of events.',
        image: '/illustrations/cloud_infrastructure_illustration_1769681118135.png',
        gradient: 'from-violet-600/20 to-indigo-500/10',
        icon: <Layers size={20} />,
        stats: '12M Tx/Sec'
    },
    {
        id: 6,
        title: 'Pulse Health',
        category: 'Bio-Telemetry',
        tech: ['React Native', 'Firebase'],
        description: 'Next-generation health monitoring suite with encrypted biometrics and real-time emergency dispatch integration.',
        image: '/illustrations/native_engineering_illustration_1769681095829.png',
        gradient: 'from-sky-600/20 to-blue-500/10',
        icon: <Globe size={20} />,
        stats: 'M2M Sync'
    }
]

/**
 * Portfolio Card Component
 * Optimized Visibility & Interaction.
 */
const PortfolioCard = ({ p, index, onClick, cardsRef }) => {
    const cardRef = useRef(null)
    const glowRef = useRef(null)

    const handleMouseMove = (e) => {
        const { left, top, width, height } = cardRef.current.getBoundingClientRect()
        const x = e.clientX - left
        const y = e.clientY - top
        const centerX = width / 2
        const centerY = height / 2
        const rotateX = (y - centerY) / 25
        const rotateY = (centerX - x) / 25

        gsap.to(cardRef.current, {
            rotateX,
            rotateY,
            duration: 0.5,
            ease: "power2.out",
            transformPerspective: 1200
        })

        gsap.to(glowRef.current, {
            css: { '--x': `${x}px`, '--y': `${y}px` },
            duration: 0.1,
            opacity: 1
        })
    }

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)"
        })
        gsap.to(glowRef.current, {
            opacity: 0,
            duration: 0.5
        })
    }

    return (
        <div
            ref={el => {
                cardRef.current = el
                cardsRef.current[index] = el
            }}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative group neon-card rounded-[2rem] overflow-hidden cursor-pointer aspect-square sm:aspect-video lg:aspect-[4/3] transition-all duration-500 shadow-2xl"
        >
            {/* Immersive Background Visual */}
            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} mix-blend-overlay`} />
                <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all duration-700" />
                <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>

            {/* Hardware Brackets */}
            <div className="absolute inset-4 z-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors duration-500 rounded-tl-xl" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/5 rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/5 rounded-bl-xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors duration-500 rounded-br-xl" />

                <div className="absolute inset-x-0 h-[1px] bg-primary/20 top-0 group-hover:top-full transition-all duration-[4000ms] ease-linear opacity-0 group-hover:opacity-100" />
            </div>

            {/* Content Overlay - ALWAYS VISIBLE TEXT */}
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-2xl glass-premium flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
                        {p.icon}
                    </div>
                    <div className="text-right">
                        <div className="text-[7px] font-orbitron font-black text-primary uppercase tracking-[0.2em] mb-1">Status</div>
                        <div className="text-[10px] font-orbitron font-bold text-foreground">{p.stats}</div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)] animate-pulse" />
                            <span className="text-[10px] font-orbitron font-black text-primary uppercase tracking-[0.3em] drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">{p.category}</span>
                        </div>
                        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-orbitron font-black text-foreground tracking-tighter uppercase leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] group-hover:text-primary transition-colors duration-300">
                            {p.title}
                        </h4>
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                        <div className="flex -space-x-3">
                            {p.tech.map((t, i) => (
                                <div key={i} className="w-9 h-9 rounded-xl glass-premium border border-white/10 flex items-center justify-center text-[8px] font-orbitron font-black text-white/50 group-hover:text-white group-hover:border-primary/30 transition-all duration-500 shadow-lg">
                                    {t.charAt(0)}
                                </div>
                            ))}
                        </div>
                        <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-primary/40 transition-colors duration-500" />
                        <div className="flex items-center gap-3 text-[10px] font-orbitron font-black text-primary uppercase tracking-[0.3em] group-hover:translate-x-0 translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            Expand <ArrowUpRight size={16} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Interactive Glow Follower */}
            <div
                ref={glowRef}
                className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 z-10"
                style={{
                    background: 'radial-gradient(circle 250px at var(--x) var(--y), rgba(99, 102, 241, 0.12), transparent 80%)'
                }}
            />
        </div>
    )
}

const Portfolio = () => {
    const sectionRef = useRef(null)
    const cardsRef = useRef([])
    const [selectedProject, setSelectedProject] = useState(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current.filter(Boolean)
            if (cards.length === 0) return

            gsap.set(cards, { y: 60, opacity: 0 })

            gsap.to(cards, {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    once: true,
                    toggleActions: "play none none none"
                }
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section id="portfolio" ref={sectionRef} className="py-12 bg-background relative overflow-hidden border-t border-white/5">

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-[10px] sm:text-xs font-orbitron text-primary uppercase tracking-[0.6em] mb-6 flex items-center gap-4"
                        >
                            <div className="h-[1px] w-8 bg-primary" /> Global Portfolio
                        </motion.div>
                        <h3 className="text-4xl sm:text-7xl md:text-8xl font-orbitron font-black text-foreground leading-[0.85] tracking-tighter uppercase italic">
                            Digital <br />
                            <span className="text-gradient">Logic.</span>
                        </h3>
                    </div>
                    <div className="lg:mb-4 lg:text-right">
                        <p className="text-sm sm:text-base font-medium text-muted max-w-sm mb-8 leading-relaxed lg:ml-auto">
                            Transforming complex business problems into high-performance digital ecosystems. Calculated. Scalable. Precise.
                        </p>
                        <button className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-orbitron font-black text-[10px] uppercase tracking-[0.4em] text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all shadow-2xl active:scale-95">
                            Lab Manifest
                        </button>
                    </div>
                </div>

                {/* Master Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <PortfolioCard
                            key={p.id}
                            p={p}
                            index={i}
                            onClick={() => setSelectedProject(p)}
                            cardsRef={cardsRef}
                        />
                    ))}
                </div>

            </div>

            {/* Premium Project Modal - Fixed Viewport Positioning */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 overflow-hidden"
                    >
                        <div
                            className="absolute inset-0 bg-background/95 backdrop-blur-3xl"
                            onClick={() => setSelectedProject(null)}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 40 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="relative w-full max-w-6xl bg-background rounded-[3.5rem] border border-white/10 overflow-hidden shadow-[0_0_150px_rgba(0,0,0,1)] flex flex-col lg:flex-row max-h-[95vh] z-10"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-8 right-8 w-14 h-14 rounded-full glass-premium flex items-center justify-center text-foreground hover:text-primary transition-all z-20 hover:scale-110 active:scale-90"
                            >
                                <X size={28} />
                            </button>

                            <div className="lg:w-[55%] relative bg-background/50 flex items-center justify-center overflow-hidden h-[300px] sm:h-[400px] lg:h-auto border-b lg:border-b-0 lg:border-r border-white/5">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover opacity-20"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent hidden lg:block" />
                                <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-24">
                                    <div className={`w-full h-full rounded-[3rem] bg-gradient-to-br ${selectedProject.gradient} blur-[120px] opacity-30 absolute animate-pulse`} />
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                                    />
                                </div>
                            </div>

                            <div className="lg:w-[45%] p-8 sm:p-16 overflow-y-auto no-scrollbar bg-background">
                                <div className="space-y-10">
                                    <div className="space-y-4">
                                        <div className="text-[10px] sm:text-xs font-orbitron font-black text-primary uppercase tracking-[0.6em] flex items-center gap-4">
                                            <div className="w-12 h-[1px] bg-primary/40" />
                                            {selectedProject.category}
                                        </div>
                                        <h2 className="text-4xl sm:text-6xl font-orbitron font-black text-foreground tracking-tighter uppercase leading-[0.9]">
                                            {selectedProject.title}
                                        </h2>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="text-[10px] font-orbitron font-black text-primary uppercase tracking-[0.3em] opacity-80">The Architecture</div>
                                        <p className="text-base sm:text-xl text-muted font-medium leading-relaxed font-inter">
                                            {selectedProject.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                                        <div className="space-y-4">
                                            <div className="text-[10px] font-orbitron font-black text-primary uppercase tracking-[0.3em] opacity-60">Logic Port</div>
                                            <div className="flex flex-col gap-3">
                                                {selectedProject.tech.map(t => (
                                                    <div key={t} className="flex items-center gap-4 text-[10px] sm:text-xs font-orbitron font-bold text-foreground group">
                                                        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(99,102,241,0.5)] group-hover:scale-125 transition-transform" />
                                                        {t}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="text-[10px] font-orbitron font-black text-primary uppercase tracking-[0.3em] opacity-60">System Core</div>
                                            <div className="text-xl sm:text-3xl font-orbitron font-black text-gradient uppercase italic tracking-tighter">{selectedProject.stats}</div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4 pt-4 sm:pt-6">
                                        <button className="w-full py-5 sm:py-6 bg-primary text-white rounded-2xl font-orbitron font-black text-[10px] sm:text-[12px] uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:brightness-125 active:scale-[0.98] transition-all shadow-[0_20px_40px_-10px_rgba(99,102,241,0.4)]">
                                            Launch System <ExternalLink size={18} />
                                        </button>
                                        <button className="w-full py-5 sm:py-6 glass-premium text-foreground border border-white/5 rounded-2xl font-orbitron font-black text-[10px] sm:text-[12px] uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-white/5 active:scale-[0.98] transition-all">
                                            Source Bridge <GithubIcon size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Portfolio
