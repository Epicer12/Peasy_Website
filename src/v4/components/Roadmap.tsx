import { motion } from 'framer-motion';
import GlowingGridBackground from './GlowingGridBackground';

const Roadmap = () => {
    const milestones = [
        { q: "Q1_2025", task: "BETA_LAUNCH" },
        { q: "Q2_2025", task: "AI_DIAGNOSTICS_V2" },
        { q: "Q3_2025", task: "MARKETPLACE_INTEGRATION" },
        { q: "Q4_2025", task: "ISLAND_WIDE_EXPANSION" }
    ];

    return (
        <section className="min-h-[50vh] w-full bg-swiss-black py-40 px-4 md:px-8 text-swiss-white relative overflow-hidden">
            <GlowingGridBackground variant="white" />
            <div className="swiss-grid relative z-10">
                <div className="col-span-12 md:col-span-4">
                    <span className="text-technical text-xs tracking-widest block mb-8">06 // TRAJECTORY</span>
                </div>

                <div className="col-span-12 md:col-span-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex flex-col ${index % 2 !== 0 ? 'md:mt-32 items-end text-right' : ''}`}
                            >
                                <span className="text-swiss-cyan font-mono text-xs mb-4 block border-b border-swiss-cyan pb-2 w-fit">
                                    {item.q}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{item.task}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
