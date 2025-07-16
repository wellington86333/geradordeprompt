import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "How does the AI prompt generator work?",
      answer: "Our generator analyzes your input and creates optimized prompts tailored for specific AI models. Each template is designed to maximize the effectiveness of different AI platforms like ChatGPT, Claude, Gemini, and more."
    },
    {
      question: "Why are all outputs in English?",
      answer: "English outputs ensure maximum compatibility with AI models, as most are trained primarily on English data. This provides better results and consistency across different platforms."
    },
    {
      question: "Can I save and reuse my prompts?",
      answer: "Yes! You can save your favorite prompts, view your generation history, and download prompts as text files for future use."
    },
    {
      question: "Which AI models are supported?",
      answer: "We support 8+ AI models including ChatGPT, Claude, Gemini, Perplexity, VO3 Google, Midjourney, DALL-E, and Stable Diffusion, with specialized templates for each."
    },
    {
      question: "Is the tool free to use?",
      answer: "Yes, our basic prompt generator is completely free. We also offer premium features and exclusive access codes for advanced functionality."
    },
    {
      question: "How can I get better results?",
      answer: "Be specific about your objectives, provide context, specify the desired tone and format, and use our built-in tips for crafting effective prompts."
    }
  ];

  return (
    <section className="my-16">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold flex items-center justify-center gap-2">
            <HelpCircle className="h-8 w-8 text-primary" />
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
};

export default FAQSection;