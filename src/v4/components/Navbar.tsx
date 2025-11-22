import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = ['FEATURES', 'HOW_IT_WORKS', 'ABOUT', 'TEAM', 'DOWNLOAD'];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 mix-blend-difference text-white pointer-events-none"
            >
                <div className="swiss-grid items-start">
                    {/* Logo Area */}
                    <div className="col-span-2 pointer-events-auto">
                        <a href="#" className="text-xl font-bold tracking-tighter block hover:opacity-50 transition-opacity">
                            PEASY.LK
                        </a>
                    </div>

                    {/* Desktop Nav - Raw List */}
                    <div className="col-span-10 hidden md:flex justify-end gap-8 pointer-events-auto">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={`#${link.toLowerCase()}`}
                                className="text-sm font-mono tracking-widest hover:line-through transition-all"
                            >
                                {link.replace(/_/g, ' ')}
                            </a>
                        ))}
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Trigger (Fixed Position) */}
            <div className="fixed top-6 right-4 z-50 md:hidden mix-blend-difference text-white">
                <button
                    onClick={toggleMenu}
                    className="text-sm font-mono tracking-widest hover:opacity-50 transition-opacity"
                >
                    [{isMenuOpen ? ' CLOSE ' : ' MENU '}]
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-swiss-black text-swiss-white flex flex-col justify-center px-4"
                    >
                        <div className="flex flex-col gap-8">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={`#${link.toLowerCase()}`}
                                    onClick={toggleMenu}
                                    className="text-4xl font-bold tracking-tighter hover:text-swiss-cyan transition-colors"
                                >
                                    {link.replace(/_/g, ' ')}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
