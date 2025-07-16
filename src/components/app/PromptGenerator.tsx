'use client';

import React, { useState, useCallback, useMemo, useEffect } from 'react';
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
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";
import { 
  Copy, Share2, Bot, Lightbulb, Target, Palette, Drama, MessageSquare, 
  ShieldOff, CheckCircle, Download, RefreshCw, History, Bookmark, 
  PenSquare, Sparkles, Template, Settings, Wand2, AlertCircle,
  TrendingUp, Clock, Star, Filter
} from 'lucide-react';
import { PromptGenerator as PromptGen, PromptGenerationOptions } from '@/lib/prompt-generator';
import { promptTemplates, promptCategories, getTemplatesByCategory, PromptTemplate } from '@/lib/prompt-templates';

const aiModels = [
  { value: 'chatgpt', label: 'ChatGPT (OpenAI)', description: 'Ideal para conversação e tarefas gerais' },
  { value: 'claude', label: 'Claude (Anthropic)', description: 'Excelente para análise e escrita criativa' },
  { value: 'gemini', label: 'Gemini (Google)', description: 'Ótimo para tarefas multimodais e raciocínio' },
  { value: 'perplexity', label: 'Perplexity', description: 'Perfeito para pesquisa e verificação de fatos' },
  { value: 'vo3_google', label: 'VO3 Google', description: 'Especializado em geração de vídeos' },
  { value: 'midjourney', label: 'Midjourney', description: 'Melhor escolha para geração de imagens' },
  { value: 'dall_e', label: 'DALL-E (OpenAI)', description: 'Geração criativa de imagens' },
  { value: 'stable_diffusion', label: 'Stable Diffusion', description: 'Geração de imagens open-source' },
];

const promptTips = [
    { icon: <Target className="h-5 w-5 text-primary" />, title: "Objetivo Claro", description: "Qual resultado você espera?" },
    { icon: <MessageSquare className="h-5 w-5 text-primary" />, title: "Contexto", description: "Forneça informações de fundo." },
    { icon: <Palette className="h-5 w-5 text-primary" />, title: "Estilo", description: "Ex.: formal, casual, técnico." },
    { icon: <Drama className="h-5 w-5 text-primary" />, title: "Tom", description: "Ex.: divertido, sério, inspirador." },
    { icon: <CheckCircle className="h-5 w-5 text-primary" />, title: "Formato", description: "Ex.: lista, parágrafo, código." },
    { icon: <ShieldOff className="h-5 w-5 text-primary" />, title: "O que Evitar", description: "Restrições e palavras negativas." },
];

