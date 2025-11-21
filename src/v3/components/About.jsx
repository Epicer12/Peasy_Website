import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-32 bg-gradient-to-b from-v3-navy to-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                        We're <span className="text-v3-cyan">CS-27</span> from Informatics Institute of Technology.
                    </h2>
                    <p className="text-xl md:text-2xl text-v3-gray leading-relaxed font-light">
                        Building the <span className="text-white font-medium">PC PartPicker killer</span> with actual AI superpowers.
                        <br /><br />
                        We got tired of watching friends brick their PCs at 3 AM. So we built the tool we wished we had when we started.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
