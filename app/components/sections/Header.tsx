// app/components/sections/Header.tsx
'use client'

import { useState, useEffect, type FC } from 'react';
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
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Juntoz
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/home" className="hover:text-blue-400 transition-all duration-300 transform hover:scale-105">Home</Link>
                        <Link href="/services" className="block hover:text-blue-400 transition-colors">Services</Link>
                        <Link href="/about" className="hover:text-blue-400 transition-all duration-300 transform hover:scale-105">About</Link>
                        <Link href="/contact" className="hover:text-blue-400 transition-all duration-300 transform hover:scale-105">Contact</Link>

                    </div>


                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
                    <div className="px-4 py-4 space-y-4">
                        <Link href="/home" className="block hover:text-blue-400 transition-colors">Home</Link>
                        <Link href="/services" className="block hover:text-blue-400 transition-colors">Services</Link>
                        <Link href="/about" className="block hover:text-blue-400 transition-colors">About</Link>
                        <Link href="/contact" className="block hover:text-blue-400 transition-colors">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;