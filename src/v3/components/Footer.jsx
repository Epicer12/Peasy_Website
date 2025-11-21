import React from 'react';
import { Twitter, Disc, Video, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-v3-navy pt-16 pb-8 border-t border-v3-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                        <p className="text-v3-gray text-sm mb-4">Get the latest news and updates from Peasy.</p>
                        <div className="flex gap-3 justify-center md:justify-start">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 rounded-full px-5 py-2 text-white text-sm focus:outline-none focus:border-v3-cyan transition-colors w-64"
                            />
                            <button className="bg-v3-cyan text-v3-navy font-bold rounded-full px-6 py-2 text-sm hover:bg-white transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-10 text-sm">
                        <div className="flex flex-col gap-3">
                            <h4 className="font-bold text-white opacity-50">Platform</h4>
                            <a href="#" className="text-v3-gray hover:text-v3-cyan">Download</a>
                            <a href="#" className="text-v3-gray hover:text-v3-cyan">Features</a>
                            <a href="#" className="text-v3-gray hover:text-v3-cyan">Pricing</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="font-bold text-white opacity-50">Company</h4>
                            <a href="#" className="text-v3-gray hover:text-v3-cyan">About</a>
                            <a href="#" className="text-v3-gray hover:text-v3-cyan">Careers</a>
                            <a href="#" className="text-v3-gray hover:text-v3-cyan">Contact</a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-v3-gray text-xs">
                        &copy; 2025 Peasy Inc. All rights reserved.
                    </div>
                    <div className="flex gap-4">
                        <SocialLink icon={<Twitter size={16} />} />
                        <SocialLink icon={<Disc size={16} />} />
                        <SocialLink icon={<Video size={16} />} />
                    </div>
                </div>

                {/* Massive Footer Text - Reduced Size */}
                <div className="mt-12 select-none pointer-events-none opacity-50">
                    <h1 className="text-[4vw] font-black text-white/5 leading-none text-center tracking-tighter">
                        Peasy.lk
                    </h1>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ icon }) => (
    <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-v3-cyan hover:text-v3-navy hover:border-v3-cyan transition-all duration-300">
        {icon}
    </a>
);

export default Footer;
