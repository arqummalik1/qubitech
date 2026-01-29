import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

/**
 * Navbar
 * Premium "Liquid Glass" navigation component.
 * Dynamic shrinking effect to save screen space on scroll.
 */
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isDark, setIsDark] = useState(true)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)

        const savedTheme = localStorage.getItem('theme') || 'dark'
        setIsDark(savedTheme === 'dark')
        document.documentElement.classList.toggle('light', savedTheme === 'light')

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleTheme = () => {
        const newDark = !isDark
        setIsDark(newDark)
        document.documentElement.classList.toggle('light', !newDark)
        localStorage.setItem('theme', newDark ? 'dark' : 'light')
    }

    const links = [
        { name: 'Services', href: '/#services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'About', href: '/#about' },
        { name: 'Contact', href: '/#contact' }
    ]

    return (
        <nav className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${scrolled ? 'py-2 px-6' : 'py-6 px-6 sm:px-12'}`}>
            <div className={`container mx-auto max-w-7xl flex justify-between items-center transition-all duration-500 rounded-2xl ${scrolled
                ? 'glass-header shadow-xl px-6 py-2 scale-[0.95] border-primary/20'
                : 'bg-transparent px-8 py-4'
                }`}>

                {/* Brand Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className={`bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center font-orbitron font-black text-white shadow-lg group-hover:rotate-12 transition-all duration-500 ${scrolled ? 'w-8 h-8 text-sm' : 'w-10 h-10 text-lg'
                        }`}>
                        Q
                    </div>
                    <span className={`font-orbitron font-black tracking-tighter text-foreground transition-all duration-500 ${scrolled ? 'text-lg' : 'text-2xl'
                        }`}>
                        QUBIT<span className="text-primary">.TECH</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {links.map(link => (
                            <li key={link.name}>
                                <Link
                                    to={link.href}
                                    className={`relative font-orbitron font-bold uppercase tracking-[0.2em] text-foreground/60 hover:text-primary transition-all group ${scrolled ? 'text-[9px]' : 'text-[11px]'
                                        }`}
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full ${location.pathname === link.href ? 'w-full' : ''}`} />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-6 border-l border-foreground/10 pl-8">
                        <button
                            onClick={toggleTheme}
                            className={`rounded-xl glass-premium flex items-center justify-center text-foreground/60 hover:text-primary transition-all hover:rotate-45 ${scrolled ? 'w-8 h-8' : 'w-10 h-10'
                                }`}
                        >
                            {isDark ? <Sun size={scrolled ? 14 : 18} /> : <Moon size={scrolled ? 14 : 18} />}
                        </button>

                        <Link
                            to="/#contact"
                            className={`group bg-foreground text-background font-orbitron font-bold rounded-xl uppercase tracking-[0.15em] transition-all hover:bg-primary hover:text-white flex items-center gap-2 ${scrolled ? 'px-6 py-2 text-[8px]' : 'px-8 py-3 text-[10px]'
                                }`}
                        >
                            Get Quote <ArrowRight size={scrolled ? 12 : 14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden flex items-center gap-3">
                    <button onClick={() => setIsOpen(!isOpen)} className={`rounded-xl glass-premium flex items-center justify-center text-foreground transition-all ${scrolled ? 'w-10 h-10' : 'w-12 h-12'
                        }`}>
                        {isOpen ? <X size={scrolled ? 20 : 24} /> : <Menu size={scrolled ? 20 : 24} />}
                    </button>
                </div>
            </div>

            {/* Premium Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                        className="fixed inset-0 bg-background/95 backdrop-blur-3xl z-[110] flex flex-col items-center justify-center gap-12"
                    >
                        <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 w-14 h-14 rounded-2xl glass-premium flex items-center justify-center text-foreground">
                            <X size={32} />
                        </button>

                        <div className="flex flex-col gap-8 text-center">
                            {links.map((link, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    key={link.name}
                                >
                                    <Link
                                        to={link.href}
                                        className="text-4xl sm:text-5xl font-orbitron font-black text-foreground hover:text-primary transition-colors uppercase tracking-tighter"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link
                                to="/#contact"
                                className="px-12 py-5 bg-primary text-white font-orbitron font-black text-lg rounded-3xl shadow-2xl tracking-widest inline-block"
                                onClick={() => setIsOpen(false)}
                            >
                                START PROJECT
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
