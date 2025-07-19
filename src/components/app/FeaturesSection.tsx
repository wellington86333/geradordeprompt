'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Bot, Sparkles, Layout, Palette, Lightbulb, 
  Languages, History, Download, Share2, Settings
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <Card className="border-border/40 hover:border-primary/40 transition-all hover:shadow-md">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Bot className="h-6 w-6 text-primary" />,
      title: "Múltiplos Modelos de IA",
      description: "Suporte para 8+ modelos de IA incluindo ChatGPT, Claude, Gemini, Midjourney e mais."
    },
    {
      icon: <Layout className="h-6 w-6 text-primary" />,
      title: "Templates Prontos",
      description: "Biblioteca de templates organizados por categoria para diferentes tipos de conteúdo."
    },
    {
      icon: <Palette className="h-6 w-6 text-primary" />,
      title: "Personalização Avançada",
      description: "Ajuste tom, complexidade e instruções específicas para resultados perfeitos."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Recomendações Inteligentes",
      description: "Sugestões automáticas de modelos e configurações baseadas no seu objetivo."
    },
    {
      icon: <Languages className="h-6 w-6 text-primary" />,
      title: "Suporte Multilíngue",
      description: "Gere prompts em português ou inglês para compatibilidade com qualquer modelo."
    },
    {
      icon: <History className="h-6 w-6 text-primary" />,
      title: "Histórico e Salvamento",
      description: "Acesse prompts recentes e salve seus favoritos para uso futuro."
    },
    {
      icon: <Download className="h-6 w-6 text-primary" />,
      title: "Exportação Fácil",
      description: "Baixe seus prompts como arquivos de texto ou copie diretamente para a área de transferência."
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: "Configurações Avançadas",
      description: "Controle total sobre parâmetros e instruções para usuários experientes."
    },
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Recursos Poderosos</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Nosso gerador de prompts foi projetado para maximizar seus resultados com modelos de IA
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Feature 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;