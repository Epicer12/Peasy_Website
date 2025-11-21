import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Wrench, Store, ShoppingBag, Recycle, BarChart } from 'lucide-react';

const Roadmap = () => {
    const items = [
        { icon: <Globe />, title: "Web 3D Builder", desc: "Full browser-based 3D PC builder." },
        { icon: <Wrench />, title: "Peasy Pro", desc: "For technicians ($19/mo) with batch scanning." },
        { icon: <Store />, title: "White Label", desc: "Custom branding for repair shops." },
        { icon: <ShoppingBag />, title: "Store Integrations", desc: "Direct checkout with Newegg & Amazon." },
        { icon: <Recycle />, title: "Used Marketplace", desc: "Safe community for buying/selling used parts." },
        { icon: <BarChart />, title: "AI Valuation", desc: "Instant price estimation for second-hand gear." }
    ];

    return (
        <section className="py-24 bg-v3-navy relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-v3-cyan/10 via-transparent to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">This Is Just The Beginning</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 bg-black/40 backdrop-blur-sm border border-v3-cyan/10 hover:border-v3-cyan/50 transition-all duration-300 rounded-xl group"
                        >
                            <div className="text-v3-gray group-hover:text-v3-cyan transition-colors mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-v3-gray text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
