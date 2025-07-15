
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Rocket, CheckCircle2 } from 'lucide-react';

const AbacusSection = () => {
  return (
    <section className="my-24">
      <Card className="w-full mx-auto overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-black border-purple-800/50 shadow-2xl shadow-purple-500/10">
        <CardHeader className="text-center p-8">
          <div className="text-4xl mb-4">🌟</div>
          <CardTitle className="text-3xl font-bold text-white tracking-tight">
            Descubra a IA que vai revolucionar seus estudos e trabalho!
          </CardTitle>
          <CardDescription className="text-purple-300 mt-2 text-lg max-w-2xl mx-auto">
            Amigo(a), acabei de testar uma plataforma incrível de chat com IA super avançada! 🤖💬 Ela responde dúvidas complexas, ajuda em projetos e ainda aprende com cada interação!
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white mb-8">
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
              <CheckCircle2 className="h-6 w-6 text-green-400" />
              <span className="font-medium">Totalmente GRÁTIS</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
              <CheckCircle2 className="h-6 w-6 text-green-400" />
              <span className="font-medium">Respostas instantâneas</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
              <CheckCircle2 className="h-6 w-6 text-green-400" />
              <span className="font-medium">Entende contexto profundo</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
              <CheckCircle2 className="h-6 w-6 text-green-400" />
              <span className="font-medium">Ideal para estudos/profissional</span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-purple-200 text-lg mb-4">✨ Acesse AGORA com meu link exclusivo: ✨</p>
            <Button
              size="lg"
              asChild
              className="bg-purple-600 text-white font-bold text-lg px-10 py-6 rounded-full hover:bg-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-600/50"
            >
              <a href="https://chatllm.abacus.ai/DbSYXfKFPs" target="_blank" rel="noopener noreferrer">
                <Rocket className="mr-3" />
                Acessar Plataforma
              </a>
            </Button>
            <p className="mt-6 text-sm text-purple-400 animate-pulse">
              Não fique de fora - é limitado! Experimente e me diga o que achou 😉🔥
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AbacusSection;
