'use client';
import type React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLockOpen, faClock } from '@fortawesome/free-solid-svg-icons';

type CTASectionProps = {
  title: string;
  description: string;
  buttonText: string;
  link: string;
};

const CTASection: React.FC<CTASectionProps> = ({ title, description, buttonText, link }) => {
  return (
    <section className="text-center p-10 bg-gradient-to-r from-[hsl(var(--primary-hsl),0.2)] to-[hsl(var(--secondary-hsl),0.2)] rounded-2xl my-10 border border-border relative overflow-hidden">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,hsl(var(--accent-hsl),0.1)_0%,transparent_70%)] z-0 animate-[rotate_20s_linear_infinite]"></div>
        <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">{title}</h2>
            <p className="max-w-2xl mx-auto mb-8 text-muted-foreground text-lg">{description}</p>
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-white text-lg font-semibold px-12 py-4 rounded-full transition-all duration-300 shadow-[0_5px_20px_hsl(var(--secondary-hsl),0.4)] hover:transform hover:-translate-y-1 hover:shadow-[0_8px_25px_hsl(var(--secondary-hsl),0.6)] animated-gradient-bg"
            >
                <FontAwesomeIcon icon={faLockOpen} className="mr-3" />
                {buttonText}
            </a>
            <div className="inline-block bg-black/40 px-5 py-2 rounded-full mt-5 font-medium border border-accent animate-pulse-custom">
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                OFERTA POR TEMPO LIMITADO
            </div>
        </div>
    </section>
  );
};

export default CTASection;
