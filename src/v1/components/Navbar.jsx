import React, { useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#hero' },
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'About', href: '#about' },
        { name: 'Team', href: '#team' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#" className="flex-shrink-0 flex items-center gap-2">
                            <Cpu className="h-8 w-8 text-cyan-400" />
                            <span className="text-xl font-bold text-white tracking-tight">Peasy</span>
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a
                                href="#cta"
                                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md text-sm font-bold transition-colors"
                            >
                                Download
                            </a>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-b border-slate-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-slate-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="#cta"
                            onClick={() => setIsOpen(false)}
                            className="bg-cyan-500 hover:bg-cyan-600 text-white block px-3 py-2 rounded-md text-base font-bold mt-4"
                        >
                            Download App
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
