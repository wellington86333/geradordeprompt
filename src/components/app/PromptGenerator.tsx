'use client';
import { Mic, MicOff, Copy, Share2, Save, Send } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { useToast } from "@/hooks/use-toast";
import { aiModels, promptTemplates } from '@/lib/data';

const PromptGenerator: React.FC = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('veo');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [promptInput, setPromptInput] = useState('');
  const [showSyntaxGuide, setShowSyntaxGuide] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef<any>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'pt-BR';
        recognition.interimResults = false;

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setPromptInput(transcript);
          setIsRecording(false);
        };

        recognition.onerror = (event) => {
          console.error('Speech recognition error', event.error);
          setIsRecording(false);
          toast({
            variant: 'destructive',
            title: 'Erro de Gravação',
            description: 'Não foi possível iniciar o reconhecimento de voz.',
          });
        };
        
        recognition.onend = () => {
          setIsRecording(false);
        };

        recognitionRef.current = recognition;
      }
    }
  }, [toast]);

  const handleVoiceInput = () => {
    if (recognitionRef.current) {
      if (isRecording) {
        recognitionRef.current.stop();
        setIsRecording(false);
      } else {
        recognitionRef.current.start();
        setIsRecording(true);
      }
    } else {
      toast({
        variant: 'destructive',
        title: 'Não Suportado',
        description: 'O reconhecimento de voz não é suportado neste navegador.',
      });
    }
  };

  const generatePrompt = () => {
    if (!promptInput.trim()) return;
    
    const templates = promptTemplates[activeTab];
    if (!templates) return;
    
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    const newPrompt = randomTemplate.replace(/\[.*?\]/g, promptInput);
    setGeneratedPrompt(newPrompt);
  };

  const copyToClipboard = () => {
    if (generatedPrompt) {
      navigator.clipboard.writeText(generatedPrompt).then(() => {
        setCopied(true);
        toast({
          title: 'Copiado!',
          description: 'Prompt copiado para a área de transferência!',
        });
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const savePrompt = () => {
    if (generatedPrompt) {
      const savedPrompts = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
      savedPrompts.push({
        prompt: generatedPrompt,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('savedPrompts', JSON.stringify(savedPrompts));
      toast({
        title: 'Salvo!',
        description: 'Seu prompt foi salvo localmente.',
      });
    }
  };

  const sharePrompt = () => {
    if (generatedPrompt) {
      const shareUrl = `https://example.com/share?prompt=${encodeURIComponent(generatedPrompt)}`;
      navigator.clipboard.writeText(shareUrl).then(() => {
        toast({
          title: 'Link Copiado!',
          description: 'Link para compartilhar copiado para a área de transferência.',
        });
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="mb-6">
          <p className="text-muted-foreground mb-4">Selecione um modelo de IA para gerar um prompt:</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(aiModels).map(([key, model]) => (
              <button key={key} onClick={() => setActiveTab(key)} className={`px-4 py-2 rounded-full text-sm font-medium transition transform hover:-translate-y-0.5 ${activeTab === key ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-muted text-foreground hover:bg-muted/80'}`}>
                {model.name}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="prompt-input" className="block text-foreground font-medium mb-2">Descreva o que você quer gerar:</label>
          <div className="relative">
            <textarea id="prompt-input" rows={4} className="w-full px-4 py-3 pr-12 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent" placeholder={`Descreva sua solicitação para ${aiModels[activeTab]?.name}...`} value={promptInput} onChange={(e) => setPromptInput(e.target.value)}></textarea>
            <button onClick={handleVoiceInput} className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300 ${isRecording ? 'bg-red-500/20 text-red-500 animate-pulse' : 'text-muted-foreground hover:bg-muted hover:text-primary'}`} title={isRecording ? 'Parar Gravação' : 'Gravar Prompt por Voz'}>
              {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button onClick={() => setShowSyntaxGuide(!showSyntaxGuide)} className="px-4 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition transform hover:-translate-y-0.5">
            {showSyntaxGuide ? 'Ocultar Guia' : 'Mostrar Guia'}
          </button>
          <button onClick={generatePrompt} disabled={!promptInput.trim()} className="px-8 py-3 rounded-lg font-medium text-white transition disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 animated-gradient">
            <Send className="w-4 h-4" />
            Gerar Prompt
          </button>
        </div>
        {showSyntaxGuide && (
          <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
            <h4 className="font-semibold text-primary/90 mb-2">Guia de Sintaxe para {aiModels[activeTab]?.name}:</h4>
            <p className="text-muted-foreground">{aiModels[activeTab]?.syntaxGuide}</p>
          </div>
        )}
        {generatedPrompt && (
          <div className="mt-6 p-4 bg-muted rounded-lg border border-border">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Seu Prompt Gerado:</h4>
            <div className="bg-background p-4 rounded border border-input min-h-[80px] mb-4 whitespace-pre-wrap">{generatedPrompt}</div>
            <div className="flex justify-end space-x-2">
              <button onClick={copyToClipboard} className={`px-4 py-2 rounded-lg font-medium transition flex items-center gap-2 transform hover:-translate-y-0.5 ${copied ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-200'} hover:bg-gray-300 dark:hover:bg-gray-500`}>
                 <Copy className="w-4 h-4" /> {copied ? 'Copiado!' : 'Copiar'}
              </button>
              <button onClick={generatePrompt} className="px-4 py-2 bg-primary/10 text-primary rounded hover:bg-primary/20 transition transform hover:-translate-y-0.5">Gerar Novamente</button>
              <button onClick={savePrompt} className="px-4 py-2 bg-green-100 text-green-800 rounded hover:bg-green-200 transition flex items-center gap-2 transform hover:-translate-y-0.5">
                <Save className="w-4 h-4" /> Salvar
              </button>
              <button onClick={sharePrompt} className="px-4 py-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition flex items-center gap-2 transform hover:-translate-y-0.5">
                <Share2 className="w-4 h-4" /> Compartilhar
              </button>
            </div>
          </div>
        )}
        <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <h4 className="font-semibold text-primary/90 mb-2">Exemplo de Prompt para {aiModels[activeTab]?.name}:</h4>
          <p className="text-muted-foreground">{aiModels[activeTab]?.example}</p>
        </div>
      </div>
    </div>
  );
};

export default PromptGenerator;
