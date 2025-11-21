import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const Team = () => {
    const team = [
        { name: "Hasun Tisera", role: "Lead Developer" },
        { name: "Neresh Ranjithkumar", role: "AI Engineer" },
        { name: "Deminda Rupasinghe", role: "Backend Dev" },
        { name: "Sethumi Jayasuriya", role: "UI/UX Designer" },
        { name: "Ayumi Dissanayake", role: "Frontend Dev" },
        { name: "Jayathmi Gunawardhana", role: "QA Engineer" }
    ];

    return (
        <section id="team" className="py-24 bg-black border-t border-v3-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">The Team</h2>
                    <p className="text-v3-gray text-lg md:text-xl">Second-year students who code better than they sleep.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-10">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center group"
                        >
                            <div className="w-32 h-32 rounded-full bg-v3-navy border-2 border-v3-white/10 group-hover:border-v3-cyan transition-colors duration-300 mb-4 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-v3-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                {/* Placeholder Avatar */}
                                <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-v3-white/20 group-hover:text-v3-cyan transition-colors">
                                    {member.name.charAt(0)}
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight uppercase tracking-tighter">
                                    {member.name.split(" ")[0]}<br />
                                    <span className="text-v3-gray">{member.name.split(" ").slice(1).join(" ")}</span>
                                </h3>
                                <p className="text-v3-cyan text-lg md:text-xl mt-2 font-medium">{member.role}</p>
                            </div>
                            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                <a href="#" className="text-v3-gray hover:text-white"><Github size={16} /></a>
                                <a href="#" className="text-v3-gray hover:text-white"><Linkedin size={16} /></a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
