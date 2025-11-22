import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="min-h-[80vh] w-full bg-swiss-white py-40 px-4 md:px-8 relative">
            <div className="swiss-grid">
                <div className="col-span-12 md:col-span-8 md:col-start-3">
                    <span className="text-technical text-sm tracking-widest text-swiss-black block mb-8">04 // MISSION</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sub-massive leading-[0.8] tracking-tighter mb-16 text-swiss-black"
                    >
                        DEMYSTIFY<br />
                        THE BLACK<br />
                        BOX.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="border-l border-swiss-black pl-8 md:pl-16 py-4"
                    >
                        <p className="text-2xl md:text-4xl font-medium leading-tight max-w-4xl text-swiss-black">
                            We believe that building a computer is a fundamental digital literacy skill.
                            Peasy makes the hardware transparent, accessible, and — dare we say — easy.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
