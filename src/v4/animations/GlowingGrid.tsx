import { motion } from 'framer-motion';

const GlowingGrid = () => {
    return (
        <div className="w-full h-screen bg-black relative overflow-hidden flex items-center justify-center">

            {/* Layer 1: Slow, Thick Lines (Background Ambience) */}
            <motion.div
                initial={{ top: '-10%' }}
                animate={{ top: '110%' }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] bg-swiss-cyan/20 blur-[2px]"
            />
            <motion.div
                initial={{ left: '-10%' }}
                animate={{ left: '110%' }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 w-[2px] h-full bg-swiss-cyan/20 blur-[2px]"
            />

            {/* Layer 2: Medium Speed, Thin Lines, Reverse Direction */}
            <motion.div
                initial={{ bottom: '-10%' }}
                animate={{ bottom: '110%' }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[1px] bg-swiss-cyan/40"
            />
            <motion.div
                initial={{ right: '-10%' }}
                animate={{ right: '110%' }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 w-[1px] h-full bg-swiss-cyan/40"
            />

            {/* Layer 3: Active Scanning Lines (Brighter, Faster) */}
            <motion.div
                initial={{ top: '-20%' }}
                animate={{ top: '120%' }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
                className="absolute left-0 w-full h-[1px] bg-swiss-cyan/80 shadow-[0_0_10px_#00e5ff]"
            />
            <motion.div
                initial={{ left: '-20%' }}
                animate={{ left: '120%' }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
                className="absolute top-0 w-[1px] h-full bg-swiss-cyan/80 shadow-[0_0_10px_#00e5ff]"
            />

            {/* Floating Crosshairs (Drifting Elements) */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        x: Math.random() * 100 - 50 + "%",
                        y: Math.random() * 100 - 50 + "%",
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: [null, Math.random() * 100 - 50 + "%"],
                        y: [null, Math.random() * 100 - 50 + "%"],
                        opacity: [0, 0.8, 0],
                        scale: [0.5, 1.2, 0.5],
                        rotate: [0, 90, 180]
                    }}
                    transition={{
                        duration: 15 + Math.random() * 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 2
                    }}
                    className="absolute w-8 h-8 flex items-center justify-center pointer-events-none"
                >
                    <div className="w-full h-[1px] bg-swiss-cyan absolute" />
                    <div className="h-full w-[1px] bg-swiss-cyan absolute" />
                </motion.div>
            ))}

            <div className="relative z-10 text-swiss-cyan font-mono text-xl tracking-widest border border-swiss-cyan px-8 py-4 bg-black/50 backdrop-blur-md">
                [ ANIMATION_TEST_MODE_V2 ]
            </div>
        </div>
    );
};

export default GlowingGrid;
