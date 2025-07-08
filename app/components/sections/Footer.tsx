// app/components/sections/Footer.tsx
import { type FC } from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';



const Footer: FC = () => (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
                <div className="col-span-2">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                        Juntoz
                    </div>
                    <p className="text-gray-400 mb-4">
                        Transforming businesses through innovative digital marketing strategies and creative excellence.
                    </p>

                    <div className="flex space-x-4">
                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/_juntoz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                        >
                            <FaInstagram className="text-white text-lg" />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/juntoz-digital-marketing-agency-b0a114290/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                        >
                            <FaLinkedinIn className="text-white text-lg" />
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Services</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-blue-400 transition-colors">SEO Optimization</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Social Media</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">PPC Advertising</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Web Development</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>+91 9004001800</li>
                        <li>official.Juntoz@gmail.com</li>
                        <li>Mumbai, India</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>© 2025 Juntoz. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;