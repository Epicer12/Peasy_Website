import React from 'react';
import { Scan, Zap, Eye, Layers, Thermometer, TrendingUp, Mic, ShoppingCart, Users } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Scan className="h-6 w-6 text-cyan-400" />,
            problem: "What hardware is this?",
            solution: "QuickScan Hardware Detector",
            desc: "Instantly identify parts by pointing your camera."
        },
        {
            icon: <Zap className="h-6 w-6 text-cyan-400" />,
            problem: "Why won't it turn on?",
            solution: "TroubleScan AI",
            desc: "Decodes beep codes & debug LEDs instantly."
        },
        {
            icon: <Eye className="h-6 w-6 text-cyan-400" />,
            problem: "Will this GPU fit?",
            solution: "Visual Bottleneck Analyzer",
            desc: "See bottlenecks before you buy."
        },
        {
            icon: <Layers className="h-6 w-6 text-cyan-400" />,
            problem: "How does it look?",
            solution: "AR-Powered Case Preview",
            desc: "Visualize your build in your room with AR."
        },
        {
            icon: <Thermometer className="h-6 w-6 text-cyan-400" />,
            problem: "Will it overheat?",
            solution: "Thermal & Airflow Sim",
            desc: "Predict temps based on your fan config."
        },
        {
            icon: <TrendingUp className="h-6 w-6 text-cyan-400" />,
            problem: "What should I upgrade?",
            solution: "Future-Proof Planner",
            desc: "AI recommends the best value upgrades."
        },
        {
            icon: <Mic className="h-6 w-6 text-cyan-400" />,
            problem: "Where does this cable go?",
            solution: "Real-Time Voice Guide",
            desc: "Hands-free assembly instructions."
        },
        {
            icon: <ShoppingCart className="h-6 w-6 text-cyan-400" />,
            problem: "Is this a good price?",
            solution: "Local Pricing Engine",
            desc: "Find the best deals in your region."
        },
        {
            icon: <Users className="h-6 w-6 text-cyan-400" />,
            problem: "Is my build good?",
            solution: "Community Build Audits",
            desc: "Get feedback from top builders."
        }
    ];

    return (
        <section id="features" className="py-20 bg-navy-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Peasy Fixes Everything in One App</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        We mapped every pain point of PC building to a specific AI solution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-slate-900 rounded-lg">
                                    {feature.icon}
                                </div>
                            </div>
                            <div className="mb-2">
                                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Problem</span>
                                <p className="text-slate-400 text-sm mb-3">{feature.problem}</p>
                            </div>
                            <div>
                                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Solution</span>
                                <h3 className="text-lg font-bold text-white mb-1">{feature.solution}</h3>
                                <p className="text-slate-300 text-sm">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
