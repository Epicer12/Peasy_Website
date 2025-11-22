import { motion } from 'framer-motion';
import GlowingGridBackground from './GlowingGridBackground';

const Features = () => {
    const features = [
        { id: "01", title: "AI_DIAGNOSTICS", desc: "Instant hardware analysis." },
        { id: "02", title: "AUTO_PART_PICKER", desc: "Compatibility guaranteed." },
        { id: "03", title: "BUILD_GUIDES", desc: "Step-by-step AR assistance." },
        { id: "04", title: "MARKETPLACE", desc: "Buy & sell verified parts." },
        { id: "05", title: "COMMUNITY", desc: "Island-wide network." },
        { id: "06", title: "BENCHMARKS", desc: "Real-world performance data." }
    ];

    return (
        <section className="min-h-screen w-full bg-swiss-white py-40 px-4 md:px-8 text-swiss-black relative overflow-hidden">
            <GlowingGridBackground variant="cyan" />

            <div className="swiss-grid relative z-10">
                <div className="col-span-12 mb-32">
                    <span className="text-technical text-sm tracking-widest block mb-8">
                        02 // CAPABILITIES <span className="animate-pulse text-gray-500 ml-4">[ SYSTEM_ACTIVE ]</span>
                    </span>
                    <h2 className="text-sub-massive leading-none tracking-tighter">
                        CORE<br />SYSTEMS
                    </h2>
                </div>

                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`col-span-12 md:col-span-4 mb-32 relative group p-6 ${index % 3 === 1 ? 'md:mt-32' : index % 3 === 2 ? 'md:mt-64' : ''
                            }`}
                    >
                        {/* Extending Borders Hover Effect */}
                        {/* Top Line */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-swiss-cyan origin-center scale-x-0 group-hover:scale-x-125 transition-transform duration-500 ease-out" />
                        {/* Bottom Line */}
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-swiss-cyan origin-center scale-x-0 group-hover:scale-x-125 transition-transform duration-500 ease-out" />
                        {/* Left Line */}
                        <div className="absolute top-0 left-0 w-[1px] h-full bg-swiss-cyan origin-center scale-y-0 group-hover:scale-y-125 transition-transform duration-500 ease-out" />
                        {/* Right Line */}
                        <div className="absolute top-0 right-0 w-[1px] h-full bg-swiss-cyan origin-center scale-y-0 group-hover:scale-y-125 transition-transform duration-500 ease-out" />

                        <span className="text-8xl font-bold text-gray-300 block mb-4 leading-none group-hover:text-swiss-cyan transition-colors duration-300">
                            {feature.id}
                        </span>
                        <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-sm font-mono text-gray-500 max-w-[200px]">
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
