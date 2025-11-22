const Footer = () => {
    return (
        <footer className="w-full bg-swiss-black py-12 px-4 md:px-8 border-t border-swiss-white/10">
            <div className="swiss-grid">
                <div className="col-span-12 md:col-span-6 flex flex-col justify-between h-full">
                    <span className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-swiss-white select-none">PEASY</span>
                </div>

                <div className="col-span-12 md:col-span-6 flex flex-col md:items-end justify-end gap-4 mt-8 md:mt-0">
                    <div className="flex gap-8 text-sm font-mono text-swiss-white">
                        <a href="#" className="hover:text-swiss-cyan px-1 transition-colors">LINKEDIN</a>
                        <a href="#" className="hover:text-swiss-cyan px-1 transition-colors">INSTAGRAM</a>
                        <a href="#" className="hover:text-swiss-cyan px-1 transition-colors">GITHUB</a>
                    </div>
                    <span className="text-xs font-mono text-gray-500">
                        © 2025 PEASY_SYSTEMS // CS-27 IIT
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
