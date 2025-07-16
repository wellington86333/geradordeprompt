'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const DraculaSection = () => {
  return (
    <section className="my-16">
      <Card className="w-full max-w-2xl mx-auto overflow-hidden bg-gradient-to-br from-red-900/20 via-black to-purple-900/20 border-red-800/50 shadow-2xl">
        <CardContent className="p-8 text-center">
          <div className="relative mb-6">
            <Image
              src="/images/dracula.png"
              alt="Drácula engraçado"
              width={300}
              height={300}
              className="mx-auto rounded-lg shadow-lg"
              priority
            />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            "Eu não bebo... vinho! Prefiro prompts bem elaborados! 🧛‍♂️"
          </h3>
          <p className="text-gray-300 text-lg italic">
            Quando até o Drácula precisa de uma IA para criar conteúdo de qualidade... 
            É melhor usar nosso gerador de prompts mesmo! 🦇✨
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default DraculaSection;