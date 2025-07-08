// app/components/sections/CtaSection.tsx
import { type FC } from 'react';

const CtaSection: FC = () => (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Let&apos;s discuss how we can help you achieve your digital marketing goals and drive exceptional growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Get Free Consultation
                </button>
                <button className="border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                    View Case Studies
                </button>
            </div>
        </div>
    </section>
);

export default CtaSection;