// app/components/sections/Header.tsx
'use client'

import { useState, useEffect, type FC } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrollY > 50
            ? 'bg-gray-900/90 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl'
            : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        {/*
                          KEY CHANGE: Applied a negative vertical margin (-my-6) here.
                          This allows the logo to be vertically larger than the navbar's height
                          without actually stretching the navbar. It essentially lets the logo
                          "bleed" out of the top and bottom.
                        */}
                        <Link href="/home" className="group -my-6 flex items-center transition-all duration-300 hover:scale-105">
                            {/* KEY CHANGE: Removed p-3 to eliminate extra vertical space */}
                            <div className="relative overflow-hidden">
                                <Image
                                    src="/logo.svg"
                                    alt="Juntoz Logo"
                                    width={200}
                                    height={120}
                                    // KEY CHANGE: Increased height from h-24 to h-28 to make the logo bigger
                                    className="h-28 w-auto object-contain transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
                                />
                            </div>
                        </Link>
                    </div>


                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {['Home', 'Services', 'About', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group"
                            >
                                <span className="relative z-10">{item}</span>
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                                <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden relative p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="relative w-6 h-6">
                            <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`} />
                            <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50">
                    <div className="px-4 py-6 space-y-1">
                        {['Home', 'Services', 'About', 'Contact'].map((item, index) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                                style={{
                                    animationDelay: `${index * 100}ms`
                                }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;