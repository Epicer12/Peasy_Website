import { motion } from 'framer-motion';

const Problem = () => {
    const painPoints = [
        "Compatibility Nightmares",
        "Overpriced Pre-builts",
        "Cable Management Hell",
        "Hardware Bottlenecks",
        "BIOS Configuration",
        "Thermal Throttling"
    ];

    return (
        <section className="min-h-screen w-full bg-swiss-black py-32 px-6 md:px-12 text-swiss-white relative overflow-hidden">

            <div className="swiss-grid h-full relative z-10">
                {/* Title - Vertical on Left */}
                <div className="col-span-2 hidden md:flex flex-col justify-between h-full border-r border-swiss-cyan/30 pr-4">
                    <span className="text-technical text-xs rotate-180 [writing-mode:vertical-rl]">01 // PROBLEM_MATRIX</span>
                    <span className="text-technical text-[10px] rotate-180 [writing-mode:vertical-rl]">ERR_HARDWARE_CONFLICT</span>
                </div>

                {/* Content Area */}
                <div className="col-span-12 md:col-span-10 pl-0 md:pl-12">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-sub-massive font-bold tracking-tighter mb-24 text-swiss-white"
                    >
                        SYSTEM<br />FAILURE
                    </motion.h2>

                    <div className="flex flex-col">
                        {painPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="border-t border-swiss-cyan/30 py-8 flex items-center justify-between group cursor-crosshair relative overflow-hidden"
                            >
                                {/* Hover Crosshair */}
                                <span className="absolute left-2 text-swiss-cyan opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono">+</span>

                                <h3 className="text-xl md:text-4xl font-bold text-swiss-white group-hover:text-swiss-cyan transition-colors pl-6">
                                    {point}
                                </h3>
                                <span className="font-mono text-[10px] md:text-xs text-gray-500 group-hover:text-swiss-white transition-colors">
                                    [ ERR_0{index + 1} ]
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
