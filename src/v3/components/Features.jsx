import React from 'react';
import { Scan, Zap, Box, Mic, Cpu, Thermometer } from 'lucide-react';

const features = [
    {
        title: "Smart Detection",
        desc: "Instantly identifies your case and motherboard.",
        icon: <Scan className="w-6 h-6 text-v3-navy" />,
        color: "bg-v3-cyan"
    },
    {
        title: "Compatibility",
        desc: "Ensures cooler and RAM fit perfectly.",
        icon: <Box className="w-6 h-6 text-white" />,
        color: "bg-purple-500"
    },
    {
        title: "Bottleneck Check",
        desc: "Visual analysis for GPU/CPU combos.",
        icon: <Zap className="w-6 h-6 text-white" />,
        color: "bg-pink-500"
    },
    {
        title: "Voice Guide",
        desc: "Step-by-step hands-free assembly.",
        icon: <Mic className="w-6 h-6 text-white" />,
        color: "bg-orange-500"
    },
    {
        title: "Thermal AI",
        desc: "Predicts airflow and thermal performance.",
        icon: <Thermometer className="w-6 h-6 text-white" />,
        color: "bg-red-500"
    },
    {
        title: "Part Picker",
        desc: "AI suggests the best parts for your budget.",
        icon: <Cpu className="w-6 h-6 text-v3-navy" />,
        color: "bg-green-400"
    }
];

const Features = () => {
    return (
        <section id="features" className="bg-v3-navy py-20 relative z-10">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
                        Everything you need.
                    </h2>
                    <p className="text-v3-gray max-w-2xl mx-auto">
                        Powerful tools to help you build your dream machine.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                        >
                            <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-sm text-v3-gray leading-relaxed opacity-80">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
