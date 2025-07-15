'use client';
import type React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h2 className="text-xl font-bold">Gerador de Prompt de IA</h2>
            </div>
            <p className="text-gray-400 max-w-xs">
              Crie prompts eficazes para geradores de IA com nossa ferramenta intuitiva de geração de prompts.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <h4 className="font-semibold text-lg mb-4">Produto</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Recursos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Preços</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Documentação</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Recursos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Tutoriais</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Suporte</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contato</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacidade</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gerador de Prompt de IA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
