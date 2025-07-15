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
import { Copy, Mic, Share2, Star, Bot } from 'lucide-react';

const aiModels = [
  { value: 'claude', label: 'Claude 3' },
  { value: 'perplexity', label: 'Perplexity' },
  { value: 'gemini', label: 'Gemini' },
  { value: 'vo3_google', label: 'VO3 Google' },
];

const PromptGenerator = () => {
  const [formData, setFormData] = useState({
    model: 'vo3_google',
    objective: '',
    style: '',
    tone: '',
    context: '',
    negative: '',
  });
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, model: value }));
  };

  const generatePrompt = () => {
    const { objective, style, tone, context, negative } = formData;
    if (!objective) {
        toast({
            title: "Campo Obrigatório",
            description: "Por favor, preencha o campo 'Objetivo' para gerar um prompt.",
            variant: "destructive",
        });
        return;
    }
    const prompt = `**Objetivo:** ${objective}\n**Estilo:** ${style || 'Não especificado'}\n**Tom:** ${tone || 'Não especificado'}\n**Contexto:** ${context || 'Não especificado'}\n**Não incluir:** ${negative || 'Nenhum'}`;
    setGeneratedPrompt(prompt);
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
    <Card className="w-full max-w-4xl mx-auto shadow-lg border-border/40 animated-gradient-bg p-1">
        <div className="bg-background rounded-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Gerador de Prompt</CardTitle>
        <CardDescription className="text-muted-foreground">
          Selecione um modelo de IA e preencha os campos para criar seu prompt.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="model" className="text-lg font-semibold mb-2 block">Modelo de IA</Label>
                  <Select value={formData.model} onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um modelo..." />
                    </SelectTrigger>
                    <SelectContent>
                      {aiModels.map((model) => (
                        <SelectItem key={model.value} value={model.value}>
                          {model.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                 <div>
                  <Label htmlFor="objective" className="text-lg font-semibold mb-2 block">Objetivo</Label>
                  <Textarea id="objective" placeholder="Ex: Criar uma legenda para um post sobre IA" value={formData.objective} onChange={handleInputChange} />
                </div>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="style" className="text-lg font-semibold mb-2 block">Estilo</Label>
                  <Textarea id="style" placeholder="Ex: Formal, casual, técnico, poético" value={formData.style} onChange={handleInputChange} />
                </div>
                <div>
                  <Label htmlFor="tone" className="text-lg font-semibold mb-2 block">Tom</Label>
                  <Textarea id="tone" placeholder="Ex: Inspirador, divertido, sério" value={formData.tone} onChange={handleInputChange} />
                </div>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                  <Label htmlFor="context" className="text-lg font-semibold mb-2 block">Contexto</Label>
                  <Textarea id="context" placeholder="Ex: Público-alvo, informações relevantes" value={formData.context} onChange={handleInputChange} />
                </div>
                 <div>
                  <Label htmlFor="negative" className="text-lg font-semibold mb-2 block">O que evitar?</Label>
                  <Textarea id="negative" placeholder="Ex: Jargões técnicos, linguagem negativa" value={formData.negative} onChange={handleInputChange} />
                </div>
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
                    placeholder="Seu prompt aparecerá aqui..."
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
