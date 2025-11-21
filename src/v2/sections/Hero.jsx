import React from 'react';
import GridBackground from '../components/GridBackground';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-v2-white overflow-hidden pt-16">
            <GridBackground />

            {/* Thermal Blob Effect */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-v2-red/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Typography Content */}
                <div>
                    <div className="inline-block mb-6 px-3 py-1 border border-v2-black/10 rounded-full bg-white">
                        <span className="text-xs font-mono text-v2-black/60">INTELLIGENT ASSEMBLY v2.0</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-serif font-medium text-v2-black leading-[0.95] mb-8 tracking-tight">
                        Hardware <br />
                        <span className="italic text-v2-red">Intuition.</span>
                    </h1>

                    <p className="text-xl text-v2-black/70 max-w-md leading-relaxed mb-10 font-light">
                        We build the cognitive layer for physical assembly.
                        Computer vision that understands hardware like you do.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#cta" className="px-8 py-4 bg-v2-black text-v2-white font-medium rounded-full hover:bg-v2-red transition-colors">
                            Start Building
                        </a>
                        <a href="#how-it-works" className="px-8 py-4 border border-v2-black/10 text-v2-black font-medium rounded-full hover:border-v2-black transition-colors bg-white">
                            Read the Research
                        </a>
                    </div>
                </div>

                {/* Abstract Visual / "Phone" Placeholder */}
                <div className="relative h-[600px] w-full hidden lg:flex items-center justify-center">
                    <div className="relative w-[300px] h-[600px] border border-v2-black/10 bg-white/50 backdrop-blur-sm rounded-[3rem] overflow-hidden shadow-2xl">
                        {/* Internal UI Mockup */}
                        <div className="absolute inset-0 p-6 flex flex-col">
                            <div className="w-full h-48 bg-v2-gray-light rounded-2xl mb-6 animate-pulse"></div>
                            <div className="space-y-3">
                                <div className="h-4 w-3/4 bg-v2-gray-light rounded"></div>
                                <div className="h-4 w-1/2 bg-v2-gray-light rounded"></div>
                            </div>
                            <div className="mt-auto p-4 bg-v2-red/5 border border-v2-red/10 rounded-xl">
                                <div className="flex items-center gap-2 text-v2-red mb-2">
                                    <div className="w-2 h-2 bg-v2-red rounded-full animate-ping"></div>
                                    <span className="text-xs font-mono font-bold">SCANNING_ACTIVE</span>
                                </div>
                                <p className="text-xs text-v2-black/60 font-mono">Target identified: GPU_RTX_4090</p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-20 -right-10 bg-white p-4 shadow-lg rounded-xl border border-v2-black/5 animate-bounce duration-[3000ms]">
                        <span className="font-mono text-xs text-v2-red">99.9% ACCURACY</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
