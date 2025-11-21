import React from 'react';
import { Cpu, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-v2-navy-900 border-t border-v2-navy-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Cpu className="h-6 w-6 text-v2-cyan" />
                            <span className="text-xl font-bold text-v2-slate-white font-mono">Peasy</span>
                        </div>
                        <p className="text-v2-slate-light max-w-sm mb-6">
                            Revolutionizing PC building with AI-powered diagnostics and AR guidance. Build smarter, not harder.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-v2-slate-light hover:text-v2-cyan transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-v2-slate-light hover:text-v2-cyan transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-v2-slate-light hover:text-v2-cyan transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-v2-slate-white font-bold mb-4 font-mono">Product</h3>
                        <ul className="space-y-2">
                            <li><a href="#features" className="text-v2-slate-light hover:text-v2-cyan transition-colors text-sm">Features</a></li>
                            <li><a href="#how-it-works" className="text-v2-slate-light hover:text-v2-cyan transition-colors text-sm">How It Works</a></li>
                            <li><a href="#pricing" className="text-v2-slate-light hover:text-v2-cyan transition-colors text-sm">Pricing</a></li>
                            <li><a href="#roadmap" className="text-v2-slate-light hover:text-v2-cyan transition-colors text-sm">Roadmap</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-v2-slate-white font-bold mb-4 font-mono">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#about" className="text-v2-slate-light hover:text-v2-cyan transition-colors text-sm">About Us</a></li>
                            <li><a href="#team" className="text-v2-slate-light hover:text-v2-cyan transition-colors text-sm">Team</a></li>
                            <li><a href="#" className="text-v2-slate-light hover:text-v2-cyan transition-colors text-sm">Careers</a></li>
                            <li><a href="#" className="text-v2-slate-light hover:text-v2-cyan transition-colors text-sm">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-v2-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-v2-slate-light text-sm font-mono">
                        &copy; {new Date().getFullYear()} Peasy AI. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-v2-slate-light hover:text-v2-cyan text-sm">Privacy Policy</a>
                        <a href="#" className="text-v2-slate-light hover:text-v2-cyan text-sm">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
