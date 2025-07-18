'use client';
import React from 'react';
import Header from '@/components/app/Header';
import Footer from '@/components/app/Footer';
import PromptGenerator from '@/components/app/PromptGenerator';
import FeaturesSection from '@/components/app/FeaturesSection';
import StatsSection from '@/components/app/StatsSection';
import TestimonialsSection from '@/components/app/TestimonialsSection';
import FAQSection from '@/components/app/FAQSection';
import CTASection from '@/components/app/CTASection';
import DraculaSection from '@/components/app/DraculaSection';
import AbacusSection from '@/components/app/AbacusSection';
import MouseAnimation from '@/components/app/MouseAnimation';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Animação do ratinho */}
      <MouseAnimation />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Header />
        <PromptGenerator />
        <FeaturesSection />
        <DraculaSection />
        <StatsSection />
        <TestimonialsSection />
        <AbacusSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
