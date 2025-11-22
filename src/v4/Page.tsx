import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import './index.css';

const Page = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            // @ts-ignore
            direction: 'vertical',
            // @ts-ignore
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="bg-swiss-white min-h-screen selection:bg-swiss-cyan selection:text-swiss-black">
            <Navbar />
            <main>
                <Hero />
                <Problem />
                <Features />
                <HowItWorks />
                <About />
                <Team />
                <Roadmap />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
};

export default Page;
