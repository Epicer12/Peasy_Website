import React from 'react';

const About = () => {
    return (
        <section id="about" className="bg-v2-white py-32 border-t border-v2-black/5">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-serif font-medium text-v2-black leading-none tracking-tight mb-8">
                            Normalizing <br />
                            <span className="text-v2-red">Complexity.</span>
                        </h2>
                    </div>
                    <div className="text-lg text-v2-black/70 leading-relaxed space-y-6">
                        <p>
                            We believe that the future of computing isn't just about faster chips, but about making the physical layer accessible to everyone.
                        </p>
                        <p>
                            By combining advanced computer vision with intuitive design, we are removing the barriers to hardware innovation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
