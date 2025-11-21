import React, { useState } from 'react';

const CTA = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Waitlist email:', email);
        alert('Thanks for joining! We will keep you posted.');
        setEmail('');
    };

    return (
        <section id="cta" className="py-24 bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-5xl font-extrabold mb-6">
                    Be the first to try Peasy
                </h2>
                <p className="text-xl text-cyan-100 mb-10">
                    Join the waitlist and get early access to the beta.
                </p>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1 px-6 py-4 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button
                        type="submit"
                        className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-bold transition-colors shadow-lg"
                    >
                        Join Waitlist
                    </button>
                </form>
                <p className="mt-6 text-sm text-cyan-100 opacity-80">
                    50,000+ parts database • 98% scan accuracy • Built for gamers
                </p>
            </div>
        </section>
    );
};

export default CTA;
