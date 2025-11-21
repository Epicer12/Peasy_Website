import React from 'react';

const Team = () => {
    const team = [
        { name: "Hasun", role: "Team Leader & Full Stack" },
        { name: "Member 2", role: "AI & Computer Vision Lead" },
        { name: "Member 3", role: "Mobile Development Lead" },
        { name: "Member 4", role: "UI/UX Designer" },
        { name: "Member 5", role: "Backend Engineer" },
    ];

    return (
        <section id="team" className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Meet the Team</h2>
                    <p className="text-slate-400">The brains behind the AI.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="w-full sm:w-64 bg-slate-800 rounded-xl p-6 text-center border border-slate-700 hover:border-cyan-500 transition-colors">
                            <div className="w-24 h-24 bg-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-slate-500">
                                {member.name.charAt(0)}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                            <p className="text-cyan-400 text-sm">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
