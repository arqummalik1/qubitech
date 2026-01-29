import React, { useEffect, useRef, useState } from 'react'
import { Star, Quote, CheckCircle2, ThumbsUp, MoreVertical, MessageSquare } from 'lucide-react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'

const testimonials = [
    {
        name: "Arjun Mehta",
        role: "CTO, CloudScale",
        content: "Outstanding AI integration. They didn't just build a tool; they redefined our entire backend logic, shaving weeks off our production timeline with stunning efficiency.",
        rating: 5,
        date: "Oct 24",
        avatar: "AM",
        color: "from-blue-500/20 to-cyan-500/20",
        border: "border-blue-500/30"
    },
    {
        name: "Priya Sharma",
        role: "Head, TechMumbai",
        content: "The 'Liquid Glass' aesthetic is truly unparalleled. Our user engagement metrics spiked by 40% after the redesign. They create premium digital experiences that sell.",
        rating: 5,
        date: "Nov 12",
        avatar: "PS",
        color: "from-purple-500/20 to-pink-500/20",
        border: "border-purple-500/30"
    },
    {
        name: "Mark Thompson",
        role: "Founder, Apex",
        content: "Exceptional standards from start to finish. Their 'Binary Brilliance' philosophy is evident in the clean codebase and the rapid, highly professional delivery cycle.",
        rating: 5,
        date: "Dec 05",
        avatar: "MT",
        color: "from-emerald-500/20 to-teal-500/20",
        border: "border-emerald-500/30"
    },
    {
        name: "Alex Rivera",
        role: "CEO, Nexa",
        content: "Highly recommended for any serious venture. They solved our complex cloud scalability issues in record time while maintaining a sophisticated design language.",
        rating: 5,
        date: "Jan 10",
        avatar: "AR",
        color: "from-indigo-500/20 to-blue-500/20",
        border: "border-indigo-500/30"
    },
    {
        name: "Sophie Laurent",
        role: "Founder, Luxe",
        content: "A transformative partner for our brand. They didn't just meet our requirements; they elevated our entire identity through technical and aesthetic excellence.",
        rating: 5,
        date: "Jan 25",
        avatar: "SL",
        color: "from-rose-500/20 to-orange-500/20",
        border: "border-rose-500/30"
    }
]

/**
 * Reviews Section - Boutique Horizontal Row
 * Features: 5 Compact Colourful Cards in one row.
 * Optimized for high-density professional presentation.
 */
const Reviews = () => {
    const sectionRef = useRef(null)
    const cardsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(cardsRef.current, { opacity: 0, scale: 0.9, y: 20 })

            gsap.to(cardsRef.current, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    once: true
                }
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section id="reviews" ref={sectionRef} className="py-10 bg-background relative overflow-hidden border-t border-white/5">

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Section Header - More Compact */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-[9px] font-orbitron text-primary uppercase tracking-[0.4em] mb-3 flex items-center gap-3"
                        >
                            <div className="h-[1px] w-4 bg-primary" /> Verifications
                        </motion.h2>
                        <h3 className="text-3xl md:text-5xl font-orbitron font-black text-foreground tracking-tighter uppercase leading-[0.9]">
                            Trusted <span className="text-gradient italic">Results.</span>
                        </h3>
                    </div>
                </div>

                {/* Reviews Grid - 5 Cards in a Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            ref={el => cardsRef.current[i] = el}
                            className={`relative neon-card p-5 rounded-[1.5rem] flex flex-col gap-4 group transition-all duration-500 hover:shadow-2xl overflow-hidden border-t-0 bg-gradient-to-br ${t.color}`}
                        >
                            {/* Colorful Top Accent */}
                            <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${t.color.replace('/20', '')} opacity-40`} />

                            {/* User Header */}
                            <div className="flex items-center gap-3 relative z-10">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-orbitron font-black text-[10px] border transition-all duration-500 bg-background/40 ${t.border}`}>
                                    {t.avatar}
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-[11px] font-bold text-foreground truncate">{t.name}</h4>
                                    <p className="text-[8px] text-muted font-medium truncate uppercase tracking-tighter">{t.role}</p>
                                </div>
                            </div>

                            {/* Stars & Content */}
                            <div className="space-y-2 relative z-10">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, star) => (
                                        <Star key={star} size={9} className="fill-[#FACC15] text-[#FACC15]" />
                                    ))}
                                </div>
                                <p className="text-[11px] text-foreground/90 leading-snug font-inter italic line-clamp-3">
                                    "{t.content}"
                                </p>
                            </div>

                            {/* Bottom Badge */}
                            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
                                <div className="flex items-center gap-1 text-[7px] font-black text-emerald-500 uppercase tracking-widest">
                                    <CheckCircle2 size={8} /> Verified
                                </div>
                                <div className="text-[7px] text-muted font-bold">{t.date}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Trust Line */}
                <div className="mt-12 flex items-center justify-center gap-8 opacity-40 hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-2">
                        <Star className="fill-[#FACC15] text-[#FACC15]" size={12} />
                        <span className="text-[9px] font-orbitron font-black text-foreground uppercase tracking-widest">4.9 Play Store</span>
                    </div>
                    <div className="w-[1px] h-4 bg-white/10" />
                    <div className="flex items-center gap-2">
                        <MessageSquare size={12} className="text-primary" />
                        <span className="text-[9px] font-orbitron font-black text-foreground uppercase tracking-widest">5k+ Successes</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews
