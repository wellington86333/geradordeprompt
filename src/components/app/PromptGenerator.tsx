'use client';

import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";
import { Copy, Mic, Share2, Star, Bot, Lightbulb, Target, Palette, Drama, MessageSquare, ShieldOff, CheckCircle } from 'lucide-react';

const aiModels = [
  { value: 'claude', label: 'Claude 3' },
  { value: 'perplexity', label: 'Perplexity' },
  { value: 'gemini', label: 'Gemini' },
  { value: 'vo3_google', label: 'VO3 Google' },
];

const promptTips = [
    { icon: <Target className="h-5 w-5 text-primary" />, title: "Objetivo Claro", description: "Qual o resultado esperado?" },
    { icon: <MessageSquare className="h-5 w-5 text-primary" />, title: "Contexto", description: "Dê informações de fundo." },
    { icon: <Palette className="h-5 w-5 text-primary" />, title: "Estilo", description: "Ex: formal, casual, técnico." },
    { icon: <Drama className="h-5 w-5 text-primary" />, title: "Tom", description: "Ex: divertido, sério, inspirador." },
    { icon: <CheckCircle className="h-5 w-5 text-primary" />, title: "Formato", description: "Ex: lista, parágrafo, código." },
    { icon: <ShieldOff className="h-5 w-5 text-primary" />, title: "O que Evitar", description: "Restrições e palavras-chave negativas." },
];

const PromptGenerator = () => {
  const [model, setModel] = useState('vo3_google');
  const [promptInput, setPromptInput] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPromptInput(e.target.value);
  };

  const handleSelectChange = (value: string) => {
    setModel(value);
  };

  const generatePrompt = () => {
    if (!promptInput) {
        toast({
            title: "Campo Obrigatório",
            description: "Por favor, preencha a descrição do seu prompt.",
            variant: "destructive",
        });
        return;
    }
    const finalPrompt = `**Modelo de IA:** ${aiModels.find(m => m.value === model)?.label}\n\n**Instruções do Prompt:**\n${promptInput}`;
    setGeneratedPrompt(finalPrompt);
  };
  
  const copyToClipboard = () => {
    if (generatedPrompt) {
      navigator.clipboard.writeText(generatedPrompt);
      toast({
        title: "Copiado!",
        description: "O prompt foi copiado para a área de transferência.",
      });
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg border-border/40 animated-gradient-bg p-1 rounded-2xl">
        <div className="bg-background rounded-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Gerador de Prompt</CardTitle>
        <CardDescription className="text-muted-foreground">
          Selecione um modelo de IA e descreva o que você precisa para criar seu prompt.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8 p-6">
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <Label htmlFor="model" className="font-semibold mb-2 block">Modelo de IA</Label>
                  <Select value={model} onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      {aiModels.map((m) => (
                        <SelectItem key={m.value} value={m.value}>
                          {m.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                 <div className="md:col-span-3">
                  <Label htmlFor="promptInput" className="font-semibold mb-2 block">Descreva sua Ideia</Label>
                  <Textarea 
                    id="promptInput" 
                    placeholder="Ex: Crie uma legenda para um post sobre IA com estilo formal, tom divertido, para um podcast de gatos..." 
                    value={promptInput} 
                    onChange={handleInputChange}
                    className="min-h-[120px] text-base"
                   />
                </div>
            </div>
        </div>

        <div className="p-4 bg-secondary/30 rounded-lg">
            <h3 className="font-semibold mb-4 flex items-center"><Lightbulb className="mr-2 text-yellow-400"/>Dicas para um Prompt Perfeito</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                {promptTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-2">
                        {tip.icon}
                        <div>
                            <p className="font-semibold">{tip.title}</p>
                            <p className="text-muted-foreground">{tip.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={generatePrompt} size="lg" className="flex-1 animated-gradient-bg text-white font-bold transition-transform duration-300 hover:scale-105">
                <Bot className="mr-2"/>
                Gerar Prompt
            </Button>
             <Button variant="outline" size="lg" className="transition-transform duration-300 hover:scale-105">
                <Mic className="mr-2"/>
                Comando de Voz
            </Button>
        </div>

        <div className="space-y-2">
            <Label className="text-lg font-semibold mb-2 block">Prompt Gerado</Label>
            <div className="relative">
                <Textarea
                    readOnly
                    value={generatedPrompt}
                    className="h-full min-h-[200px] text-base bg-secondary/30"
                    placeholder="Seu prompt otimizado aparecerá aqui..."
                />
                 <div className="absolute top-2 right-2 flex gap-1">
                    <Button variant="ghost" size="icon" onClick={copyToClipboard} title="Copiar">
                        <Copy className="h-5 w-5"/>
                    </Button>
                    <Button variant="ghost" size="icon" title="Salvar">
                        <Star className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Compartilhar">
                        <Share2 className="h-5 w-5" />
                    </Button>
                 </div>
            </div>
        </div>

      </CardContent>
      </div>
    </Card>
  );
};

export default PromptGenerator;
