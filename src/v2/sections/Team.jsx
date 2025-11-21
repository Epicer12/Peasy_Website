import React from 'react';

const Team = () => {
    const team = [
        {
            name: "Alex Chen",
            role: "Founder / CEO",
            bio: "Previously at Google Brain. Architecting the future of physical AI."
        },
        {
            name: "Sarah Miller",
            role: "Head of Research",
            bio: "PhD in Computer Vision. Leading our neural topology team."
        },
        {
            name: "David Kim",
            role: "Lead Engineer",
            bio: "Hardware specialist. Bridging the gap between silicon and software."
        }
    ];

    return (
        <section id="team" className="bg-v2-white py-24 border-t border-v2-black/5">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-serif font-medium text-v2-black">
                            The <span className="text-v2-red">Team</span>
                        </h2>
                    </div>

                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {team.map((member, index) => (
                            <div key={index} className="group">
                                <div className="h-px w-full bg-v2-black/10 mb-6 group-hover:bg-v2-red transition-colors"></div>
                                <h3 className="text-xl font-medium text-v2-black mb-1">{member.name}</h3>
                                <p className="text-v2-red font-mono text-xs mb-4">{member.role}</p>
                                <p className="text-v2-black/60 leading-relaxed text-sm">
                                    {member.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
