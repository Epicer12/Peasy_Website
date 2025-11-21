import React from 'react';

const HowItWorks = () => {
    const steps = [
        { id: "01", title: "Scan", desc: "Point your camera at any component." },
        { id: "02", title: "Analyze", desc: "Our AI identifies specs and compatibility." },
        { id: "03", title: "Guide", desc: "Follow precise AR overlays to assemble." },
        { id: "04", title: "Verify", desc: "Confirm successful installation instantly." }
    ];

    return (
        <section id="how-it-works" className="bg-v2-white py-24 border-t border-v2-black/5">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    <h2 className="text-4xl font-serif font-medium text-v2-black">
                        How it <span className="text-v2-red">Works</span>
                    </h2>
                    <p className="text-lg text-v2-black/60 leading-relaxed">
                        A seamless workflow designed to augment human capability with machine precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <div key={step.id} className="relative pt-8 border-t border-v2-black/10 hover:border-v2-red transition-colors group">
                            <span className="absolute top-0 left-0 -translate-y-1/2 bg-v2-white pr-4 font-mono text-xs text-v2-black/40 group-hover:text-v2-red transition-colors">
                                {step.id}
                            </span>
                            <h3 className="text-2xl font-medium text-v2-black mb-4">{step.title}</h3>
                            <p className="text-sm text-v2-black/60 leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
