
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Rocket, CheckCircle2, Star, Zap, Brain, Sparkles, ArrowRight } from 'lucide-react';

const AbacusSection = () => {
  return (
    <section className="my-24 relative">
      {/* Efeito de brilho de fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 rounded-3xl blur-3xl -z-10"></div>
      
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium mb-4 border border-purple-500/20">
          🚀 DESTAQUE ESPECIAL
        </span>
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Abacus.ai - Revolucionando a IA
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A plataforma que está transformando a maneira como interagimos com inteligência artificial
        </p>
      </div>
      
      <Card className="w-full mx-auto overflow-hidden bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-black border-purple-800/50 shadow-2xl shadow-purple-500/20 animate-[pulse-glow_8s_ease-in-out_infinite]">
        <CardHeader className="text-center p-8">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-purple-600/20 flex items-center justify-center">
              <Brain className="h-8 w-8 text-purple-400" />
            </div>
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Potencialize seus estudos e trabalho com IA avançada!
          </CardTitle>
          <CardDescription className="text-purple-300 mt-4 text-lg max-w-3xl mx-auto">
            Experimente a plataforma Abacus.ai - uma solução de IA de última geração que responde dúvidas complexas, 
            ajuda em projetos e evolui com cada interação! 🤖✨
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white mb-10">
            <div className="flex flex-col items-center gap-3 bg-white/5 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:bg-white/10">
              <Zap className="h-10 w-10 text-purple-400 mb-2" />
              <h3 className="font-bold text-lg">Respostas Instantâneas</h3>
              <p className="text-center text-purple-200 text-sm">Obtenha respostas precisas em segundos para qualquer pergunta</p>
            </div>
            <div className="flex flex-col items-center gap-3 bg-white/5 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:bg-white/10">
              <Brain className="h-10 w-10 text-purple-400 mb-2" />
              <h3 className="font-bold text-lg">Compreensão Profunda</h3>
              <p className="text-center text-purple-200 text-sm">Entende contexto complexo e fornece análises detalhadas</p>
            </div>
            <div className="flex flex-col items-center gap-3 bg-white/5 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:bg-white/10">
              <Sparkles className="h-10 w-10 text-purple-400 mb-2" />
              <h3 className="font-bold text-lg">Totalmente Gratuito</h3>
              <p className="text-center text-purple-200 text-sm">Acesso completo a recursos premium sem custo algum</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl mb-8 border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center">
              <Star className="h-5 w-5 text-yellow-400 mr-2" /> Por que escolher Abacus.ai?
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-purple-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>Modelos de IA de última geração</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>Interface intuitiva e amigável</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>Suporte para múltiplos idiomas</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>Ideal para estudantes e profissionais</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>Processamento de dados seguro</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>Atualizações constantes</span>
              </li>
            </ul>
          </div>
          
          <div className="text-center">
            <p className="text-purple-200 text-lg mb-4">✨ Acesse AGORA com nosso link exclusivo: ✨</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg px-10 py-6 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-600/30"
              >
                <a href="https://chatllm.abacus.ai/DbSYXfKFPs" target="_blank" rel="noopener noreferrer">
                  <Rocket className="mr-3" />
                  Acessar Abacus.ai
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-purple-500/30 text-purple-300 hover:text-purple-200 hover:border-purple-500/50 font-medium"
              >
                <a href="https://abacus.ai" target="_blank" rel="noopener noreferrer">
                  Saiba Mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs text-white">JM</div>
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs text-white">TS</div>
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs text-white">RL</div>
                <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-xs text-white">+5</div>
              </div>
              <p className="ml-3 text-sm text-purple-300">
                <span className="font-semibold">1,500+ usuários</span> já estão aproveitando!
              </p>
            </div>
            
            <p className="mt-6 text-sm text-purple-400 animate-pulse">
              Vagas limitadas para acesso gratuito! Garanta a sua agora 🔥
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AbacusSection;
