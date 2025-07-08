'use client';

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';

// You can keep any icons you might want to use, for example:
// import { Briefcase, Linkedin } from 'lucide-react';

const AboutPage: FC = () => {
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
            <section className="relative min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20">
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
                <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-slate-500/10 rounded-full blur-3xl animate-float"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                    {/* --- Story and CEO Section --- */}
                    <div className="text-center space-y-8 animate-fade-in-up">
                        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                            <span className="block text-white">Our</span>
                            <span className="block bg-gradient-to-r from-slate-300 via-gray-200 to-slate-300 bg-clip-text text-transparent animate-gradient">
                                Story
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Juntoz was born from a vision to demystify digital marketing and deliver tangible results. Our name, inspired by the Spanish word for &apos;together&apos;, reflects our core belief in collaborative partnership and shared success.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="md:col-span-1 flex justify-center">
                            <Image
                                src="/sujal.png"
                                alt="Sujal Mehta, Founder of Juntoz"
                                className="h-60 md:h-72 rounded-full object-cover border-4 border-slate-700/60 shadow-xl"
                            />


                        </div>
                        <div className="md:col-span-2 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-white">Sujal Mehta</h2>
                            <p className="text-lg text-slate-400 mb-4">Founder &amp; CEO</p>
                            <p className="text-gray-300 leading-relaxed">
                                &ldquo;I lead the growth and strategic direction of Juntoz, ensuring we deliver impactful solutions that help brands scale and succeed in the digital world. My passion is to build a company that thrives on innovation, collaboration, and a relentless focus on our clients&apos; goals.&rdquo;
                            </p>
                        </div>

                    </div>


                    {/* --- Team Section --- */}
                    <div className="space-y-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <div className="text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-white">Meet the Team</h2>
                            <p className="text-lg text-gray-400 mt-2">The creative minds behind your brand&apos;s success.</p>
                        </div>

                        {/* Employee Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="group relative p-6 text-center rounded-2xl border border-slate-700/50 bg-slate-800/20 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/40 hover:border-slate-600/60 hover:shadow-2xl hover:shadow-slate-700/30 transform hover:-translate-y-2"
                                >
                                    <Image
                                        src={member.imageUrl}
                                        alt={`Photo of ${member.name}`}
                                        className="w-28 h-40 rounded-full object-cover mx-auto mb-4 border-2 border-slate-600/50 group-hover:border-slate-500/70 transition-all duration-300"
                                    />
                                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                    <p className="text-slate-400 mb-3">{member.title}</p>
                                    <p className="text-sm text-gray-400 leading-snug group-hover:text-gray-300 transition-colors">
                                        {member.description}
                                    </p>
                                </div>
                            ))}
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

const teamMembers = [
    {
        name: 'Charmi Jain',
        title: 'Social Media Manager',
        description: 'Managing channels with purpose, blending trends with strategy to build authentic connections.',
        imageUrl: '/charmi.jpeg',
    },
    {
        name: 'Akshat Mehta',
        title: 'Sr. Social Media Manager & Designer',
        description: 'Crafting strategies and scroll-stopping visuals that help brands stand out online.',
        imageUrl: '/akshat.png',
    },
    {
        name: 'Tamanna',
        title: 'Senior Social Media Manager',
        description: 'Blending creativity and data to drive real engagement and help brands find their unique voice.',
        imageUrl: '/tamanna.jpeg',
    },
    {
        name: 'Manvi Jain',
        title: 'Senior Ad Specialist',
        description: 'Turning creative ideas into data-driven ad campaigns that deliver measurable results.',
        imageUrl: '/manvi.jpeg',
    },

    {
        name: 'Varshit Shah',
        title: 'Sr. Social Media Manager, Designer & Editor',
        description: 'Handling strategy, design, and editing to turn ideas into content that connects and delivers.',
        imageUrl: '/varshit.jpeg',
    },
    {
        name: 'Aachal',
        title: 'Social Media Manager',
        description: 'Crafting engaging stories that bring brands to life and build lasting digital communities.',
        imageUrl: '/aachal.jpeg',
    },
    {
        name: 'Rinku Sharma',
        title: 'Meta Ads Specialist',
        description: 'Helping brands grow smarter and faster by turning clicks into customers through strategic ads.',
        imageUrl: '/rinku.jpeg',
    },
    {
        name: 'Bhavya Mehta',
        title: 'Social Media Executive',
        description: 'Creating content that sparks conversations and grows communities, one post at a time.',
        imageUrl: 'https://i.ibb.co/1Q56402/Bhavya-Mehta.png',
    },
    {
        name: 'Piyush',
        title: 'Senior Video Editor',
        description: 'Bringing stories to life with powerful visuals and seamless edits that capture attention.',
        imageUrl: '/piyush.png',
    },
    {
        name: 'Heena Rathod',
        title: 'Admin & HR',
        description: 'Keeping our team running smoothly and creating a positive, organized workplace for everyone.',
        imageUrl: '/heena.png',
    },
];

export default AboutPage;