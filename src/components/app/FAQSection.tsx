'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O que é um gerador de prompts?",
      answer: "Um gerador de prompts é uma ferramenta que ajuda a criar instruções otimizadas para modelos de IA como ChatGPT, Claude, Midjourney e outros. Ele estrutura suas ideias em um formato que maximiza a qualidade das respostas da IA, economizando tempo e melhorando os resultados."
    },
    {
      question: "Por que devo usar um gerador de prompts em vez de escrever diretamente?",
      answer: "Prompts bem estruturados produzem resultados significativamente melhores. Nosso gerador incorpora práticas recomendadas para cada modelo de IA, adiciona contexto necessário, e formata as instruções de maneira ideal, resultando em respostas mais precisas, relevantes e úteis."
    },
    {
      question: "Quais modelos de IA são suportados?",
      answer: "Nosso gerador suporta os principais modelos de IA do mercado, incluindo ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), Perplexity, VO3 Google, Midjourney, DALL-E e Stable Diffusion. Cada modelo recebe um formato de prompt otimizado para suas capacidades específicas."
    },
    {
      question: "Como funcionam os templates?",
      answer: "Os templates são estruturas pré-definidas para tarefas específicas, como criação de artigos, análise de código ou geração de imagens. Basta selecionar um template compatível com seu modelo de IA escolhido, preencher as variáveis solicitadas, e o sistema gerará um prompt profissional e otimizado automaticamente."
    },
    {
      question: "Posso personalizar os prompts gerados?",
      answer: "Sim! Após a geração, você pode editar o prompt manualmente antes de usá-lo. Também oferecemos opções de personalização como tom, complexidade, idioma de saída e instruções adicionais para ajustar o prompt às suas necessidades específicas."
    },
    {
      question: "Os prompts funcionam em qualquer idioma?",
      answer: "Nosso gerador pode criar prompts em português ou inglês. Recomendamos usar prompts em inglês para modelos internacionais como Midjourney e DALL-E para obter melhores resultados, mas para modelos de texto como ChatGPT e Claude, prompts em português funcionam perfeitamente."
    },
    {
      question: "Como posso salvar meus prompts favoritos?",
      answer: "Após gerar um prompt, você pode salvá-lo clicando no ícone de marcador. Seus prompts salvos ficarão disponíveis durante sua sessão atual. Também oferecemos opções para copiar para a área de transferência ou baixar como arquivo de texto."
    },
    {
      question: "O gerador de prompts é gratuito?",
      answer: "Sim, nosso gerador de prompts básico é completamente gratuito. Oferecemos recursos avançados e templates premium para usuários que desejam resultados ainda mais especializados."
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Tudo o que você precisa saber sobre nosso gerador de prompts
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;