'use client';
import React from 'react';
import Header from '@/components/app/Header';
import FeaturesSection from '@/components/app/FeaturesSection';
import CodesSection from '@/components/app/CodesSection';
import CTASection from '@/components/app/CTASection';
import Footer from '@/components/app/Footer';

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen p-5">
      <div className="container max-w-6xl mx-auto">
        <Header />
        <main>
          <FeaturesSection />
          <CTASection
            title="Comece a criar designs incríveis hoje mesmo!"
            description="Junte-se à revolução do design com IA. Cadastre-se agora e use qualquer um dos nossos códigos exclusivos para desbloquear acesso VIP."
            buttonText="ACESSAR PLATAFORMA"
            link="https://www.lovart.ai"
          />
          <CodesSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
