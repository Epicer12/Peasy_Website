import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Cpu, Box, Mic, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            id: "01",
            icon: <Camera size={32} />,
            title: "Scan",
            desc: "Point phone at your PC or parts. QuickScan identifies everything instantly."
        },
        {
            id: "02",
            icon: <Cpu size={32} />,
            title: "Analyze",
            desc: "AI finds bottlenecks and recommends the perfect upgrades for your budget."
        },
        {
            id: "03",
            icon: <Box size={32} />,
            title: "Visualize",
            desc: "See parts in AR. Check fitment, aesthetics, and thermal performance."
        },
        {
            id: "04",
            icon: <Mic size={32} />,
            title: "Build",
            desc: "Voice-guided assembly. Hands-free help when you're deep in the case."
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-[#111111] text-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                        How Peasy Works
                    </h2>
                    <p className="text-v3-gray text-xl max-w-2xl mx-auto">
                        From diagnosis to build, we guide you every step of the way.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center group">

                            {/* Arrow Connector (Desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 -right-1/2 w-full flex justify-center items-center z-0 opacity-20">
                                    <ArrowRight size={40} className="text-v3-gray" />
                                </div>
                            )}

                            {/* Step Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative z-10 flex flex-col items-center"
                            >
                                <div className="w-24 h-24 bg-v3-navy border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-2xl group-hover:border-v3-cyan/50 group-hover:shadow-v3-cyan/20 transition-all duration-500">
                                    <div className="text-v3-cyan group-hover:scale-110 transition-transform duration-500">
                                        {step.icon}
                                    </div>
                                </div>

                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-v3-cyan text-v3-navy font-bold rounded-full flex items-center justify-center text-sm shadow-lg">
                                    {step.id}
                                </div>

                                <h3 className="text-2xl font-bold mb-4 group-hover:text-v3-cyan transition-colors">{step.title}</h3>
                                <p className="text-v3-gray leading-relaxed text-sm md:text-base">
                                    {step.desc}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
