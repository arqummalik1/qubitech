import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Youtube, Github, Linkedin, CheckCircle, Loader2, ArrowRight, Sparkles } from 'lucide-react'

/**
 * Contact Section
 * Boutique Premium Redesign.
 * Compact, centered, and high-fidelity glassmorphism.
 */
const Contact = () => {
    const [status, setStatus] = useState('idle')
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [focusedField, setFocusedField] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const res = await fetch('https://formspree.io/f/mqaeoboa', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, _to: 'arqummalik1@gmail.com' })
            })

            if (res.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
                setTimeout(() => setStatus('idle'), 5000)
            } else {
                setStatus('error')
                setTimeout(() => setStatus('idle'), 3000)
            }
        } catch (err) {
            setStatus('error')
            setTimeout(() => setStatus('idle'), 3000)
        }
    }

    return (
        <section id="contact" className="py-12 sm:pb-20 bg-background relative overflow-hidden border-t border-white/5">

            {/* Ambient Premium Glows */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 opacity-50" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 opacity-30" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col items-start">

                    {/* Header - Left Aligned & Modern */}
                    <div className="text-left mb-16 space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium text-[10px] font-orbitron text-primary uppercase tracking-[0.3em]"
                        >
                            <Sparkles size={12} className="animate-pulse" /> Available for New Projects
                        </motion.div>
                        <h3 className="text-4xl sm:text-6xl font-orbitron font-black text-foreground tracking-tighter uppercase leading-[1]">
                            Let's Build <br />
                            <span className="text-gradient font-bold italic lowercase">the future.</span>
                        </h3>
                    </div>

                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mt-8">

                        {/* Left Column: Boutique Form */}
                        <div className="glass-premium p-8 sm:p-12 rounded-[2.5rem] border border-white/5 relative group flex flex-col justify-center h-full">
                            {/* Online Indicator */}
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-0 p-6 sm:p-10 pointer-events-none z-20"
                            >
                                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    <span className="text-[9px] font-orbitron font-bold text-green-400 uppercase tracking-widest hidden sm:inline-block">
                                        Online Now
                                    </span>
                                </div>
                            </motion.div>

                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center py-12 text-center"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                            <CheckCircle size={40} className="text-primary" />
                                        </div>
                                        <h4 className="text-2xl font-orbitron font-black text-foreground mb-2">INITIATED!</h4>
                                        <p className="text-[10px] text-muted font-orbitron uppercase tracking-widest">Awaiting Command Response (24h)</p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        className="space-y-6 relative z-10"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                                            {/* Name Input */}
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onFocus={() => setFocusedField('name')}
                                                    onBlur={() => setFocusedField(null)}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/20 rounded-xl py-5 px-6 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-inter font-medium text-base text-foreground placeholder:text-muted/20"
                                                    id="name"
                                                    placeholder="John Doe"
                                                />
                                                <label
                                                    htmlFor="name"
                                                    className="absolute -top-7 left-0 text-[11px] font-orbitron font-bold text-primary uppercase tracking-widest"
                                                >
                                                    Ident Name
                                                </label>
                                            </div>

                                            {/* Email Input */}
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onFocus={() => setFocusedField('email')}
                                                    onBlur={() => setFocusedField(null)}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/20 rounded-xl py-5 px-6 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-inter font-medium text-base text-foreground placeholder:text-muted/20"
                                                    id="email"
                                                    placeholder="john@example.com"
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className="absolute -top-7 left-0 text-[11px] font-orbitron font-bold text-primary uppercase tracking-widest"
                                                >
                                                    Secure Mail
                                                </label>
                                            </div>
                                        </div>

                                        {/* Message Textarea */}
                                        <div className="relative">
                                            <textarea
                                                required
                                                rows="3"
                                                value={formData.message}
                                                onFocus={() => setFocusedField('message')}
                                                onBlur={() => setFocusedField(null)}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full bg-white/5 border border-white/20 rounded-xl py-5 px-6 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-inter font-medium text-base text-foreground placeholder:text-muted/20 resize-none"
                                                id="message"
                                                placeholder="Tell us about your vision..."
                                            ></textarea>
                                            <label
                                                htmlFor="message"
                                                className="absolute -top-7 left-0 text-[11px] font-orbitron font-bold text-primary uppercase tracking-widest"
                                            >
                                                Project Brief
                                            </label>
                                        </div>

                                        {/* Premium Submit Button */}
                                        <motion.button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="relative w-full py-6 bg-gradient-to-r from-primary to-secondary text-white font-orbitron font-black uppercase tracking-[0.2em] text-sm rounded-xl shadow-2xl hover:shadow-primary/40 active:scale-[0.98] transition-all flex items-center justify-center gap-3 overflow-hidden group/btn my-4"
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                {status === 'loading' ? (
                                                    <>Processing... <Loader2 className="animate-spin" size={18} /></>
                                                ) : (
                                                    <>Launch Inquiry <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" /></>
                                                )}
                                            </span>
                                            {/* Button Glow Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-[1s]" />
                                        </motion.button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Right Column: Map & Info */}
                        <div className="flex flex-col gap-6 h-full">
                            {/* Map Container */}
                            <div className="flex-[1.5] w-full rounded-[2.5rem] overflow-hidden border border-white/5 glass-premium relative min-h-[300px] grayscale invert contrast-125 brightness-75 hover:grayscale-0 hover:invert-0 hover:contrast-100 hover:brightness-100 transition-all duration-700">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.892789857945!2d74.8723!3d32.7266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e84c0c1cf9e2b%3A0x3300445520e03254!2sJammu!5e0!3m2!1sen!2sin!4v1709200000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                            {/* Info & Socials Group - Tightly Packed */}
                            <div className="flex-1 grid grid-cols-2 gap-4">
                                {[
                                    { icon: <Mail size={20} />, label: 'Email', val: 'hello@qubitech.com' },
                                    { icon: <MapPin size={20} />, label: 'Base', val: 'Jammu, IN' }
                                ].map((item, i) => (
                                    <div key={i} className="glass-premium p-6 rounded-[2rem] flex flex-col justify-center gap-3 hover:bg-white/5 transition-colors group">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div className="text-[9px] font-orbitron font-bold text-muted uppercase tracking-widest mb-1">{item.label}</div>
                                            <div className="text-xs sm:text-sm font-bold text-foreground truncate">{item.val}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