const PromptGenerator = () => {
  const [activeTab, setActiveTab] = useState('basic');
  const [model, setModel] = useState('chatgpt');
  const [promptInput, setPromptInput] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [promptHistory, setPromptHistory] = useState<string[]>([]);
  const [savedPrompts, setSavedPrompts] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('writing');
  const [selectedTemplate, setSelectedTemplate] = useState<PromptTemplate | null>(null);
  const [templateVariables, setTemplateVariables] = useState<Record<string, string>>({});
  const [outputLanguage, setOutputLanguage] = useState<'pt' | 'en'>('pt');
  const [tone, setTone] = useState('professional');
  const [complexity, setComplexity] = useState<'simple' | 'intermediate' | 'advanced'>('intermediate');
  const [customInstructions, setCustomInstructions] = useState('');
  const { toast } = useToast();

  const selectedModel = useMemo(() => 
    aiModels.find(m => m.value === model) || aiModels[0], 
    [model]
  );

  const availableTemplates = useMemo(() => 
    getTemplatesByCategory(selectedCategory).filter(template => 
      template.aiModels.includes(model)
    ),
    [selectedCategory, model]
  );

  // Reset template variables when template changes
  useEffect(() => {
    if (selectedTemplate) {
      const initialVariables: Record<string, string> = {};
      selectedTemplate.variables.forEach(variable => {
        initialVariables[variable] = '';
      });
      setTemplateVariables(initialVariables);
    } else {
      setTemplateVariables({});
    }
  }, [selectedTemplate]);

  // Auto-suggest model based on input
  useEffect(() => {
    if (promptInput.length > 20 && !isGenerating) {
      const suggestedModel = PromptGen.getModelRecommendation(promptInput);
      if (suggestedModel !== model) {
        // Optionally show a suggestion toast
        // toast({
        //   title: "Modelo Sugerido",
        //   description: `Baseado no seu prompt, ${aiModels.find(m => m.value === suggestedModel)?.label} pode ser uma boa opção.`,
        // });
      }
    }
  }, [promptInput, model, isGenerating]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPromptInput(e.target.value);
  };

  const handleSelectChange = (value: string) => {
    setModel(value);
    // Reset template if it's not compatible with the new model
    if (selectedTemplate && !selectedTemplate.aiModels.includes(value)) {
      setSelectedTemplate(null);
    }
  };

  const handleTemplateSelect = (template: PromptTemplate | null) => {
    setSelectedTemplate(template);
  };

  const handleVariableChange = (variable: string, value: string) => {
    setTemplateVariables(prev => ({
      ...prev,
      [variable]: value
    }));
  };

  const generatePrompt = () => {
    // Validate input
    if (activeTab === 'basic' && !promptInput.trim()) {
      toast({
        title: "Campo Obrigatório",
        description: "Por favor, descreva o que você precisa.",
        variant: "destructive",
      });
      return;
    }

    if (activeTab === 'template' && selectedTemplate && 
        selectedTemplate.variables.some(v => !templateVariables[v]?.trim())) {
      toast({
        title: "Campos Incompletos",
        description: "Por favor, preencha todas as variáveis do template.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      try {
        // Use the PromptGenerator class to generate the prompt
        const options: PromptGenerationOptions = {
          aiModel: model,
          userInput: promptInput,
          outputLanguage,
          tone,
          complexity,
          customInstructions
        };

        // If using a template
        if (activeTab === 'template' && selectedTemplate) {
          options.template = selectedTemplate;
          options.variables = templateVariables;
        }

        const result = PromptGen.generatePrompt(options);
        
        setGeneratedPrompt(result.content);
        setPromptHistory(prev => [result.content, ...prev.slice(0, 9)]); // Keep last 10
        
        toast({
          title: "Prompt Gerado!",
          description: `Prompt otimizado criado para ${selectedModel.label}`,
        });
      } catch (error) {
        console.error("Erro ao gerar prompt:", error);
        toast({
          title: "Erro",
          description: "Ocorreu um erro ao gerar o prompt. Tente novamente.",
          variant: "destructive",
        });
      } finally {
        setIsGenerating(false);
      }
    }, 1000);
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

  const savePrompt = () => {
    if (generatedPrompt && !savedPrompts.includes(generatedPrompt)) {
      setSavedPrompts(prev => [generatedPrompt, ...prev]);
      toast({
        title: "Prompt Salvo!",
        description: "Adicionado à sua coleção de prompts salvos.",
      });
    }
  };

  const clearAll = () => {
    setPromptInput('');
    setGeneratedPrompt('');
    setCustomInstructions('');
    if (activeTab === 'template') {
      setSelectedTemplate(null);
      setTemplateVariables({});
    }
    toast({
      title: "Limpo!",
      description: "Todos os campos foram redefinidos.",
    });
  };

  const downloadPrompt = () => {
    if (generatedPrompt) {
      const element = document.createElement('a');
      const file = new Blob([generatedPrompt], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `prompt_${selectedModel.value}_${Date.now()}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      
      toast({
        title: "Baixado!",
        description: "Prompt salvo como arquivo de texto.",
      });
    }
  };
  
  // Função para recomendar um modelo com base no input
  const recommendModel = () => {
    if (promptInput.length < 20) return;
    
    const suggestedModel = PromptGen.getModelRecommendation(promptInput);
    if (suggestedModel !== model) {
      setModel(suggestedModel);
      toast({
        title: "Modelo Recomendado",
        description: `Baseado no seu prompt, alteramos para ${aiModels.find(m => m.value === suggestedModel)?.label}`,
      });
    }
  };

  return (
    <Card className="w-full mx-auto shadow-lg border-border/40 p-1 rounded-2xl animate-[pulse-glow_4s_ease-in-out_infinite]">
        <div className="bg-background rounded-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold flex items-center justify-center gap-2">
          <Sparkles className="h-8 w-8 text-primary" />
          Gerador Avançado de Prompts
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Selecione um modelo de IA e descreva o que você precisa para criar prompts otimizados.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="space-y-2">
                <Label htmlFor="model" className="flex items-center text-md font-semibold mb-2">
                    <Bot className="mr-2 h-5 w-5 text-primary" />
                    Modelo de IA
                </Label>
                <Card className="p-2">
                    <Select value={model} onValueChange={handleSelectChange}>
                        <SelectTrigger className="w-full border-0">
                        <SelectValue placeholder="Selecione o modelo..." />
                        </SelectTrigger>
                        <SelectContent>
                        {aiModels.map((m) => (
                            <SelectItem key={m.value} value={m.value}>
                              <div className="flex flex-col">
                                <span className="font-medium">{m.label}</span>
                                <span className="text-xs text-muted-foreground">{m.description}</span>
                              </div>
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                </Card>
                <div className="text-xs text-muted-foreground p-2 bg-secondary/30 rounded">
                  <strong>Selecionado:</strong> {selectedModel.description}
                </div>
            </div>
            
            <div className="md:col-span-2">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid grid-cols-2 mb-4">
                        <TabsTrigger value="basic" className="flex items-center gap-2">
                            <PenSquare className="h-4 w-4" />
                            Modo Básico
                        </TabsTrigger>
                        <TabsTrigger value="template" className="flex items-center gap-2">
                            <Template className="h-4 w-4" />
                            Templates
                        </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="basic" className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="promptInput" className="flex items-center text-md font-semibold mb-2">
                                <PenSquare className="mr-2 h-5 w-5 text-primary" />
                                Descreva sua ideia
                            </Label>
                            <Textarea 
                                id="promptInput" 
                                placeholder="Ex.: Crie um post para redes sociais sobre IA com tom divertido, para um podcast de tecnologia..." 
                                value={promptInput} 
                                onChange={handleInputChange}
                                className="min-h-[120px] text-base"
                            />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label className="text-sm font-medium">Tom</Label>
                                <Select value={tone} onValueChange={setTone}>
                                    <SelectTrigger className="w-full mt-1">
                                        <SelectValue placeholder="Selecione o tom" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="professional">Profissional</SelectItem>
                                        <SelectItem value="casual">Casual</SelectItem>
                                        <SelectItem value="friendly">Amigável</SelectItem>
                                        <SelectItem value="humorous">Humorístico</SelectItem>
                                        <SelectItem value="formal">Formal</SelectItem>
                                        <SelectItem value="technical">Técnico</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            
                            <div>
                                <Label className="text-sm font-medium">Complexidade</Label>
                                <Select value={complexity} onValueChange={(value: any) => setComplexity(value)}>
                                    <SelectTrigger className="w-full mt-1">
                                        <SelectValue placeholder="Selecione a complexidade" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="simple">Simples</SelectItem>
                                        <SelectItem value="intermediate">Intermediária</SelectItem>
                                        <SelectItem value="advanced">Avançada</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </TabsContent>
                    
                    <TabsContent value="template" className="space-y-4">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {promptCategories.map(category => (
                                <Badge 
                                    key={category.id}
                                    variant={selectedCategory === category.id ? "default" : "outline"}
                                    className="cursor-pointer text-sm py-1 px-3"
                                    onClick={() => setSelectedCategory(category.id)}
                                >
                                    {category.icon} {category.name}
                                </Badge>
                            ))}
                        </div>
                        
                        <div className="grid grid-cols-1 gap-3 max-h-[300px] overflow-y-auto pr-2">
                            {availableTemplates.length > 0 ? (
                                availableTemplates.map(template => (
                                    <Card 
                                        key={template.id}
                                        className={`p-3 cursor-pointer transition-all ${selectedTemplate?.id === template.id ? 'border-primary/50 bg-primary/5' : 'hover:bg-secondary/20'}`}
                                        onClick={() => handleTemplateSelect(template)}
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-medium">{template.name}</h4>
                                                <p className="text-sm text-muted-foreground">{template.description}</p>
                                            </div>
                                            <Badge variant="outline" className="text-xs">
                                                {template.aiModels.includes(model) ? 
                                                    <CheckCircle className="h-3 w-3 mr-1 text-green-500" /> : 
                                                    <AlertCircle className="h-3 w-3 mr-1 text-amber-500" />
                                                }
                                                {model}
                                            </Badge>
                                        </div>
                                    </Card>
                                ))
                            ) : (
                                <div className="text-center p-4 text-muted-foreground">
                                    Nenhum template disponível para esta categoria e modelo.
                                </div>
                            )}
                        </div>
                        
                        {selectedTemplate && (
                            <div className="mt-4 space-y-3 border border-primary/20 rounded-lg p-4 bg-primary/5">
                                <h3 className="font-medium flex items-center gap-2">
                                    <Template className="h-4 w-4" />
                                    {selectedTemplate.name}
                                </h3>
                                
                                <div className="space-y-3">
                                    {selectedTemplate.variables.map(variable => (
                                        <div key={variable} className="space-y-1">
                                            <Label htmlFor={variable} className="text-sm capitalize">
                                                {variable.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                            </Label>
                                            <Input
                                                id={variable}
                                                value={templateVariables[variable] || ''}
                                                onChange={(e) => handleVariableChange(variable, e.target.value)}
                                                placeholder={`Digite ${variable.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </div>

        <div className="p-4 bg-secondary/30 rounded-lg">
            <h3 className="font-semibold mb-4 flex items-center"><Lightbulb className="mr-2 text-yellow-400"/>Dicas para Prompts Perfeitos</h3>
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
        
        <div className="border border-dashed border-primary/30 rounded-lg p-4">
            <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                    <div className="flex items-center gap-2 font-medium">
                        <Settings className="h-5 w-5 text-primary" />
                        Configurações Avançadas
                    </div>
                    <div className="text-sm text-muted-foreground group-open:rotate-180 transition-transform">▼</div>
                </summary>
                <div className="mt-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label className="text-sm font-medium">Idioma de Saída</Label>
                            <Select value={outputLanguage} onValueChange={(value: any) => setOutputLanguage(value)}>
                                <SelectTrigger className="w-full mt-1">
                                    <SelectValue placeholder="Selecione o idioma" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="pt">Português</SelectItem>
                                    <SelectItem value="en">Inglês</SelectItem>
                                </SelectContent>
                            </Select>
                            <p className="text-xs text-muted-foreground mt-1">
                                Idioma em que o prompt será gerado
                            </p>
                        </div>
                        
                        <div>
                            <Label htmlFor="customInstructions" className="text-sm font-medium">Instruções Personalizadas</Label>
                            <Textarea
                                id="customInstructions"
                                value={customInstructions}
                                onChange={(e) => setCustomInstructions(e.target.value)}
                                placeholder="Adicione instruções específicas para o modelo de IA..."
                                className="mt-1 h-24"
                            />
                        </div>
                    </div>
                    
                    <div className="bg-primary/5 p-3 rounded-lg">
                        <h4 className="text-sm font-medium flex items-center gap-2 mb-2">
                            <TrendingUp className="h-4 w-4 text-primary" />
                            Estatísticas do Prompt
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                            <div className="bg-background p-2 rounded">
                                <p className="text-muted-foreground">Modelo</p>
                                <p className="font-medium">{selectedModel.label}</p>
                            </div>
                            <div className="bg-background p-2 rounded">
                                <p className="text-muted-foreground">Tokens (est.)</p>
                                <p className="font-medium">{Math.ceil((promptInput.length + (customInstructions?.length || 0)) / 4)}</p>
                            </div>
                            <div className="bg-background p-2 rounded">
                                <p className="text-muted-foreground">Modo</p>
                                <p className="font-medium">{activeTab === 'basic' ? 'Básico' : 'Template'}</p>
                            </div>
                            <div className="bg-background p-2 rounded">
                                <p className="text-muted-foreground">Complexidade</p>
                                <p className="font-medium capitalize">{complexity}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </details>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={generatePrompt} 
              disabled={isGenerating}
              size="lg" 
              className="flex-1 animated-gradient-bg text-white font-bold transition-transform duration-300 hover:scale-105 disabled:opacity-50"
            >
                {isGenerating ? (
                  <>
                    <RefreshCw className="mr-2 animate-spin"/>
                    Gerando...
                  </>
                ) : (
                  <>
                <Bot className="mr-2"/>
                Gerar Prompt Otimizado
                  </>
                )}
            </Button>
             <Button 
               variant="outline" 
               size="lg" 
               onClick={clearAll}
               className="transition-transform duration-300 hover:scale-105"
             >
                <RefreshCw className="mr-2"/>
                Limpar Tudo
            </Button>
        </div>

        <div className="space-y-2">
            <Label className="text-lg font-semibold mb-2 block">Prompt Gerado</Label>
            <div className="relative">
                <Textarea
                    readOnly
                    value={generatedPrompt}
                    className="h-full min-h-[250px] text-base bg-secondary/30 font-mono"
                    placeholder="Seu prompt otimizado aparecerá aqui..."
                />
                 <div className="absolute top-2 right-2 flex gap-1">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={copyToClipboard} 
                      disabled={!generatedPrompt}
                      title="Copiar para Área de Transferência"
                    >
                        <Copy className="h-5 w-5"/>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={savePrompt}
                      disabled={!generatedPrompt}
                      title="Salvar Prompt"
                    >
                        <Bookmark className="h-5 w-5" />
                    </Button>
                     <Button 
                       variant="ghost" 
                       size="icon" 
                       onClick={downloadPrompt}
                       disabled={!generatedPrompt}
                       title="Baixar como TXT"
                     >
                        <Download className="h-5 w-5" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => {
                        if (navigator.share && generatedPrompt) {
                          navigator.share({
                            title: 'Prompt IA',
                            text: generatedPrompt,
                          });
                        } else {
                          copyToClipboard();
                        }
                      }}
                      disabled={!generatedPrompt}
                      title="Compartilhar Prompt"
                    >
                        <Share2 className="h-5 w-5" />
                    </Button>
                 </div>
            </div>
        </div>

        {/* Prompt History Section */}
        {promptHistory.length > 0 && (
          <div className="space-y-2">
            <Label className="text-lg font-semibold mb-2 block flex items-center">
              <History className="mr-2 h-5 w-5 text-primary" />
              Prompts Recentes
            </Label>
            <div className="max-h-40 overflow-y-auto space-y-2">
              {promptHistory.map((prompt, index) => (
                <div 
                  key={index} 
                  className="p-3 bg-secondary/20 rounded-lg cursor-pointer hover:bg-secondary/40 transition-colors"
                  onClick={() => setGeneratedPrompt(prompt)}
                >
                  <p className="text-sm truncate">{prompt.substring(0, 100)}...</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Saved Prompts Section */}
        {savedPrompts.length > 0 && (
          <div className="space-y-2">
            <Label className="text-lg font-semibold mb-2 block flex items-center">
              <Bookmark className="mr-2 h-5 w-5 text-primary" />
              Prompts Salvos ({savedPrompts.length})
            </Label>
            <div className="max-h-40 overflow-y-auto space-y-2">
              {savedPrompts.map((prompt, index) => (
                <div 
                  key={index} 
                  className="p-3 bg-green-500/10 rounded-lg cursor-pointer hover:bg-green-500/20 transition-colors flex justify-between items-center"
                >
                  <p 
                    className="text-sm truncate flex-1 cursor-pointer"
                    onClick={() => setGeneratedPrompt(prompt)}
                  >
                    {prompt.substring(0, 100)}...
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSavedPrompts(prev => prev.filter((_, i) => i !== index))}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    ×
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      </div>
    </Card>
  );
};

export default PromptGenerator;