'use client';
import React from 'react';

const Header = () => {
  return (
    <header className="text-center my-12 md:my-16">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 gradient-text">
        Gerador de Prompts Aleatoriamente Redundântico
      </h1>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
        Crie prompts perfeitos para modelos como Claude, Perplexity, Gemini e VO3 Google.
        Refine sua ideia e obtenha resultados incríveis em texto, código ou vídeo.
      </p>
    </header>
  );
};

export default Header;
