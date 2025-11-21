import React from 'react';

const CTA = () => {
    return (
        <section id="cta" className="bg-v2-black py-32 text-v2-white relative overflow-hidden">
            {/* Background Grid (White lines on black) */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <h2 className="text-5xl md:text-7xl font-serif font-medium mb-8 leading-tight">
                    Ready to build <br />
                    <span className="text-v2-red italic">normally?</span>
                </h2>

                <p className="text-xl text-v2-white/60 mb-12 max-w-xl mx-auto font-light">
                    Join the waitlist for the next generation of hardware assembly tools.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="w-full sm:w-auto px-10 py-4 bg-v2-red text-white font-medium rounded-full hover:bg-white hover:text-v2-black transition-colors">
                        Get Early Access
                    </button>
                    <button className="w-full sm:w-auto px-10 py-4 border border-v2-white/20 text-v2-white font-medium rounded-full hover:border-v2-white transition-colors">
                        View Documentation
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
