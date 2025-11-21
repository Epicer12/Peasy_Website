import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-32 bg-gradient-to-b from-v3-navy to-black relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-v3-cyan/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                        Be the first to know when Peasy launches.
                    </h2>

                    <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto mb-12">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-white/5 border border-white/10 rounded-none px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-v3-cyan transition-colors"
                        />
                        <button className="bg-v3-cyan text-v3-navy font-bold px-8 py-4 hover:bg-white transition-colors flex items-center justify-center gap-2">
                            Join Waitlist <ArrowRight size={18} />
                        </button>
                    </form>

                    <div className="flex flex-wrap justify-center gap-8 text-v3-gray text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-v3-cyan" />
                            <span>50,000+ parts database</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-v3-cyan" />
                            <span>98% scan accuracy</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-v3-cyan" />
                            <span>Built for gamers</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
