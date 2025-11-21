import React from 'react';
import { Play, ArrowRight, Smartphone } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-navy-900 to-slate-900">
            {/* Parallax Placeholder */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                {/* This container is reserved for the future scroll-based PC assembly animation */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                            Build, Upgrade & Fix Your PC Like a Pro <br />
                            <span className="text-cyan-400">With Just Your Phone</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                            Peasy is the only app that scans your hardware, diagnoses dead motherboards in seconds, shows perfect AR fit, and guides assembly by voice.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a href="#cta" className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2">
                                Join Waitlist <ArrowRight className="h-5 w-5" />
                            </a>
                            <button className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2">
                                <Play className="h-5 w-5 fill-current" /> Watch Demo
                            </button>
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative w-72 h-[500px] bg-slate-800 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden">
                            {/* Phone Screen Placeholder */}
                            <div className="absolute inset-0 bg-slate-900 flex flex-col">
                                <div className="h-full w-full relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=2670&auto=format&fit=crop"
                                        alt="PC Case"
                                        className="h-full w-full object-cover opacity-80"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-black/60 backdrop-blur-sm p-4 rounded-xl border border-cyan-500/50 text-center">
                                            <Smartphone className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                                            <p className="text-cyan-400 font-bold">Scanning...</p>
                                            <p className="text-xs text-slate-300">RTX 4090 Detected</p>
                                        </div>
                                    </div>
                                    {/* AR Overlay UI Mockup */}
                                    <div className="absolute bottom-8 left-4 right-4 bg-slate-900/90 p-4 rounded-xl border border-slate-700">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-xs text-slate-400">Status</p>
                                                <p className="text-sm font-bold text-green-400">Compatible</p>
                                            </div>
                                            <div className="h-8 w-8 rounded-full bg-cyan-500 flex items-center justify-center">
                                                <ArrowRight className="h-4 w-4 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
