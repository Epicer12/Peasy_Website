import React from 'react';
import { Smartphone, Cpu, Box, Mic } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <Smartphone className="h-8 w-8 text-white" />,
            title: "1. Point & Scan",
            desc: "Point your camera at any PC part. QuickScan instantly identifies the model and specs."
        },
        {
            icon: <Cpu className="h-8 w-8 text-white" />,
            title: "2. AI Analysis",
            desc: "Peasy analyzes your build for bottlenecks, compatibility issues, and missing parts."
        },
        {
            icon: <Box className="h-8 w-8 text-white" />,
            title: "3. AR Preview",
            desc: "See exactly how your new GPU fits in your case with accurate Augmented Reality."
        },
        {
            icon: <Mic className="h-8 w-8 text-white" />,
            title: "4. Voice Guide",
            desc: "Follow step-by-step voice instructions to assemble your PC without looking at a manual."
        }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How It Works</h2>
                    <p className="text-slate-400">From box of parts to booting up, in 4 simple steps.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className="absolute inset-0 bg-cyan-500/20 rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
                            <div className="relative bg-slate-800 p-8 rounded-xl border border-slate-700 h-full">
                                <div className="h-14 w-14 bg-cyan-500 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-slate-400">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
