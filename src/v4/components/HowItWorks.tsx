import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        { step: "01", title: "SCAN", desc: "Deep system analysis detects your exact configuration." },
        { step: "02", title: "ANALYZE", desc: "Cross-reference with millions of parts for conflicts." },
        { step: "03", title: "GUIDE", desc: "Get AI-driven recommendations for max performance." },
        { step: "04", title: "VERIFY", desc: "Ensure stability before you build." }
    ];

    return (
        <section id="how_it_works" className="min-h-[80vh] w-full bg-swiss-black py-40 px-4 md:px-8 text-swiss-white flex items-center relative overflow-hidden">
            <div className="w-full relative z-10">
                {/* Desktop Line (Horizontal) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-swiss-cyan/50 -translate-y-1/2" />

                {/* Mobile Line (Vertical) */}
                <div className="md:hidden absolute top-0 left-4 h-full w-[1px] bg-swiss-cyan/50" />

                <div className="swiss-grid relative z-10">
                    <div className="col-span-12 absolute top-0 left-0 -mt-32">
                        <span className="text-technical text-sm tracking-widest text-swiss-white">03 // PROCESS</span>
                    </div>
                    {steps.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`col-span-12 md:col-span-3 flex flex-col relative pl-12 md:pl-0 ${index % 2 === 0 ? 'md:items-start md:pb-32' : 'md:items-end md:pt-32 md:items-start'
                                } mb-12 md:mb-0`}
                        >
                            {/* Content Container */}
                            <div className={`flex flex-col ${index % 2 === 0 ? 'md:mb-4' : 'md:mt-4 md:order-2'
                                } bg-swiss-black relative z-10 py-4`}>
                                <span className="text-swiss-cyan font-mono text-sm mb-2">{item.step}</span>
                                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">{item.title}</h3>
                            </div>

                            {/* Mobile Dot */}
                            <div className="md:hidden absolute left-[10px] top-8 w-3 h-3 bg-swiss-black border border-swiss-cyan rounded-full z-20" />

                            {/* Desktop Dot */}
                            <div className={`hidden md:block w-4 h-4 bg-swiss-black border border-swiss-cyan ${index % 2 === 0 ? 'translate-y-[50%]' : '-translate-y-[50%] order-1'
                                }`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
