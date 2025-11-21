import React from 'react';

const GridBackground = () => {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-v2-white">
            {/* Main Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>

            {/* Secondary Finer Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-[0.02]"></div>
        </div>
    );
};

export default GridBackground;
