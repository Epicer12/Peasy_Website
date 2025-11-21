import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Features from './sections/Features';
import HowItWorks from './sections/HowItWorks';
import About from './sections/About';
import Team from './sections/Team';
import Future from './sections/Future';
import CTA from './sections/CTA';

function AppV2() {
    return (
        <div className="min-h-screen bg-v2-white text-v2-black font-sans selection:bg-v2-red selection:text-white">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <Problem />
                <Features />
                <HowItWorks />
                <About />
                <Team />
                <Future />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}

export default AppV2;
