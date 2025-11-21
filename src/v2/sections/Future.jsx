import React from 'react';

const Future = () => {
    const phases = [
        {
            title: "Phase 1",
            subtitle: "Foundation",
            items: ["Core Recognition Engine", "Basic AR Overlays", "Community Beta"]
        },
        {
            title: "Phase 2",
            subtitle: "Expansion",
            items: ["Marketplace Integration", "Expert Verification", "Mobile App Launch"]
        },
        {
            title: "Phase 3",
            subtitle: "Ecosystem",
            items: ["Custom Hardware Kits", "Enterprise API", "Global Support"]
        }
    ];

    return (
        <section id="roadmap" className="bg-v2-white py-24 border-t border-v2-black/5">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-serif font-medium text-v2-black mb-16">
                    The <span className="text-v2-red">Roadmap</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {phases.map((phase, index) => (
                        <div key={index} className="relative pl-8 border-l border-v2-black/10">
                            <span className="absolute top-0 left-0 -translate-x-1/2 w-3 h-3 bg-v2-white border-2 border-v2-red rounded-full"></span>
                            <h3 className="text-xl font-medium text-v2-black mb-1">{phase.title}</h3>
                            <p className="text-v2-black/40 font-mono text-xs mb-6 uppercase tracking-widest">{phase.subtitle}</p>
                            <ul className="space-y-3">
                                {phase.items.map((item, i) => (
                                    <li key={i} className="text-sm text-v2-black/70">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Future;
