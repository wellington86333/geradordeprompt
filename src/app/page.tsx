'use client';
import React from 'react';
import Header from '@/components/app/Header';
import Footer from '@/components/app/Footer';
import PromptGenerator from '@/components/app/PromptGenerator';
import DraculaSection from '@/components/app/DraculaSection';
import LovartSection from '@/components/app/LovartSection';
import AbacusSection from '@/components/app/AbacusSection';
import YoutubeProSection from '@/components/app/YoutubeProSection';
import EcommerceIncubatorSection from '@/components/app/EcommerceIncubatorSection';
import StatsSection from '@/components/app/StatsSection';
import TestimonialsSection from '@/components/app/TestimonialsSection';
import FAQSection from '@/components/app/FAQSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 py-8">
        <Header />
        <PromptGenerator />
        <DraculaSection />
        <StatsSection />
        <TestimonialsSection />
        <LovartSection />
        <AbacusSection />
        <YoutubeProSection />
        <EcommerceIncubatorSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
