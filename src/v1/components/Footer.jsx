import React from 'react';
import { Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">Peasy</h3>
                        <p className="text-slate-400">© 2025 Peasy – CS-27 IIT</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                            <span className="sr-only">GitHub</span>
                            <Github className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                            <span className="sr-only">Twitter</span>
                            <Twitter className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                            <span className="sr-only">Instagram</span>
                            <Instagram className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
