import React from 'react';
import { Rocket, Monitor, Wrench, Globe } from 'lucide-react';

const Future = () => {
    const items = [
        {
            icon: <Wrench className="h-6 w-6" />,
            title: "Peasy Pro",
            desc: "Advanced tools for technicians ($19/mo)."
        },
        {
            icon: <Monitor className="h-6 w-6" />,
            title: "Web 3D Builder",
            desc: "Full desktop browser support with 3D builder."
        },
        {
            icon: <Globe className="h-6 w-6" />,
            title: "White Label",
            desc: "Custom solutions for local repair shops."
        },
        {
            icon: <Rocket className="h-6 w-6" />,
            title: "Marketplace",
            desc: "Buy & sell used parts with AI valuation."
        }
    ];

    return (
        <section className="py-20 bg-navy-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">This Is Just the Start</h2>
                    <p className="text-slate-400">Our roadmap for the future of PC building.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                            <div className="text-cyan-400 mb-4">{item.icon}</div>
                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Future;
