import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Features', href: '#features' },
        { name: 'About', href: '#about' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-6 left-1/2 z-50 flex items-center gap-2"
            >
                <div className="bg-v3-navy/80 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 flex items-center gap-10 shadow-2xl">
                    <a href="#" className="text-xl font-bold tracking-tighter text-white hover:text-v3-cyan transition-colors">
                        Peasy.
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium text-v3-gray hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:block w-px h-4 bg-white/20" />

                    <button className="hidden md:flex items-center gap-2 text-sm font-bold text-v3-cyan hover:text-white transition-colors">
                        Download <Download size={16} />
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white hover:text-v3-cyan transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                        exit={{ opacity: 0, y: -20, scale: 0.95, x: "-50%" }}
                        className="fixed top-24 left-1/2 w-[90%] max-w-sm z-40 bg-v3-navy/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-v3-gray hover:text-white transition-colors text-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <hr className="border-white/10" />
                        <button className="w-full py-3 text-center font-bold text-v3-navy bg-v3-cyan hover:bg-white transition-colors rounded-xl">
                            Download App
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
