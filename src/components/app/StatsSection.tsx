'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, Bot, Sparkles, Zap
} from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ icon, value, label }) => {
  return (
    <Card className="border-border/40">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-3xl font-bold mb-1">{value}</h3>
        <p className="text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Resultados Comprovados</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Nosso gerador de prompts está ajudando milhares de usuários a obter melhores resultados
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Stat 
          icon={<Users className="h-6 w-6 text-primary" />}
          value="10,000+"
          label="Usuários Ativos"
        />
        <Stat 
          icon={<Bot className="h-6 w-6 text-primary" />}
          value="8+"
          label="Modelos de IA Suportados"
        />
        <Stat 
          icon={<Sparkles className="h-6 w-6 text-primary" />}
          value="500,000+"
          label="Prompts Gerados"
        />
        <Stat 
          icon={<Zap className="h-6 w-6 text-primary" />}
          value="85%"
          label="Melhoria na Qualidade"
        />
      </div>
    </section>
  );
};

export default StatsSection;