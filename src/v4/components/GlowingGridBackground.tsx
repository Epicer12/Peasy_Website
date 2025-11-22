import { motion } from 'framer-motion';

interface GlowingGridBackgroundProps {
    variant?: 'cyan' | 'gray' | 'white';
}

const GlowingGridBackground = ({ variant = 'cyan' }: GlowingGridBackgroundProps) => {
    const isWhite = variant === 'white';

    let colorHex = '#00e5ff'; // Default Cyan
    if (variant === 'gray') colorHex = '#6b7280';
    if (variant === 'white') colorHex = '#ffffff';

    const baseOpacity = isWhite ? 0.05 : 0.2;
    const lineOpacity = isWhite ? 0.1 : 0.4;
    const activeOpacity = isWhite ? 0.3 : 0.8;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

            {/* Layer 1: Slow, Thick Lines (Background Ambience) */}
            <motion.div
                initial={{ top: '-10%' }}
                animate={{ top: '110%' }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] blur-[2px]"
                style={{ backgroundColor: colorHex, opacity: baseOpacity }}
            />
            <motion.div
                initial={{ left: '-10%' }}
                animate={{ left: '110%' }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 w-[2px] h-full blur-[2px]"
                style={{ backgroundColor: colorHex, opacity: baseOpacity }}
            />

            {/* Layer 2: Medium Speed, Thin Lines, Reverse Direction */}
            <motion.div
                initial={{ bottom: '-10%' }}
                animate={{ bottom: '110%' }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[1px]"
                style={{ backgroundColor: colorHex, opacity: lineOpacity }}
            />
            <motion.div
                initial={{ right: '-10%' }}
                animate={{ right: '110%' }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 w-[1px] h-full"
                style={{ backgroundColor: colorHex, opacity: lineOpacity }}
            />

            {/* Layer 3: Active Scanning Lines (Brighter, Faster) */}
            <motion.div
                initial={{ top: '-20%' }}
                animate={{ top: '120%' }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
                className="absolute left-0 w-full h-[1px]"
                style={{
                    backgroundColor: colorHex,
                    opacity: activeOpacity,
                    boxShadow: isWhite ? 'none' : `0 0 10px ${colorHex}`
                }}
            />
            <motion.div
                initial={{ left: '-20%' }}
                animate={{ left: '120%' }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
                className="absolute top-0 w-[1px] h-full"
                style={{
                    backgroundColor: colorHex,
                    opacity: activeOpacity,
                    boxShadow: isWhite ? 'none' : `0 0 10px ${colorHex}`
                }}
            />

            {/* Floating Crosshairs (Drifting Elements) */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
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
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                >
                    <div className="w-full h-[1px] absolute" style={{ backgroundColor: colorHex }} />
                    <div className="h-full w-[1px] absolute" style={{ backgroundColor: colorHex }} />
                </motion.div>
            ))}
        </div>
    );
};

export default GlowingGridBackground;
