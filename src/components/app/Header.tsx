'use client';
import type React from 'react';

const Header = () => {
  return (
    <header className="text-center mb-10 animate-fadeInDown">
      <h1 className="font-montserrat text-6xl font-black mb-2 tracking-wider animated-gradient-text text-shadow-[0_5px_15px_hsl(var(--primary-hsl),0.3)]">
        LOVART
      </h1>
      <p className="text-xl max-w-3xl mx-auto mb-5 text-muted-foreground font-light">
        O primeiro agente de design com IA que transforma suas ideias em realidade
      </p>
      <p className="text-base text-accent max-w-2xl mx-auto leading-relaxed font-medium">
        Crie designs profissionais em segundos, sem necessidade de habilidades técnicas. Logos, banners, interfaces e muito mais!
      </p>
    </header>
  );
};

export default Header;
