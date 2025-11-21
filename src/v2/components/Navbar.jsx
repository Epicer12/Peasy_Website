import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Platform', href: '#features' },
        { name: 'Research', href: '#how-it-works' },
        { name: 'Mission', href: '#about' },
        { name: 'Company', href: '#team' },
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-v2-white/90 backdrop-blur-sm border-b border-v2-black/10">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                {/* Logo */}
                <a href="#" className="text-xl font-serif font-bold text-v2-black tracking-tight">
                    Peasy<span className="text-v2-red">.</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-v2-black/60 hover:text-v2-red transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <a
                        href="#cta"
                        className="hidden md:block px-5 py-2 bg-v2-black text-v2-white text-sm font-medium hover:bg-v2-red transition-colors rounded-full"
                    >
                        Get Started
                    </a>
                    <button
                        className="md:hidden text-v2-black"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-v2-white border-b border-v2-black/10 p-4">
                    <div className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-serif text-v2-black hover:text-v2-red"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
