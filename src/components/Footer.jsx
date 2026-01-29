import React from 'react'
import { motion } from 'framer-motion'
import { Github, Youtube, Linkedin, Mail, ArrowUp, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * Footer
 * Premium "Liquid Glass" footer component.
 * Optimized for mobile responsiveness.
 */
const Footer = () => {
    const currentYear = new Date().getFullYear()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-background pt-20 sm:pt-32 pb-12 relative overflow-hidden">

            {/* Mesh Background Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Main Footer Block */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 sm:gap-20 items-start mb-20 sm:mb-32">

                    {/* Brand Info */}
                    <div className="lg:col-span-2 space-y-8 sm:space-y-12 text-center sm:text-left">
                        <Link to="/" className="flex items-center justify-center sm:justify-start gap-4 group">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center font-orbitron font-black text-white shadow-lg">
                                Q
                            </div>
                            <span className="font-orbitron font-black text-2xl tracking-tighter text-foreground">
                                QUBI<span className="text-primary">TECH</span>
                            </span>
                        </Link>
                        <p className="text-base sm:text-lg md:text-xl font-medium text-muted max-w-md mx-auto sm:mx-0 leading-relaxed">
                            Engineering future-proof digital architectures for visionaries. Based in Jammu — shipping worldwide.
                        </p>
                        <div className="flex justify-center sm:justify-start gap-4">
                            {[Github, Youtube, Linkedin, Mail].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl glass-premium flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all duration-500 shadow-xl"
                                >
                                    <Icon size={20} sm:size={22} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-8 sm:space-y-10 text-center sm:text-left">
                        <h4 className="text-[9px] sm:text-[10px] font-orbitron font-black uppercase tracking-[0.4em] text-primary">Explorer</h4>
                        <ul className="space-y-4 sm:space-y-6">
                            {[
                                { name: 'Services', href: '/#services' },
                                { name: 'Portfolio', href: '/portfolio' },
                                { name: 'About', href: '/#about' },
                                { name: 'Contact', href: '/#contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.href} className="text-base sm:text-lg font-orbitron font-bold text-foreground/70 hover:text-primary transition-colors tracking-tight flex items-center justify-center sm:justify-start gap-2 group">
                                        <ArrowRight size={14} className="hidden sm:block opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-8 sm:space-y-10 text-center sm:text-left">
                        <h4 className="text-[9px] sm:text-[10px] font-orbitron font-black uppercase tracking-[0.4em] text-secondary">Legal Logic</h4>
                        <ul className="space-y-4 sm:space-y-6">
                            {['Privacy Protocol', 'Security Policy', 'Terms of Pulse'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-base sm:text-lg font-orbitron font-bold text-muted/30 hover:text-primary transition-colors tracking-tight">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-orbitron font-bold text-[10px] text-muted uppercase tracking-[0.3em]">
                        © 2026 Qubitech — Digital Excellence
                    </p>
                    <button onClick={scrollToTop} className="font-orbitron font-bold text-[9px] text-primary uppercase tracking-[0.2em] hover:text-white transition-colors">
                        Return to Origin
                    </button>
                </div>

            </div>
        </footer>
    )
}

export default Footer
