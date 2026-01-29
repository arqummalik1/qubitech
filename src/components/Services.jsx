import React, { useEffect, useRef } from 'react'
import { Globe, Smartphone, Code, Cpu, MessageSquare, ShieldCheck, Database, Layout, ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'

const services = [
    {
        icon: <Globe size={22} />,
        title: "Web Development",
        description: "High-end websites and powerful web applications built for extreme scale.",
        gradient: "from-blue-500 to-cyan-400",
        image: "/illustrations/systems_architecture_illustration_1769681075956.png"
    },
    {
        icon: <Smartphone size={22} />,
        title: "Mobile Apps",
        description: "Modern iPhone and Android apps with smooth, premium experiences.",
        gradient: "from-indigo-500 to-purple-400",
        image: "/illustrations/native_engineering_illustration_1769681095829.png"
    },
    {
        icon: <Cpu size={22} />,
        title: "AI Solutions",
        description: "Smart AI systems to automate your business and boost efficiency.",
        gradient: "from-fuchsia-500 to-pink-400",
        image: "/illustrations/ai_neural_logic_illustration_1769681144070.png"
    },
    {
        icon: <MessageSquare size={22} />,
        title: "Smart Chatbots",
        description: "Intelligent AI chatbots that engage your customers 24/7.",
        gradient: "from-amber-500 to-orange-400",
        image: "/illustrations/ai_neural_logic_illustration_1769681144070.png"
    },
    {
        icon: <Code size={22} />,
        title: "Custom Software",
        description: "Bespoke software solutions tailored to your unique business needs.",
        gradient: "from-emerald-500 to-teal-400",
        image: "/illustrations/product_engineering_illustration_1769681168138.png"
    },
    {
        icon: <Layout size={22} />,
        title: "UI/UX Design",
        description: "Beautiful, easy-to-use designs that make your product stand out.",
        gradient: "from-rose-500 to-red-400",
        image: "/illustrations/product_engineering_illustration_1769681168138.png"
    },
    {
        icon: <ShieldCheck size={22} />,
        title: "Cyber Security",
        description: "Keeping your data safe with world-class security protocols.",
        gradient: "from-cyan-500 to-blue-400",
        image: "/illustrations/technical_audits_illustration_1769681193383.png"
    },
    {
        icon: <Database size={22} />,
        title: "Cloud & Data",
        description: "Fast, reliable cloud hosting and smart data management.",
        gradient: "from-violet-500 to-indigo-400",
        image: "/illustrations/cloud_infrastructure_illustration_1769681118135.png"
    }
]

/**
 * Services Section
 * Vibrant Modern Redesign.
 * Colorful icons, compact cards, and perfect visibility.
 */
const Services = () => {
    const sectionRef = useRef(null)
    const cardsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current.filter(Boolean)
            if (cards.length === 0) return

            gsap.set(cards, { y: 30, opacity: 0 })

            gsap.to(cards, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.05,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 90%",
                    once: true,
                    toggleActions: "play none none none"
                }
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="services" ref={sectionRef} className="py-10 bg-background relative overflow-hidden">

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Section Header */}
                <div className="max-w-4xl mb-16 mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-[10px] font-orbitron text-primary uppercase tracking-[0.4em] mb-4"
                    >
                        Core Expertise
                    </motion.h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-black text-foreground leading-[1] tracking-tighter uppercase">
                        Future-Proof <br />
                        <span className="text-gradient font-bold italic">Engineering.</span>
                    </h3>
                </div>

                {/* Services Grid - Compact & Vibrant */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="glass-premium group cursor-pointer relative overflow-hidden rounded-[1.5rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col min-h-[320px] border border-white/5 active:scale-95"
                        >
                            {/* Backdrop Subtle Pattern */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-[1.5s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />
                            </div>

                            <div className="relative z-10 p-8 flex flex-col h-full">
                                {/* Vibrant Icon Wrapper */}
                                <div className={`mb-6 w-12 h-12 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg shadow-black/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[10deg]`}>
                                    {service.icon}
                                </div>

                                {/* Content */}
                                <div className="space-y-3">
                                    <h4 className="text-lg font-orbitron font-black text-foreground tracking-tight uppercase group-hover:text-primary transition-colors leading-tight">
                                        {service.title}
                                    </h4>
                                    <p className="text-[11px] leading-relaxed text-muted font-medium">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Action Arrow */}
                                <div className="mt-auto flex items-center justify-between text-[8px] font-orbitron font-black uppercase tracking-[0.2em] text-primary/60 group-hover:text-primary transition-all">
                                    <span>Learn More</span>
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-45">
                                        <ArrowUpRight size={14} />
                                    </div>
                                </div>
                            </div>

                            {/* Border Glow Accent */}
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
