'use client';

import { FC, useState, useEffect } from 'react';
import { ChevronRight, Instagram, Youtube, Facebook, Star, Globe, Palette, Video, MessageSquare, Target, Users } from 'lucide-react';

const ServicesPage: FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredService, setHoveredService] = useState<number | null>(null);

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
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
                {/* Subtle Mouse Spotlight */}
                <div
                    className="pointer-events-none absolute inset-0 z-10 transition duration-700"
                    style={{
                        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(71, 85, 105, 0.15), transparent 70%)`,
                    }}
                ></div>

                {/* Refined Floating Elements */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-slate-600/10 rounded-full blur-3xl animate-float-slow"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-600/10 rounded-full blur-3xl animate-float-reverse"></div>
                <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-slate-500/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-gray-500/10 rounded-full blur-3xl animate-float-slow"></div>

                {/* Minimal Geometric Patterns */}
                <div className="absolute top-10 right-20 w-16 h-16 border border-slate-600/20 rotate-45 animate-spin-slow"></div>
                <div className="absolute bottom-32 left-20 w-12 h-12 border border-gray-600/20 rotate-12 animate-pulse"></div>

                <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
                    <div className="space-y-8">
                        <h1 className="text-6xl md:text-8xl font-bold leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <span className="block text-white">Our</span>
                            <span className="block bg-gradient-to-r from-slate-300 via-gray-200 to-slate-300 bg-clip-text text-transparent animate-gradient">
                                Services
                            </span>
                        </h1>

                        <div className="relative">
                            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                At <span className="text-slate-300 font-bold text-2xl">Juntoz</span>, we offer 360° digital marketing solutions to grow your brand and drive exceptional results.
                            </p>
                            <div className="absolute -top-2 -right-2 w-3 h-3 bg-slate-400 rounded-full animate-ping"></div>
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        {servicesList.map((service, index) => (
                            <div
                                key={index}
                                className={`group relative p-6 rounded-2xl border border-slate-700/50 bg-slate-800/20 backdrop-blur-sm transition-all duration-500 hover:bg-slate-800/40 hover:border-slate-600/60 hover:shadow-2xl hover:shadow-slate-700/30 cursor-pointer transform hover:-translate-y-1 ${hoveredService === index ? 'scale-[1.02]' : ''
                                    }`}
                                onMouseEnter={() => setHoveredService(index)}
                                onMouseLeave={() => setHoveredService(null)}
                            >
                                {/* Service Icon */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-slate-700/50 border border-slate-600/30 transition-all duration-300 group-hover:bg-slate-600/60 group-hover:border-slate-500/40">
                                        <service.icon className="w-6 h-6 text-slate-300 group-hover:text-slate-200" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-slate-200 transition-colors">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Service Description */}
                                <p className="text-gray-400 text-left leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {service.description}
                                </p>

                                {/* Hover Arrow */}
                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ChevronRight className="w-5 h-5 text-slate-400" />
                                </div>

                                {/* Subtle Hover Border */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-600/10 via-gray-600/10 to-slate-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="pt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-600 border border-slate-600/50 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:from-slate-600 hover:to-slate-500 hover:border-slate-500/60 hover:shadow-2xl hover:shadow-slate-700/50 hover:scale-105">
                            <span className="relative z-10">Get Started Today</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-500/20 to-slate-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                        </button>
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
                    0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) translateX(10px) rotate(8deg); }
                    100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
                }
                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }

                @keyframes floatReverse {
                    0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
                    50% { transform: translateY(20px) translateX(-10px) rotate(-8deg); }
                    100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
                }
                .animate-float-reverse {
                    animation: floatReverse 10s ease-in-out infinite;
                }

                @keyframes floatSlow {
                    0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
                    50% { transform: translateY(-25px) translateX(15px) rotate(12deg); }
                    100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
                }
                .animate-float-slow {
                    animation: floatSlow 12s ease-in-out infinite;
                }

                @keyframes spinSlow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spinSlow 30s linear infinite;
                }
            `}</style>
        </>
    );
};

const servicesList = [
    {
        title: 'Instagram Handling & Lead Generation',
        description: 'Grow your brand presence and generate quality leads with strategic Instagram management and targeted campaigns.',
        icon: Instagram
    },
    {
        title: 'YouTube Monetization & Growth',
        description: 'Optimize your content, grow subscribers, and unlock revenue potential from your YouTube channel with proven strategies.',
        icon: Youtube
    },
    {
        title: 'Facebook & Google Ads',
        description: 'Targeted ad campaigns that drive traffic, conversions, and measurable ROI across multiple platforms.',
        icon: Facebook
    },
    {
        title: 'Google Reviews Management',
        description: 'Build trust and credibility with a strong online reputation through authentic Google reviews and response management.',
        icon: Star
    },
    {
        title: 'Website Development',
        description: 'Modern, mobile-friendly, and SEO-optimized websites that elevate your digital identity and user experience.',
        icon: Globe
    },
    {
        title: 'Creative Graphics & Logo Design',
        description: 'Visual storytelling that strengthens your brand through stunning creatives, logos, and brand identity systems.',
        icon: Palette
    },
    {
        title: 'Reel Editing & Content Creation',
        description: 'High-impact short-form content tailored to engage your audience and boost visibility across social platforms.',
        icon: Video
    },
    {
        title: 'SMS Panel & Marketing',
        description: 'Directly connect with your customers through effective bulk SMS campaigns and automated messaging systems.',
        icon: MessageSquare
    },
    {
        title: 'Complete Branding Solutions',
        description: 'From brand identity to strategy — we ensure consistency, creativity, and impact across all touchpoints.',
        icon: Target
    },
    {
        title: 'HR Recruitment Support',
        description: 'End-to-end hiring assistance to help you find the right talent for your business growth and success.',
        icon: Users
    },
];
export default ServicesPage;