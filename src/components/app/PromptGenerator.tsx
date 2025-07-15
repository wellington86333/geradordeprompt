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
    const finalPrompt = `**Modelo de IA:** ${aiModels.find(m => m.value === model)?.label}\n**Prompt:**\n${promptInput}`;
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
    <Card className="w-full max-w-4xl mx-auto shadow-lg border-border/40 animated-gradient-bg p-1">
        <div className="bg-background rounded-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Gerador de Prompt</CardTitle>
        <CardDescription className="text-muted-foreground">
          Selecione um modelo de IA e descreva o que você precisa para criar seu prompt.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <Label htmlFor="model" className="text-lg font-semibold mb-2 block">Modelo de IA</Label>
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
                  <Label htmlFor="promptInput" className="text-lg font-semibold mb-2 block">Descreva seu Prompt</Label>
                  <Textarea 
                    id="promptInput" 
                    placeholder="Ex: Crie uma legenda para um post sobre IA com estilo formal, tom divertido, para um podcast de gatos..." 
                    value={promptInput} 
                    onChange={handleInputChange}
                    className="min-h-[120px]"
                   />
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
