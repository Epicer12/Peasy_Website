import { motion } from 'framer-motion';
import GlowingGridBackground from './GlowingGridBackground';

const Hero = () => {
    return (
        <section className="min-h-screen w-full bg-swiss-white pt-40 pb-20 px-4 md:px-8 relative overflow-hidden">
            <GlowingGridBackground variant="cyan" />

            {/* Corner Crosshairs (Micro-Interactions) */}
            <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-swiss-black" />
            <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-swiss-black" />
            <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-swiss-black" />
            <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-swiss-black" />

            <div className="swiss-grid h-full relative z-10">
                {/* Abstract Decorative Line - Moved behind text */}

                {/* Additional Horizontal Grid Lines */}

                {/* Section Label */}
                <div className="col-span-12 mb-8">
                    <span className="text-technical text-sm tracking-widest text-swiss-black">00 // START</span>
                </div>

                {/* Massive Headline */}
                <div className="col-span-12 md:col-span-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-massive text-swiss-black mb-8 relative z-10"
                    >
                        BUILD.<br />
                        UPGRADE.<br />
                        FIX.
                    </motion.h1>
                </div>

                {/* Subtext and CTA - Asymmetric Placement */}
                <div className="col-span-12 md:col-span-4 md:col-start-9 mt-12 md:mt-0 flex flex-col justify-end relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="border-t border-swiss-cyan pt-6 bg-swiss-white/80 backdrop-blur-sm"
                    >
                        <p className="text-xl md:text-2xl font-bold leading-tight mb-8 text-swiss-black">
                            The AI companion for your PC hardware journey.
                            Diagnose, verify, and build with confidence.
                        </p>

                        <div className="flex flex-col gap-2 items-start">
                            <a href="#waitlist" className="text-lg font-bold text-swiss-black hover:bg-swiss-cyan hover:text-swiss-white transition-colors px-1 -ml-1">
                                [ JOIN WAITLIST ]
                            </a>
                            <a href="#demo" className="text-lg font-bold text-swiss-black hover:bg-swiss-cyan hover:text-swiss-white transition-colors px-1 -ml-1">
                                [ WATCH DEMO ]
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
