import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-v3-navy pt-20">

            {/* Massive Kinetic Background Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden opacity-20">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        style={{ y }}
                        animate={{ x: i % 2 === 0 ? ["0%", "-10%"] : ["-10%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear", repeatType: "mirror" }}
                        className="whitespace-nowrap text-[16vw] font-black text-v3-white/5 leading-none tracking-tighter"
                    >
                        PEASY PEASY PEASY PEASY
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 text-white mix-blend-difference">
                        Build PC's <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-v3-cyan to-white">
                            Like a Pro.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-v3-gray mb-12 max-w-4xl mx-auto leading-relaxed">
                        The world's first AI companion that sees what you see. <br />
                        Diagnose, assemble, and optimize with voice guidance.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <button className="px-10 py-5 bg-v3-cyan text-v3-navy font-bold text-lg hover:scale-105 transition-transform duration-300 flex items-center gap-3 rounded-full">
                            Join Waitlist
                            <ArrowRight size={20} />
                        </button>
                        <button className="px-10 py-5 bg-transparent border border-v3-white/20 text-white font-bold text-lg hover:bg-v3-white/5 transition-all duration-300 flex items-center gap-3 rounded-full backdrop-blur-sm">
                            <Play size={20} fill="currentColor" />
                            Watch Demo
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Floating Abstract Elements */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-96 h-96 bg-v3-cyan/10 rounded-full blur-[100px] pointer-events-none"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"
            />
        </section>
    );
};

export default Hero;
