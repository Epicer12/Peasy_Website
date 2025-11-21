import React from 'react';

const Problem = () => {
    return (
        <section className="bg-v2-white py-32 border-t border-v2-black/5">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                    <p className="font-mono text-xs text-v2-red mb-6 tracking-widest uppercase">The Challenge</p>
                    <h2 className="text-4xl md:text-6xl font-serif font-medium text-v2-black leading-[1.1] mb-12">
                        Hardware assembly is stuck in the past. <br />
                        <span className="text-v2-black/40">Manual, error-prone, and disconnected from intelligence.</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-v2-black/10 pt-12">
                        <div>
                            <h3 className="font-medium text-v2-black mb-2">Compatibility</h3>
                            <p className="text-sm text-v2-black/60 leading-relaxed">
                                Complex component interactions create a high risk of failure before power-on.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-medium text-v2-black mb-2">Fragility</h3>
                            <p className="text-sm text-v2-black/60 leading-relaxed">
                                Physical hardware requires precise handling that current tools don't support.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-medium text-v2-black mb-2">Knowledge</h3>
                            <p className="text-sm text-v2-black/60 leading-relaxed">
                                Technical expertise is siloed in outdated manuals and forums.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
