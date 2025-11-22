import { motion } from 'framer-motion';

interface AnimatedGridProps {
    color?: string;
    opacity?: number;
    className?: string;
}

const AnimatedGrid = ({ color = '#00e5ff', opacity = 0.1, className = '' }: AnimatedGridProps) => {
    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
            {/* Static Grid */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, ${color}33 1px, transparent 1px),
                        linear-gradient(to bottom, ${color}33 1px, transparent 1px)
                    `,
                    backgroundSize: '4rem 4rem',
                    opacity: opacity
                }}
            />

            {/* Scanning Line (Vertical) */}
            <motion.div
                initial={{ left: '-10%' }}
                animate={{ left: '110%' }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 2
                }}
                className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-swiss-cyan to-transparent opacity-50 blur-[1px]"
            />

            {/* Scanning Line (Horizontal) */}
            <motion.div
                initial={{ top: '-10%' }}
                animate={{ top: '110%' }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 4
                }}
                className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-swiss-cyan to-transparent opacity-30 blur-[1px]"
            />
        </div>
    );
};

export default AnimatedGrid;
