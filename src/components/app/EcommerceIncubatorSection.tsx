'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Store, Users, DollarSign, ExternalLink } from 'lucide-react';

const EcommerceIncubatorSection = () => {
  return (
    <section className="my-16">
      <Card className="w-full max-w-4xl mx-auto overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-black border-cyan-800/50 shadow-2xl shadow-cyan-500/10">
        <CardHeader className="text-center p-8">
          <div className="mx-auto mb-4">
             <Store className="h-16 w-16 text-cyan-400" />
          </div>
          <CardTitle className="text-3xl font-bold text-white tracking-tight">
            Incubadora E-Commerce
          </CardTitle>
          <CardDescription className="text-cyan-200 mt-2 text-lg max-w-3xl mx-auto">
            Transforme sua vida digital! Aprenda a ganhar milhares de seguidores, monetize com marketing de afiliados e potencie sua mentalidade com mais de 20 aulas sobre PNL.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white mb-8 text-center">
            <div className="bg-white/5 p-4 rounded-lg">
                <Users className="h-8 w-8 mx-auto text-cyan-400 mb-2" />
                <span className="font-bold">Bônus Exclusivos</span>
                <p className="text-xs text-cyan-300">Videochamadas, suporte 24/7 e grupo privado.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
                <DollarSign className="h-8 w-8 mx-auto text-green-400 mb-2" />
                <span className="font-bold">Monetização</span>
                 <p className="text-xs text-cyan-300">Aprenda a faturar seus primeiros $500 USD.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
                <span className="text-3xl font-bold text-yellow-400">19+</span>
                <p className="font-bold">Avaliações 5 Estrelas</p>
                 <p className="text-xs text-cyan-300">Qualidade comprovada por nossos alunos.</p>
            </div>
          </div>

           <div className="text-center bg-cyan-900/50 p-6 rounded-lg mb-6 border border-cyan-700">
            <p className="text-xl font-bold text-white">Comece agora por apenas <span className="text-green-400">$77,00</span>!</p>
            <Button asChild className="mt-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold">
                <a href="https://go.hotmart.com/T100845258U" target="_blank" rel="noopener noreferrer">Inscreva-se aqui</a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
             <Button asChild size="lg" className="bg-cyan-600 text-white hover:bg-cyan-700 font-bold">
                 <a href="https://go.hotmart.com/T100845258U" target="_blank" rel="noopener noreferrer">
                    <Store className="mr-2 h-5 w-5" />
                    Acessar Página de Vendas
                </a>
            </Button>
            <div className="flex gap-2">
                <Button asChild variant="outline" className="text-white border-cyan-500 hover:bg-cyan-500/10 hover:text-white">
                    <a href="https://go.hotmart.com/T100845258U?ap=7af6" target="_blank" rel="noopener noreferrer"><ExternalLink className="mr-2 h-4 w-4"/> Opção 1</a>
                </Button>
                 <Button asChild variant="outline" className="text-white border-cyan-500 hover:bg-cyan-500/10 hover:text-white">
                    <a href="https://go.hotmart.com/T100845258U?ap=347c" target="_blank" rel="noopener noreferrer"><ExternalLink className="mr-2 h-4 w-4"/> Opção 2</a>
                </Button>
                 <Button asChild variant="outline" className="text-white border-cyan-500 hover:bg-cyan-500/10 hover:text-white">
                    <a href="https://go.hotmart.com/T100845258U?ap=00a0" target="_blank" rel="noopener noreferrer"><ExternalLink className="mr-2 h-4 w-4"/> Opção 3</a>
                </Button>
            </div>
          </div>
         
          <div className="text-center text-xs text-gray-500">
            <p>Este produto é comercializado com o apoio da Hotmart. A plataforma não faz controle editorial prévio dos produtos comercializados, nem avalia a tecnicidade e experiência daqueles que os produzem. A existência de um produto e sua aquisição, por meio da plataforma, não podem ser consideradas como garantia de qualidade de conteúdo e resultado, em qualquer hipótese. Ao adquiri-lo, o comprador declara estar ciente dessas informações. Os termos e políticas da Hotmart podem ser acessados <a href="https://www.hotmart.com/legal/pt-BR" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-400">aqui</a>, antes mesmo da conclusão da compra.</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default EcommerceIncubatorSection;
