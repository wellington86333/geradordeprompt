'use client';

import React, { useState, useCallback, useMemo } from 'react';
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
import { Copy, Mic, Share2, Bot, Lightbulb, Target, Palette, Drama, MessageSquare, ShieldOff, CheckCircle, Download, RefreshCw, History, Bookmark, PenSquare, Sparkles } from 'lucide-react';

const aiModels = [
  { value: 'chatgpt', label: 'ChatGPT (OpenAI)', description: 'Best for conversational AI and general tasks' },
  { value: 'claude', label: 'Claude (Anthropic)', description: 'Excellent for analysis and creative writing' },
  { value: 'gemini', label: 'Gemini (Google)', description: 'Great for multimodal tasks and reasoning' },
  { value: 'perplexity', label: 'Perplexity', description: 'Perfect for research and fact-checking' },
  { value: 'vo3_google', label: 'VO3 Google', description: 'Specialized for video generation' },
  { value: 'midjourney', label: 'Midjourney', description: 'Top choice for image generation' },
  { value: 'dall_e', label: 'DALL-E (OpenAI)', description: 'Creative image generation' },
  { value: 'stable_diffusion', label: 'Stable Diffusion', description: 'Open-source image generation' },
];

const promptTips = [
    { icon: <Target className="h-5 w-5 text-primary" />, title: "Clear Objective", description: "What result do you expect?" },
    { icon: <MessageSquare className="h-5 w-5 text-primary" />, title: "Context", description: "Provide background information." },
    { icon: <Palette className="h-5 w-5 text-primary" />, title: "Style", description: "E.g.: formal, casual, technical." },
    { icon: <Drama className="h-5 w-5 text-primary" />, title: "Tone", description: "E.g.: fun, serious, inspiring." },
    { icon: <CheckCircle className="h-5 w-5 text-primary" />, title: "Format", description: "E.g.: list, paragraph, code." },
    { icon: <ShieldOff className="h-5 w-5 text-primary" />, title: "What to Avoid", description: "Restrictions and negative keywords." },
];

