'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Youtube, ShoppingCart, Video } from 'lucide-react';

const YoutubeProSection = () => {
  return (
    <section className="my-24">
      <Card className="w-full max-w-5xl mx-auto overflow-hidden bg-gradient-to-tr from-red-600/10 via-gray-900 to-black border-red-800/50 shadow-2xl shadow-red-500/10">
        <CardHeader className="text-center p-8">
          <div className="mx-auto mb-4">
             <Youtube className="h-16 w-16 text-red-500" />
          </div>
          <CardTitle className="text-3xl font-bold text-white tracking-tight">
            Método YouTube Pro - Ganhe Muito Dinheiro com o Seu Canal
          </CardTitle>
          <CardDescription className="text-gray-300 mt-2 text-lg max-w-3xl mx-auto">
            Descubra como criar, otimizar e monetizar seu canal no YouTube com o curso Método YouTube Pro! Mesmo sendo iniciante, aprenda técnicas de SEO, Google ADS e muito mais com 25 aulas em vídeo HD. Mais de 609 alunos já estão usando esse método – só falta você!
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 pt-0">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
             <Button asChild size="lg" className="bg-red-600 text-white hover:bg-red-700 font-bold">
                 <a href="https://go.hotmart.com/V100844965W" target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Acessar a Página de Vendas
                </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-red-500 hover:bg-red-500/10 hover:text-white">
                <a href="https://youtu.be/Wz6qLUkyRsA" target="_blank" rel="noopener noreferrer">
                    <Video className="mr-2 h-5 w-5" />
                    Assistir ao Vídeo
                </a>
            </Button>
          </div>
          <div className="text-center bg-white/5 p-4 rounded-lg mb-6">
            <p className="text-xl font-bold text-white">Faça sua inscrição agora por apenas <span className="text-green-400">R$29,99</span> ou 6x de <span className="text-green-400">R$5,99</span>!</p>
            <Button asChild className="mt-2 bg-green-500 hover:bg-green-600 text-white font-bold">
                <a href="https://go.hotmart.com/V100844965W" target="_blank" rel="noopener noreferrer">Inscreva-se aqui</a>
            </Button>
          </div>
          <div className="text-center text-xs text-gray-500">
            <p>Este produto é comercializado com o apoio da Hotmart. A plataforma não faz controle editorial prévio dos produtos comercializados, nem avalia a tecnicidade e experiência daqueles que os produzem. A existência de um produto e sua aquisição, por meio da plataforma, não podem ser consideradas como garantia de qualidade de conteúdo e resultado, em qualquer hipótese. Ao adquiri-lo, o comprador declara estar ciente dessas informações. Os termos e políticas da Hotmart podem ser acessados <a href="https://www.hotmart.com/legal/pt-BR" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-400">aqui</a>, antes mesmo da conclusão da compra.</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default YoutubeProSection;
