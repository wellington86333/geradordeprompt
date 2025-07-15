'use client';
import type React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center py-8 text-gray-400 text-sm border-t border-white/10">
      <p>© {year} Lovart - O Primeiro Agente de Design com IA. Todos os direitos reservados.</p>
      <p>Os códigos promocionais são válidos até o término do programa beta ou enquanto durarem os estoques.</p>
    </footer>
  );
};

export default Footer;
