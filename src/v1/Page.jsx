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

const Page = () => {
    return (
        <div className="font-sans antialiased text-gray-900 bg-white">
            <Navbar />
            <main>
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
};

export default Page;