const PromptGenerator = () => {
  const [model, setModel] = useState('chatgpt');
  const [promptInput, setPromptInput] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [promptHistory, setPromptHistory] = useState<string[]>([]);
  const [savedPrompts, setSavedPrompts] = useState<string[]>([]);
  const { toast } = useToast();

  const selectedModel = useMemo(() => 
    aiModels.find(m => m.value === model) || aiModels[0], 
    [model]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPromptInput(e.target.value);
  };

  const handleSelectChange = (value: string) => {
    setModel(value);
  };

  const generatePrompt = () => {
    if (!promptInput.trim()) {
        toast({
            title: "Required Field",
            description: "Please fill in the description of your prompt.",
            variant: "destructive",
        });
        return;
    }

    setIsGenerating(true);
    
    // Simulate AI processing time
    setTimeout(() => {
    // Enhanced prompt generation logic for different AI models
    let promptTemplate = '';
    
    switch (model) {
      case 'chatgpt':
        promptTemplate = `You are an expert assistant. Please help me with the following task:

**Task:** ${promptInput}

**Instructions:**
- Provide a comprehensive and well-structured response
- Use clear and professional language
- Include examples when relevant
- Ensure accuracy and helpfulness

Please respond in English.`;
        break;
        
      case 'claude':
        promptTemplate = `I need your assistance with the following request. Please provide a thoughtful and detailed response:

**Request:** ${promptInput}

**Guidelines:**
- Be thorough and analytical in your approach
- Consider multiple perspectives when applicable
- Provide clear reasoning for your recommendations
- Structure your response logically

Please respond in English.`;
        break;
        
      case 'gemini':
        promptTemplate = `Help me with this task using your multimodal capabilities:

**Task:** ${promptInput}

**Requirements:**
- Provide a comprehensive solution
- Use structured formatting when helpful
- Include relevant details and context
- Be precise and informative

Please respond in English.`;
        break;
        
      case 'perplexity':
        promptTemplate = `Research and provide information about:

**Query:** ${promptInput}

**Please include:**
- Accurate and up-to-date information
- Relevant sources and references
- Clear explanations
- Comprehensive coverage of the topic

Please respond in English.`;
        break;
        
      case 'vo3_google':
        promptTemplate = `Create a video concept for:

**Video Description:** ${promptInput}

**Video Requirements:**
- Clear visual narrative
- Engaging storytelling elements
- Appropriate pacing and flow
- Professional quality output

Please respond in English with detailed video specifications.`;
        break;
        
      case 'midjourney':
        promptTemplate = `Create an image with the following specifications:

**Image Description:** ${promptInput}

**Style Parameters:**
- High quality, detailed artwork
- Professional composition
- Appropriate lighting and colors
- Creative and visually appealing

**Technical Settings:** --ar 16:9 --v 6 --style raw

Please respond in English.`;
        break;
        
      case 'dall_e':
        promptTemplate = `Generate an image based on this description:

**Image Prompt:** ${promptInput}

**Requirements:**
- High resolution and quality
- Creative interpretation
- Visually striking composition
- Professional artistic style

Please respond in English.`;
        break;
        
      case 'stable_diffusion':
        promptTemplate = `Create an image using this prompt:

**Prompt:** ${promptInput}

**Parameters:**
- High quality, masterpiece
- Detailed and realistic
- Professional composition
- Optimal lighting and colors

**Negative Prompt:** low quality, blurry, distorted, amateur

Please respond in English.`;
        break;
        
      default:
        promptTemplate = `**AI Model:** ${selectedModel.label}

**Task:** ${promptInput}

**Instructions:**
- Provide a high-quality response
- Use professional language
- Be comprehensive and helpful
- Structure the response clearly

Please respond in English.`;
    }
    
    setGeneratedPrompt(promptTemplate);
    setPromptHistory(prev => [promptTemplate, ...prev.slice(0, 9)]); // Keep last 10
    setIsGenerating(false);
    
    toast({
      title: "Prompt Generated!",
      description: `Optimized prompt created for ${selectedModel.label}`,
    });
    }, 1500); // 1.5 second delay for better UX
  };
  
  const copyToClipboard = () => {
    if (generatedPrompt) {
      navigator.clipboard.writeText(generatedPrompt);
      toast({
        title: "Copied!",
        description: "The prompt has been copied to clipboard.",
      });
    }
  };

  const savePrompt = () => {
    if (generatedPrompt && !savedPrompts.includes(generatedPrompt)) {
      setSavedPrompts(prev => [generatedPrompt, ...prev]);
      toast({
        title: "Prompt Saved!",
        description: "Added to your saved prompts collection.",
      });
    }
  };

  const clearAll = () => {
    setPromptInput('');
    setGeneratedPrompt('');
    toast({
      title: "Cleared!",
      description: "All fields have been reset.",
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
        title: "Downloaded!",
        description: "Prompt saved as text file.",
      });
    }
  };

  return (
    <Card className="w-full mx-auto shadow-lg border-border/40 p-1 rounded-2xl animate-[pulse-glow_4s_ease-in-out_infinite]">
        <div className="bg-background rounded-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold flex items-center justify-center gap-2">
          <Sparkles className="h-8 w-8 text-primary" />
          Advanced Prompt Generator
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Select an AI model and describe what you need to create optimized prompts in English.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="space-y-2">
                <Label htmlFor="model" className="flex items-center text-md font-semibold mb-2">
                    <Bot className="mr-2 h-5 w-5 text-primary" />
                    AI Model
                </Label>
                <Card className="p-2">
                    <Select value={model} onValueChange={handleSelectChange}>
                        <SelectTrigger className="w-full border-0">
                        <SelectValue placeholder="Select AI Model..." />
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
                  <strong>Selected:</strong> {selectedModel.description}
                </div>
            </div>
            
            <div className="md:col-span-2 space-y-2">
                <Label htmlFor="promptInput" className="flex items-center text-md font-semibold mb-2">
                <PenSquare className="mr-2 h-5 w-5 text-primary" />
                Describe Your Idea
                </Label>
                <Textarea 
                id="promptInput" 
                placeholder="E.g.: Create a social media post about AI with a fun tone, for a tech podcast about cats..." 
                value={promptInput} 
                onChange={handleInputChange}
                className="min-h-[120px] text-base"
                />
            </div>
        </div>

        <div className="p-4 bg-secondary/30 rounded-lg">
            <h3 className="font-semibold mb-4 flex items-center"><Lightbulb className="mr-2 text-yellow-400"/>Tips for Perfect Prompts</h3>
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
            <Button 
              onClick={generatePrompt} 
              disabled={isGenerating}
              size="lg" 
              className="flex-1 animated-gradient-bg text-white font-bold transition-transform duration-300 hover:scale-105 disabled:opacity-50"
            >
                {isGenerating ? (
                  <>
                    <RefreshCw className="mr-2 animate-spin"/>
                    Generating...
                  </>
                ) : (
                  <>
                <Bot className="mr-2"/>
                Generate Optimized Prompt
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
                Clear All
            </Button>
        </div>

        <div className="space-y-2">
            <Label className="text-lg font-semibold mb-2 block">Generated Prompt (English)</Label>
            <div className="relative">
                <Textarea
                    readOnly
                    value={generatedPrompt}
                    className="h-full min-h-[250px] text-base bg-secondary/30 font-mono"
                    placeholder="Your optimized prompt in English will appear here..."
                />
                 <div className="absolute top-2 right-2 flex gap-1">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={copyToClipboard} 
                      disabled={!generatedPrompt}
                      title="Copy to Clipboard"
                    >
                        <Copy className="h-5 w-5"/>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={savePrompt}
                      disabled={!generatedPrompt}
                      title="Save Prompt"
                    >
                        <Bookmark className="h-5 w-5" />
                    </Button>
                     <Button 
                       variant="ghost" 
                       size="icon" 
                       onClick={downloadPrompt}
                       disabled={!generatedPrompt}
                       title="Download as TXT"
                     >
                        <Download className="h-5 w-5" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => {
                        if (navigator.share && generatedPrompt) {
                          navigator.share({
                            title: 'AI Prompt',
                            text: generatedPrompt,
                          });
                        } else {
                          copyToClipboard();
                        }
                      }}
                      disabled={!generatedPrompt}
                      title="Share Prompt"
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
              Recent Prompts
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
              Saved Prompts ({savedPrompts.length})
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