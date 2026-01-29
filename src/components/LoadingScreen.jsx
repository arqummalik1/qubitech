import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * LoadingScreen
 * Premium "Liquid Glass" entry sequence.
 */
const LoadingScreen = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer)
                    return 100
                }
                return prev + 1
            })
        }, 15)

        return () => clearInterval(timer)
    }, [])

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{
                    y: '-100%',
                    transition: { duration: 1.2, ease: [0.85, 0, 0.15, 1] }
                }}
                className="fixed inset-0 z-[9999] bg-[#020617] flex flex-col items-center justify-center p-10 overflow-hidden"
            >
                {/* Background Aura */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full animate-pulse" />
                </div>

                <div className="relative z-10 flex flex-col items-center">

                    {/* Brand Pre-loader */}
                    <div className="mb-12 flex items-center gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center font-orbitron font-black text-white text-3xl shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                            Q
                        </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-6">
                            <span className="font-orbitron font-black text-6xl md:text-8xl text-foreground tracking-tighter">
                                {progress}<span className="text-primary text-4xl">%</span>
                            </span>
                        </div>

                        <div className="w-64 md:w-80 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                className="h-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                            />
                        </div>

                        <div className="flex gap-4 font-orbitron text-[10px] text-primary font-bold uppercase tracking-[0.4em] opacity-60">
                            <span>Initializing Digital Ecosystem</span>
                        </div>
                    </div>
                </div>

                {/* Footer Meta */}
                <div className="absolute bottom-20 flex flex-col items-center gap-4 opacity-30">
                    <div className="flex gap-4 items-center font-orbitron text-[9px] font-black uppercase tracking-[0.5em] text-foreground">
                        <span>Production Build</span>
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>v2.0.26</span>
                    </div>
                </div>

                {/* Vertical Decorative Deck */}
                <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-white/5" />
                <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-white/5" />
            </motion.div>
        </AnimatePresence>
    )
}

export default LoadingScreen
