'use client';
import { Mic, MicOff } from 'lucide-react';
import type React from 'react';

type AIModel = {
  name: string;
  description: string;
  example: string;
  syntaxGuide: string;
};

type AIModels = Record<string, AIModel>;

interface PromptGeneratorProps {
  aiModels: AIModels;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  promptInput: string;
  setPromptInput: (input: string) => void;
  generatedPrompt: string;
  showSyntaxGuide: boolean;
  setShowSyntaxGuide: (show: boolean) => void;
  isRecording: boolean;
  handleVoiceInput: () => void;
  generatePrompt: () => void;
  copyToClipboard: () => void;
}

const PromptGenerator: React.FC<PromptGeneratorProps> = ({ 
  aiModels,
  activeTab, 
  setActiveTab, 
  promptInput, 
  setPromptInput, 
  generatedPrompt, 
  showSyntaxGuide, 
  setShowSyntaxGuide, 
  isRecording,
  handleVoiceInput, 
  generatePrompt, 
  copyToClipboard 
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="mb-6">
          <p className="text-muted-foreground mb-4">Selecione um modelo de IA para gerar um prompt:</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(aiModels).map(([key, model]) => (
              <button key={key} onClick={() => setActiveTab(key)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === key ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground hover:bg-muted/80'}`}>
                {model.name}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="prompt-input" className="block text-foreground font-medium mb-2">Descreva o que você quer gerar:</label>
          <div className="relative">
            <textarea id="prompt-input" rows={4} className="w-full px-4 py-3 pr-12 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent" placeholder={`Descreva sua solicitação para ${aiModels[activeTab]?.name}...`} value={promptInput} onChange={(e) => setPromptInput(e.target.value)}></textarea>
            <button onClick={handleVoiceInput} className={`absolute right-3 top-3 p-1 rounded-full transition-colors ${isRecording ? 'bg-red-500/20 text-red-500' : 'text-muted-foreground hover:bg-muted'}`} title={isRecording ? 'Parar Gravação' : 'Gravar Prompt por Voz'}>
              {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button onClick={() => setShowSyntaxGuide(!showSyntaxGuide)} className="px-4 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition">
            {showSyntaxGuide ? 'Ocultar Guia' : 'Mostrar Guia'}
          </button>
          <button onClick={generatePrompt} disabled={!promptInput.trim()} className="px-6 py-3 rounded-lg font-medium text-white transition bg-primary hover:bg-primary/90 disabled:bg-gray-400 disabled:cursor-not-allowed">
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
            <h4 className="font-semibold text-gray-800 mb-2">Seu Prompt Gerado:</h4>
            <div className="bg-background p-4 rounded border border-input min-h-[80px] mb-4 whitespace-pre-wrap">{generatedPrompt}</div>
            <div className="flex justify-end space-x-2">
              <button onClick={copyToClipboard} className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">Copiar</button>
              <button onClick={generatePrompt} className="px-4 py-2 bg-primary/10 text-primary rounded hover:bg-primary/20 transition">Gerar Novamente</button>
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
