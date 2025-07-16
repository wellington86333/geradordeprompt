'use client';
import React from 'react';

const Header = () => {
  return (
    <header className="text-center my-10 md:my-12">
      <div className="mb-6">
        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
          🚀 Novo: Gerador Avançado de Prompts com 8+ Modelos de IA
        </span>
      </div>
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 gradient-text max-w-4xl mx-auto">
        Gerador Profissional de Prompts para IA
      </h1>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
        Crie prompts perfeitos para modelos de IA como ChatGPT, Claude, Gemini e Midjourney.
        Refine suas ideias e obtenha resultados incríveis em texto, código, imagens ou vídeo.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
        <span className="px-3 py-1 bg-secondary/50 rounded-full">✨ Português e Inglês</span>
        <span className="px-3 py-1 bg-secondary/50 rounded-full">🤖 8+ Modelos de IA</span>
        <span className="px-3 py-1 bg-secondary/50 rounded-full">💾 Salvamento e Histórico</span>
        <span className="px-3 py-1 bg-secondary/50 rounded-full">📱 Responsivo</span>
      </div>
    </header>
  );
};

export default Header;
