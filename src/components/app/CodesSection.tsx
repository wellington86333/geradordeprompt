'use client';
import { useState } from 'react';
import { referralCodes, ReferralCode } from '@/lib/data';
import { useToast } from "@/hooks/use-toast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCopy } from '@fortawesome/free-solid-svg-icons';

const CodeCard: React.FC<{ item: ReferralCode }> = ({ item }) => {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(item.code).then(() => {
      toast({
        title: "Código Copiado!",
        description: `${item.code} foi copiado para a área de transferência.`,
      });
    });
  };

  return (
    <div 
      className="bg-white/5 rounded-2xl p-6 text-center transition-all duration-300 ease-in-out border border-border relative overflow-hidden group hover:transform hover:-translate-y-2 hover:bg-[hsl(var(--primary-hsl),0.1)] hover:shadow-2xl hover:shadow-[hsl(var(--primary-hsl),0.2)] hover:border-primary"
    >
      <div className="absolute top-0 left-0 w-full h-1 animated-gradient-bg"></div>
      <div className="text-base mb-4 text-muted-foreground">{item.label}</div>
      <span className="font-mono text-3xl font-bold p-3 my-4 block bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
        {item.code}
      </span>
      <p className="text-gray-400 mb-5 text-sm">{item.description}</p>
      <div className="flex items-center justify-center text-sm text-yellow-400">
        <FontAwesomeIcon icon={faStar} className="mr-2" />
        <span>{item.audience}</span>
      </div>
      <button onClick={handleCopy} className="absolute top-4 right-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-white">
        <FontAwesomeIcon icon={faCopy} />
      </button>
    </div>
  );
};

const CodesSection = () => {
  return (
    <section className="my-10">
      <h2 className="section-title">Códigos de Acesso Exclusivo</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {referralCodes.map((codeItem, index) => (
          <CodeCard key={index} item={codeItem} />
        ))}
      </div>
    </section>
  );
};

export default CodesSection;
