'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, ArrowRight, Star } from 'lucide-react';

const CTASection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-16">
      <Card className="w-full max-w-4xl mx-auto overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-primary/20 shadow-xl">
        <div className="p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforme suas ideias em prompts perfeitos
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experimente agora nosso gerador avançado e obtenha resultados superiores com qualquer modelo de IA
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToTop}
              size="lg" 
              className="animated-gradient-bg text-white font-bold transition-transform duration-300 hover:scale-105"
            >
              Criar Prompt Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:border-primary/60"
            >
              <Star className="mr-2 h-5 w-5 text-yellow-500" />
              Ver Exemplos
            </Button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <div className="px-4 py-2 bg-secondary/30 rounded-full text-sm">✨ 8+ Modelos de IA</div>
            <div className="px-4 py-2 bg-secondary/30 rounded-full text-sm">🧠 Templates Inteligentes</div>
            <div className="px-4 py-2 bg-secondary/30 rounded-full text-sm">🔄 Histórico e Salvamento</div>
            <div className="px-4 py-2 bg-secondary/30 rounded-full text-sm">🌐 Português e Inglês</div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default CTASection;