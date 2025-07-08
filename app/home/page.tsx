'use client';

import { useState, useEffect, type FC } from 'react';
import { ChevronRight, ArrowRight, Star, Users, Target, TrendingUp, CheckCircle, Quote } from 'lucide-react';
import Link from 'next/link';

const Home: FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
                {/* Interactive Mouse-Following Spotlight */}
                <div
                    className="pointer-events-none absolute inset-0 z-10 transition duration-700"
                    style={{
                        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(71, 85, 105, 0.15), transparent 80%)`,
                    }}
                ></div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-slate-600/10 rounded-full blur-3xl animate-float-slow"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-600/10 rounded-full blur-3xl animate-float-reverse"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-slate-500/10 rounded-full blur-3xl animate-float"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="space-y-8">
                        <h1
                            className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up"
                            style={{ animationDelay: '0.2s' }}
                        >
                            <span className="block text-white">Transform Your</span>
                            <span className="block bg-gradient-to-r from-slate-300 via-gray-200 to-slate-300 bg-clip-text text-transparent animate-gradient">
                                Digital Presence
                            </span>
                        </h1>

                        <p
                            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
                            style={{ animationDelay: '0.4s' }}
                        >
                            We craft data-driven digital marketing strategies that amplify your brand,
                            engage your audience, and drive exceptional growth.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
                            style={{ animationDelay: '0.6s' }}
                        >
                            <button className="group bg-gradient-to-r from-slate-700 to-slate-600 border border-slate-600/50 px-8 py-4 rounded-full text-lg font-semibold hover:from-slate-600 hover:to-slate-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-slate-700/50">
                                Start Your Journey
                                <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            {/* <button className="group border-2 border-slate-600 px-8 py-4 rounded-full text-lg font-semibold hover:border-slate-500 hover:bg-slate-500/10 transition-all duration-300">
                                View Our Work
                                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button> */}
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                    <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-slate-300 transition-colors">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 text-sm uppercase tracking-wide">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                Why Choose
                                <span className="block bg-gradient-to-r from-slate-300 to-gray-200 bg-clip-text text-transparent">
                                    Juntoz?
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                We're not just another digital agency. We're your strategic partner in building a powerful online presence that drives real results.
                            </p>
                            <div className="space-y-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-slate-400 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="text-white font-semibold">{feature.title}</h4>
                                            <p className="text-gray-400">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-slate-700/50 rounded-xl">
                                            <Target className="w-8 h-8 text-slate-300" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Strategic Approach</h3>
                                            <p className="text-gray-400">Data-driven decisions for maximum impact</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-slate-700/50 rounded-xl">
                                            <Users className="w-8 h-8 text-slate-300" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Expert Team</h3>
                                            <p className="text-gray-400">Skilled professionals across all disciplines</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-slate-700/50 rounded-xl">
                                            <TrendingUp className="w-8 h-8 text-slate-300" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Proven Results</h3>
                                            <p className="text-gray-400">Track record of successful campaigns</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-20 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Services
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                        Comprehensive digital marketing solutions tailored to your business needs
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {servicesPreview.map((service, index) => (
                            <div key={index} className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/60 transition-all duration-300 hover:transform hover:-translate-y-1">
                                <div className="p-4 bg-slate-700/50 rounded-xl w-fit mx-auto mb-4 group-hover:bg-slate-600/60 transition-colors">
                                    <service.icon className="w-8 h-8 text-slate-300" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-400">{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12">
                        <Link href="/services">
                            <button className="bg-gradient-to-r from-slate-700 to-slate-600 border border-slate-600/50 px-8 py-4 rounded-full text-lg font-semibold hover:from-slate-600 hover:to-slate-500 transition-all duration-300 transform hover:scale-105">
                                View All Services
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-slate-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                        What Our Clients Say
                    </h2>
                    <div className="relative">
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                            <Quote className="w-12 h-12 text-slate-400 mx-auto mb-6" />
                            <p className="text-xl text-gray-300 leading-relaxed mb-6">
                                "{testimonials[currentTestimonial].text}"
                            </p>
                            <div className="flex items-center justify-center gap-4">
                                <div className="text-center">
                                    <div className="text-white font-semibold">
                                        {testimonials[currentTestimonial].name}
                                    </div>
                                    <div className="text-gray-400 text-sm">
                                        {testimonials[currentTestimonial].role}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-2 mt-6">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-slate-400' : 'bg-slate-600'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-800/50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Let's discuss how we can help you achieve your digital marketing goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-slate-700 to-slate-600 border border-slate-600/50 px-8 py-4 rounded-full text-lg font-semibold hover:from-slate-600 hover:to-slate-500 transition-all duration-300 transform hover:scale-105">
                            Get Started Today
                        </button>
                        <button className="border-2 border-slate-600 px-8 py-4 rounded-full text-lg font-semibold hover:border-slate-500 hover:bg-slate-500/10 transition-all duration-300">
                            Schedule a Call
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
            `}</style>
        </>
    );
};

const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '100+', label: 'Happy Clients' },
    { value: '50+', label: 'Team Members' },
    { value: '24/7', label: 'Support Available' }
];

const features = [
    {
        title: 'Data-Driven Strategies',
        description: 'Every campaign is backed by thorough research and analytics'
    },
    {
        title: 'Custom Solutions',
        description: 'Tailored approaches that fit your unique business needs'
    },
    {
        title: 'Transparent Reporting',
        description: 'Clear metrics and regular updates on campaign performance'
    },
    {
        title: 'Dedicated Support',
        description: '24/7 customer support with dedicated account managers'
    }
];

const servicesPreview = [
    {
        title: 'Social Media Marketing',
        description: 'Build your brand presence across all social platforms',
        icon: Users
    },
    {
        title: 'Digital Advertising',
        description: 'Targeted ad campaigns that drive real results',
        icon: Target
    },
    {
        title: 'Growth Strategy',
        description: 'Comprehensive planning for sustainable business growth',
        icon: TrendingUp
    }
];

const testimonials = [
    {
        text: "Juntoz transformed our digital presence completely. Our social media engagement increased by 300% and lead generation improved dramatically.",
        name: "Sarah Johnson",
        role: "CEO, TechStart Inc."
    },
    {
        text: "The team at Juntoz is incredibly professional and results-driven. They helped us achieve our marketing goals ahead of schedule.",
        name: "Michael Chen",
        role: "Marketing Director, GrowthCorp"
    },
    {
        text: "Outstanding service and exceptional results. Juntoz has been instrumental in scaling our business to new heights.",
        name: "Emily Rodriguez",
        role: "Founder, Digital Solutions"
    }
];

export default Home;