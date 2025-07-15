'use client';
import React from 'react';

const Header = () => {
  return (
    <header className="text-center my-10 md:my-12">
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 gradient-text max-w-4xl mx-auto">
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
