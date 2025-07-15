'use client';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/app/Header';
import Footer from '@/components/app/Footer';
import CTASection from '@/components/app/CTASection';
import PromptGenerator from '@/components/app/PromptGenerator';
import DarkModeToggle from '@/components/app/DarkModeToggle';
import ContactSection from '@/components/app/ContactSection';


export default function Home() {
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className='fixed top-20 right-4 z-50'>
        <DarkModeToggle />
      </div>

       {/* Hero Section */}
       <CTASection
        title="Crie Prompts de IA Perfeitos"
        description="Gere prompts eficazes para VO3 Google, ChatGPT, MidJourney e outras ferramentas de IA com nossa interface simplificada."
        buttonText="Comece a Gerar"
        link="#gerador"
      />
      
      {/* AI Prompt Generator Section */}
      <section id="gerador" className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">Gerador de Prompt de IA</h2>
          <p className="text-center text-muted-foreground mt-2 mb-10 max-w-2xl mx-auto">
            Gerador de prompt perfeito para vídeos em VO3 da Google. Inspirado e adaptado de <a href="https://chatgpt.com/g/g-686d94b362048191af9ce1fcc9f46b9e-veo3-fazedor-de-prompts" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">VEO3 - Fazedor de Prompts</a> por Bruno Somma Bechieli.
          </p>
          <PromptGenerator />
        </div>
      </section>

      {/* Funny Image Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">A cara que você faz quando seu prompt dá errado...</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Todos nós já passamos por isso. Você tem uma ideia genial, digita o prompt com toda a confiança do mundo, e a IA te devolve... algo que só pode ser descrito como um pesadelo digital.
              </p>
              <p className="text-lg text-muted-foreground">
                Não se desespere! Nosso gerador está aqui para evitar que você arranque os cabelos (ou o que sobrou deles).
              </p>
            </div>
            <div className="flex justify-center">
              <Image 
                src="https://storage.googleapis.com/genai_studio_project_052324_021909/f6c40608-d14c-4235-8664-9b5783359c34.jpeg" 
                alt="Rosto frustrado com prompt de IA"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                data-ai-hint="frustrated man"
              />
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />

      {/* CTA Section */}
      <CTASection
        title="Comece a Criar Melhores Prompts de IA Hoje"
        description="Seja para criar texto, imagens ou outro conteúdo com IA, nosso gerador de prompts o ajudará a obter melhores resultados com menos esforço."
        buttonText="Experimente o Gerador de Prompts"
        link="#gerador"
      />

      <Footer />
    </div>
  );
}
