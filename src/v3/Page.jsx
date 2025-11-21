import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import CTA from './components/CTA';
import Footer from './components/Footer';
import GrainOverlay from './components/ui/GrainOverlay';
import CustomCursor from './components/ui/CustomCursor';

const Page = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen bg-v3-navy text-v3-white font-sans selection:bg-v3-cyan selection:text-v3-navy overflow-x-hidden cursor-none">
            <GrainOverlay />
            <CustomCursor />

            <Navbar />

            <main className="relative z-10">
                <Hero />
                <Problem />
                <HowItWorks />
                <Features />
                <About />
                <Team />
                <Roadmap />
                <CTA />
            </main>

            <Footer />
        </div>
    );
};

export default Page;
