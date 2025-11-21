import React from 'react';
import { Scan, Layers, Mic, Zap, ShieldCheck, Cpu } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Scan className="h-6 w-6" />,
            title: "Optical Recognition",
            desc: "Neural networks identify hardware components in <100ms with precision."
        },
        {
            icon: <Layers className="h-6 w-6" />,
            title: "Spatial Computing",
            desc: "Real-time AR overlays for precise component placement and alignment."
        },
        {
            icon: <Mic className="h-6 w-6" />,
            title: "Audio Guidance",
            desc: "Hands-free assembly instructions via our advanced NLP engine."
        },
        {
            icon: <Zap className="h-6 w-6" />,
            title: "Diagnostic Core",
            desc: "Instant decoding of motherboard beep codes and LED signals."
        },
        {
            icon: <ShieldCheck className="h-6 w-6" />,
            title: "Error Prevention",
            desc: "Computer vision alerts for potential compatibility conflicts."
        },
        {
            icon: <Cpu className="h-6 w-6" />,
            title: "Performance Tuning",
            desc: "Automated airflow and thermal management suggestions."
        }
    ];

    return (
        <section id="features" className="bg-v2-white py-24 border-t border-v2-black/5">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-4xl font-serif font-medium text-v2-black mb-6">
                        The <span className="text-v2-red">Capabilities</span>
                    </h2>
                    <p className="text-lg text-v2-black/60 leading-relaxed">
                        Our stack bridges the gap between physical hardware and digital intelligence.
                        Built for precision, speed, and reliability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-v2-black/10 border border-v2-black/10">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-v2-white p-10 hover:bg-v2-gray-light/30 transition-colors group">
                            <div className="w-12 h-12 bg-v2-red/10 rounded-full flex items-center justify-center text-v2-red mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-medium text-v2-black mb-3">{feature.title}</h3>
                            <p className="text-v2-black/60 leading-relaxed text-sm">
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
