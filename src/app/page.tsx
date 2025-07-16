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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 py-8">
        <Header />
        <PromptGenerator />
        <FeaturesSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
