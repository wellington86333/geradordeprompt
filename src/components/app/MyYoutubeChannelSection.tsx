'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Youtube, Clapperboard, BrainCircuit, Star } from 'lucide-react';

const MyYoutubeChannelSection = () => {
  return (
    <section className="my-16">
      <Card className="w-full max-w-4xl mx-auto overflow-hidden bg-gradient-to-tr from-red-900 via-black to-black border-red-800/50 shadow-2xl shadow-red-500/10">
        <CardHeader className="text-center p-8">
          <div className="mx-auto mb-4">
             <Youtube className="h-16 w-16 text-red-500 animate-pulse" />
          </div>
        </CardHeader>
        <CardContent className="p-8 pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white mb-8 text-center">
                <div className="bg-white/5 p-4 rounded-lg flex flex-col items-center justify-center">
                    <Clapperboard className="h-8 w-8 text-red-400 mb-2" />
                    <span className="font-bold">Conteúdo Semanal</span>
                    <p className="text-xs text-red-300">Novos vídeos toda semana.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg flex flex-col items-center justify-center">
                    <BrainCircuit className="h-8 w-8 text-red-400 mb-2" />
                    <span className="font-bold">Tutoriais de IA</span>
                    <p className="text-xs text-red-300">Aprenda de forma prática.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg flex flex-col items-center justify-center">
                    <Star className="h-8 w-8 text-yellow-400 mb-2" />
                    <span className="font-bold">Projetos Inovadores</span>
                     <p className="text-xs text-red-300">Inspire-se com novas ideias.</p>
                </div>
            </div>
          <div className="text-center">
            <Button
              size="lg"
              asChild
              className="bg-red-600 text-white font-bold text-lg px-10 py-6 rounded-full hover:bg-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/50"
            >
              <a href="https://www.youtube.com/@Aleat%C3%B3riamenteredund%C3%A2ntico" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-3" />
                Inscreva-se Agora!
              </a>
            </Button>
            <p className="mt-4 text-sm text-red-300 animate-pulse">
              Junte-se à nossa comunidade de criadores e entusiastas de IA!
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default MyYoutubeChannelSection;
