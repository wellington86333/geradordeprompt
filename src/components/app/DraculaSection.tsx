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
              src="/images/horror-mask.png"
              alt="Personagem assustador com máscara e caveiras"
              width={400}
              height={400}
              className="mx-auto rounded-lg shadow-2xl border-2 border-red-600/30"
              priority
            />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            "Prompts mal feitos me dão pesadelos! 💀"
          </h3>
          <p className="text-gray-300 text-lg italic">
            Não deixe seus prompts assombrarem seus resultados... 
            Use nosso gerador para criar prompts que realmente funcionam! 🎭⚡
          </p>
          <div className="mt-6 flex justify-center space-x-2">
            <span className="text-2xl">💀</span>
            <span className="text-2xl">🎭</span>
            <span className="text-2xl">💀</span>
            <span className="text-2xl">🎭</span>
            <span className="text-2xl">💀</span>
            <span className="text-2xl">🎭</span>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default DraculaSection;