'use client';
import type React from 'react';

type CTASectionProps = {
  title: string;
  description: string;
  buttonText: string;
  link: string;
};

const CTASection: React.FC<CTASectionProps> = ({ title, description, buttonText, link }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">{title}</h3>
        <p className="text-xl max-w-3xl mx-auto mb-8">{description}</p>
        <a href={link} className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium text-lg shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default CTASection;
