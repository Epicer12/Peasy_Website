import { motion } from 'framer-motion';

const Team = () => {
    const team = [
        { name: "HASUN_TISERA", role: "SYSTEM_ARCHITECT" },
        { name: "NERESH_RANJITHKUMAR", role: "UX_ENGINEER" },
        { name: "DEMINDA_RUPASINGHE", role: "HARDWARE_LEAD" },
        { name: "SETHUMI_JAYASURIYA", role: "AI_RESEARCHER" },
        { name: "AYUMI_DISSANAYAKE", role: "FULL_STACK_DEV" },
        { name: "JAYATHMI_GUNAWARDHANA", role: "FULL_STACK_DEV" }
    ];

    return (
        <section id="team" className="min-h-screen w-full bg-swiss-white text-swiss-black py-40 px-4 md:px-8 relative overflow-hidden">
            <div className="swiss-grid relative z-10">
                <div className="col-span-12 mb-24">
                    <span className="text-technical text-sm tracking-widest block mb-8">05 // THE_TEAM</span>
                    <h2 className="text-sub-massive leading-none tracking-tighter">
                        THE<br />BUILDERS
                    </h2>
                </div>

                <div className="col-span-12 md:col-span-8 md:col-start-5">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col border-b border-swiss-black py-8 md:hover:bg-swiss-cyan md:hover:text-swiss-white md:hover:px-4 transition-all duration-300 cursor-crosshair"
                        >
                            <h3 className="text-xl md:text-3xl font-bold tracking-tight self-start">{member.name}</h3>
                            <span className="font-mono text-xs md:text-sm tracking-widest self-end mt-2">{member.role}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
