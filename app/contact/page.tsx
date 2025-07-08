'use client';

import { type FC, useState, useEffect } from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactPage: FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-24">
                {/* Subtle Mouse Spotlight */}
                <div
                    className="pointer-events-none fixed inset-0 z-30 transition duration-300"
                    style={{
                        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(71, 85, 105, 0.15), transparent 80%)`,
                    }}
                ></div>

                {/* Refined Floating Elements */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-slate-600/10 rounded-full blur-3xl animate-float-slow"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-600/10 rounded-full blur-3xl animate-float-reverse"></div>

                <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="text-center mb-16">
                        <h1 className="text-6xl md:text-8xl font-bold leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <span className="block text-white">Get In</span>
                            <span className="block bg-gradient-to-r from-slate-300 via-gray-200 to-slate-300 bg-clip-text text-transparent animate-gradient">
                                Touch
                            </span>
                        </h1>
                        <p
                            className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
                            style={{ animationDelay: '0.4s' }}
                        >
                            Have a project in mind or a question for our team? We&apos;d love to hear from you. Fill out the form below or reach out directly.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-5 gap-10 items-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        {/* Contact Form */}
                        <div className="md:col-span-3 bg-slate-800/20 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50">
                            <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>
                            <form className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full group relative px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-600 border border-slate-600/50 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:from-slate-600 hover:to-slate-500 hover:shadow-lg hover:shadow-slate-600/30 hover:scale-[1.02]"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="md:col-span-2 space-y-6">
                            <div className="group relative flex items-center gap-5 p-6 rounded-2xl border border-slate-700/50 bg-slate-800/20 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/40 hover:border-slate-600/60 transform hover:-translate-y-1">
                                <div className="flex-shrink-0 p-3 rounded-xl bg-slate-700/50 border border-slate-600/30 group-hover:bg-slate-600/60">
                                    <Mail className="w-6 h-6 text-slate-300" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Email Us</h3>
                                    <a href="mailto:Official.Juntoz@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                                        Official.Juntoz@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="group relative flex items-center gap-5 p-6 rounded-2xl border border-slate-700/50 bg-slate-800/20 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/40 hover:border-slate-600/60 transform hover:-translate-y-1">
                                <div className="flex-shrink-0 p-3 rounded-xl bg-slate-700/50 border border-slate-600/30 group-hover:bg-slate-600/60">
                                    <Phone className="w-6 h-6 text-slate-300" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Call Us</h3>
                                    <a href="tel:+919004001800" className="text-slate-300 hover:text-white transition-colors">
                                        +91 90040 01800
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 6s ease infinite;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    opacity: 0;
                    animation: fadeInUp 1s ease-out forwards;
                }

                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }

                @keyframes floatReverse {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(20px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float-reverse {
                    animation: floatReverse 10s ease-in-out infinite;
                }
                
                @keyframes floatSlow {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float-slow {
                    animation: floatSlow 12s ease-in-out infinite;
                }
            `}</style>
        </>
    );
};

export default ContactPage;