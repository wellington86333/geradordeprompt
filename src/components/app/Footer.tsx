'use client';
import type React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary/20 border-t border-border py-6 text-center text-muted-foreground">
      <div className="container mx-auto px-4">
        <p className="text-sm mb-2">
          Gerador de prompt perfeito para vídeos em VO3 da Google. Inspirado e adaptado de VEO3 - Fazedor de Prompts por Bruno Somma Bechieli.
        </p>
        <p className="text-xs">&copy; {year} Gerador de Prompts. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
