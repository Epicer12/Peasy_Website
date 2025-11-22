import { motion } from 'framer-motion';

const FinalCTA = () => {
    return (
        <section id="download" className="min-h-screen w-full bg-swiss-white flex flex-col justify-between py-12 px-4 md:px-8 relative overflow-hidden">
            {/* Top Grid Line */}
            <div className="w-full h-[1px] bg-swiss-black" />

            <div className="swiss-grid flex-grow items-center">
                <div className="col-span-12 text-center relative">
                    <div className="mb-8 md:absolute md:top-0 md:left-0">
                        <span className="text-technical text-xs tracking-widest text-swiss-black">07 // INITIALIZE</span>
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-sub-massive font-bold tracking-tighter mb-24 text-swiss-black leading-tight"
                    >
                        READY_TO<br />BUILD?
                    </motion.h2>

                    <form className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4 border-b border-swiss-black pb-4" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="ENTER_EMAIL_ADDRESS"
                            className="flex-grow bg-transparent text-lg md:text-xl font-mono placeholder:text-gray-400 focus:outline-none text-center md:text-left text-swiss-black"
                        />
                        <button
                            type="submit"
                            className="text-lg md:text-xl font-bold text-swiss-black hover:text-swiss-cyan transition-colors whitespace-nowrap"
                        >
                            [ INITIALIZE ]
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Grid Line */}
            <div className="w-full h-[1px] bg-swiss-black" />
        </section>
    );
};

export default FinalCTA;
