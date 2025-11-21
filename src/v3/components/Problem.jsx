import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, DollarSign, XCircle, Layers, Thermometer, Cpu } from 'lucide-react';

const Problem = () => {
    const problems = [
        {
            icon: <AlertTriangle size={32} />,
            title: "Confusion",
            text: "Drowning in technical jargon and conflicting advice from forums."
        },
        {
            icon: <DollarSign size={32} />,
            title: "Wasted Money",
            text: "Buying incompatible parts or overspending on minimal performance gains."
        },
        {
            icon: <XCircle size={32} />,
            title: "Dead on Arrival",
            text: "The dread of pressing the power button and hearing absolutely nothing."
        },
        {
            icon: <Layers size={32} />,
            title: "Browser Tab Hell",
            text: "20+ tabs open just to figure out if a cooler fits your case."
        },
        {
            icon: <Thermometer size={32} />,
            title: "Thermal Nightmares",
            text: "Overheating builds because of poor airflow planning."
        },
        {
            icon: <Cpu size={32} />,
            title: "Compatibility Roulette",
            text: "Will the RAM clear the CPU cooler? It's a guessing game."
        }
    ];

    return (
        <section className="py-24 bg-v3-navy/50 relative border-t border-v3-white/5">
            <div className="container mx-auto px-6">
                <div className="mb-16 md:w-2/3">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        PC Building Shouldn't <br /> Be This Hard.
                    </h2>
                    <p className="text-xl text-v3-gray leading-relaxed">
                        Building a PC is a rite of passage, but it's plagued by anxiety, compatibility issues, and the constant fear of breaking expensive components.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 bg-v3-navy border border-v3-white/5 hover:border-v3-cyan/30 transition-colors group"
                        >
                            <div className="text-v3-cyan mb-6 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-v3-gray">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problem;
