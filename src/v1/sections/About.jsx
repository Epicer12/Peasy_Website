import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-50 text-slate-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">We're CS-27 @ IIT</h2>
                <div className="prose prose-lg mx-auto text-slate-600">
                    <p className="mb-6">
                        We are five second-year students from the Informatics Institute of Technology who got tired of watching our friends cry at 3 AM because their PC wouldn't POST.
                    </p>
                    <p className="font-medium text-slate-900">
                        We realized that PC building hasn't changed in 20 years. It's still confusing, expensive, and risky.
                        So we built the app we always wanted – the PC PartPicker killer with actual AI superpowers.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
