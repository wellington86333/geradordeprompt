'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, rating }) => {
  return (
    <Card className="border-border/40 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={`h-5 w-5 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`} 
            />
          ))}
        </div>
        <blockquote className="text-lg mb-6 flex-grow">
          "{quote}"
        </blockquote>
        <footer>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </footer>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Este gerador de prompts transformou completamente meu fluxo de trabalho com IA. Economizo pelo menos 30 minutos por dia e obtenho resultados muito melhores.",
      author: "Ana Silva",
      role: "Designer de UX",
      rating: 5
    },
    {
      quote: "Os templates são incríveis! Uso diariamente para criar conteúdo para redes sociais e os resultados são consistentemente excelentes.",
      author: "Carlos Mendes",
      role: "Social Media Manager",
      rating: 5
    },
    {
      quote: "Como programador, uso o gerador para criar prompts técnicos complexos. A diferença na qualidade do código gerado é impressionante.",
      author: "Juliana Costa",
      role: "Desenvolvedora Full Stack",
      rating: 4
    },
    {
      quote: "Finalmente consigo obter imagens consistentes do Midjourney graças aos prompts otimizados. Economizei dezenas de tentativas frustradas.",
      author: "Ricardo Almeida",
      role: "Artista Digital",
      rating: 5
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">O Que Nossos Usuários Dizem</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Milhares de profissionais já melhoraram seus resultados com nosso gerador
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <Testimonial 
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;