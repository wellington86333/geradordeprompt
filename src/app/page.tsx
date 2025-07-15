'use client';
import React from 'react';
import Header from '@/components/app/Header';
import Footer from '@/components/app/Footer';
import PromptGenerator from '@/components/app/PromptGenerator';
import LovartSection from '@/components/app/LovartSection';
import AbacusSection from '@/components/app/AbacusSection';
import YoutubeProSection from '@/components/app/YoutubeProSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 py-8">
        <Header />
        <PromptGenerator />
        <LovartSection />
        <AbacusSection />
        <YoutubeProSection />
      </main>
      <Footer />
    </div>
  );
}
