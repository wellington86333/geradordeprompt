
'use client';
import React, { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('chatgpt');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [promptInput, setPromptInput] = useState('');
  const [showSyntaxGuide, setShowSyntaxGuide] = useState(false);
  
  const aiModels: Record<string, {name: string, description: string, example: string, syntaxGuide: string}> = {
    chatgpt: {
      name: 'ChatGPT',
      description: 'O poderoso modelo de linguagem da OpenAI para geração de texto',
      example: 'Escreva uma redação de 500 palavras sobre os benefícios da energia renovável para estudantes do ensino médio',
      syntaxGuide: 'Use objetivos claros, especifique o público e inclua instruções de formatação (ex: "em tópicos")'
    },
    midjourney: {
      name: 'MidJourney',
      description: 'Gerador de arte de IA com personalização avançada de estilo',
      example: 'Uma paisagem urbana cyberpunk ao pôr do sol --v 5 --style raw --ar 16:9',
      syntaxGuide: 'Use "--" para parâmetros, especifique a proporção (--ar), versão (--v) e estilo (--style raw)'
    },
    stable_diffusion: {
      name: 'Stable Diffusion',
      description: 'Geração de imagens de código aberto com suporte a prompts negativos',
      example: 'Ilhas flutuantes de fantasia [prompt negativo: estilo de desenho animado, baixa resolução] --stylize 800',
      syntaxGuide: 'Use colchetes para prompts negativos e "--stylize" para controle de criatividade'
    }
  };
  
  const promptTemplates: Record<string, string[]> = {
    chatgpt: [
      'Explique [tópico] para [público] usando [analogia]',
      'Escreva um(a) [tipo] sobre [assunto] com [tom]',
      'Gere [número] ideias criativas para [tópico] com [restrição]',
      'Compare [item1] e [item2] com base em [critérios] em formato de tabela',
      'Resuma [conteúdo] em [número] tópicos com emojis'
    ],
    midjourney: [
      '[Descrição da cena], [estilo], --v 5 --ar [proporção]',
      '[Assunto] em [ambiente], [humor], --style [raw/photographic]',
      '[Objeto] desenhado em [estilo], [esquema de cores], --chaos [1-100]',
      '[Criatura] com [características], [cenário], --stylize [valor]',
      'Obra de arte do tipo [tipo de arte] retratando [assunto], [estilo do artista], --seed [número]'
    ],
    stable_diffusion: [
      '[Descrição da cena], [detalhes] [tags de qualidade]',
      '[Assunto] em [cenário] com [humor], [estilo] [prompt negativo: elementos indesejados]',
      '[Objeto] com [características], [ambiente], [iluminação] [prompt negativo: falhas]',
      '[Criatura] com [traços], [pose] em [localização], [esquema de cores] [prompt negativo: imperfeições]',
      'Obra de arte estilo [estilo de arte] mostrando [assunto], [detalhes] [prompt negativo: baixa qualidade] --stylize [valor]'
    ]
  };
  
  const generatePrompt = () => {
    if (!promptInput.trim()) return;
    
    const templates = promptTemplates[activeTab];
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    const newPrompt = randomTemplate.replace(/\[.*?\]/g, promptInput);
    setGeneratedPrompt(newPrompt);
  };

  const copyToClipboard = () => {
    if (generatedPrompt) {
        navigator.clipboard.writeText(generatedPrompt).then(() => {
            alert('Prompt copiado para a área de transferência!');
        });
    }
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h1 className="text-xl font-bold text-gray-800">Gerador de Prompt de IA</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#o-que-e" className="text-gray-600 hover:text-primary transition">O que é um Prompt de IA?</a></li>
              <li><a href="#passos" className="text-gray-600 hover:text-primary transition">Passos</a></li>
              <li><a href="#dicas" className="text-gray-600 hover:text-primary transition">Dicas</a></li>
              <li><a href="#gratis-pago" className="text-gray-600 hover:text-primary transition">Grátis vs Pago</a></li>
              <li><a href="#gerador" className="text-gray-600 hover:text-primary transition">Gerador de Prompt</a></li>
            </ul>
          </nav>
          <button className="md:hidden text-gray-600 hover:text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Crie Prompts de IA Perfeitos com Maestria na Linguagem de IA</h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Aprenda a linguagem única da IA enquanto gera prompts eficazes para ChatGPT, MidJourney, Stable Diffusion e outras ferramentas.
          </p>
          <a 
            href="#gerador" 
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium text-lg shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1"
          >
            Comece a Gerar
          </a>
        </div>
      </section>

      {/* What is AI Prompting Section */}
      <section id="o-que-e" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Entendendo a Linguagem Única da IA</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/10 p-8 rounded-lg mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Criar prompts é uma arte que requer conhecimento técnico e uma compreensão da linguagem, cultura e psicologia da IA. Diferente da comunicação humana, você deve considerar não apenas o conteúdo, mas como a IA o interpreta através de seus dados de treinamento e arquitetura.
              </p>
              <div className="flex items-start mt-6">
                <svg className="w-6 h-6 text-primary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="text-gray-700">
                  <strong>Especificidade da Linguagem de IA:</strong> Cada modelo tem requisitos de sintaxe únicos - Midjourney usa atributos "--", Stable Diffusion requer prompts negativos entre colchetes, etc.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted p-6 rounded-lg border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Linguagem Humana</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Compreensão contextual
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Nuança emocional
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Referências culturais
                  </li>
                </ul>
              </div>
              <div className="bg-muted p-6 rounded-lg border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Linguagem de IA</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>
                    Requisitos de sintaxe específicos
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>
                    Otimização de parâmetros
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>
                    Especificação de prompt negativo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps for Writing Effective AI Prompts */}
      <section id="passos" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Passos para Escrever Prompts de IA Eficazes</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { number: 1, title: "Defina uma Intenção Clara", description: "Especifique exatamente o que você quer que a IA crie e seu propósito. Seja explícito sobre formato, estilo e requisitos.", icon: "🎯" },
                { number: 2, title: "Aprenda a Sintaxe da IA", description: "Entenda os requisitos específicos do modelo, como os --parâmetros do Midjourney ou os prompts negativos do Stable Diffusion.", icon: "🧠" },
                { number: 3, title: "Forneça Contexto", description: "Inclua informações sobre o público, tom e exemplos do estilo de saída desejado para guiar a interpretação da IA.", icon: "📖" },
                { number: 4, title: "Itere e Refine", description: "Teste os prompts, analise os resultados e ajuste os parâmetros para otimizar os resultados para suas necessidades específicas.", icon: "🔄" }
              ].map((step, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Writing Effective AI Prompts */}
      <section id="dicas" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Dicas para Escrever Prompts de IA Eficazes</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-800">Princípios Fundamentais</h4>
                {[
                  "Use uma linguagem clara e precisa que a IA possa interpretar facilmente",
                  "Incorpore sintaxe e parâmetros específicos do modelo",
                  "Estruture os prompts com instruções e restrições explícitas",
                  "Especifique requisitos de tom, estilo e público"
                ].map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-800">Técnicas Avançadas</h4>
                {[
                  "Use prompts de role-playing (ex: 'Aja como um designer profissional')",
                  "Inclua exemplos do formato de saída desejado",
                  "Otimize os valores dos parâmetros através da experimentação",
                  "Combine múltiplos prompts para saídas complexas"
                ].map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free vs Paid AI Tools Section */}
      <section id="gratis-pago" className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Ferramentas de IA Grátis vs Pagas</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold text-gray-800 mb-6">Geração de Texto</h4>
              <div className="mb-8">
                <h5 className="text-xl font-semibold text-gray-700 mb-4 flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Ferramentas Grátis</h5>
                <ul className="space-y-4">
                  <li className="pl-6 relative"><span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-green-500 rounded-full"></span><strong>Google Gemini</strong>: Acesso gratuito ao modelo de IA do Google com conectividade à internet.</li>
                  <li className="pl-6 relative"><span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-green-500 rounded-full"></span><strong>HuggingChat</strong>: Chatbot de código aberto com múltiplos modelos de linguagem.</li>
                  <li className="pl-6 relative"><span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-green-500 rounded-full"></span><strong>Perplexity AI (Grátis)</strong>: Combina IA com pesquisa na web para informações atualizadas.</li>
                </ul>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-gray-700 mb-4 flex items-center"><svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>Ferramentas Pagas</h5>
                <ul className="space-y-4">
                  <li className="pl-6 relative"><span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-primary rounded-full"></span><strong>ChatGPT Plus</strong>: $20/mês para GPT-4, respostas mais rápidas e acesso prioritário.</li>
                  <li className="pl-6 relative"><span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-primary rounded-full"></span><strong>Jasper</strong>: $49/mês para copywriting de IA focado em negócios com personalização de voz da marca.</li>
                  <li className="pl-6 relative"><span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-primary rounded-full"></span><strong>Copy.ai</strong>: $49/mês para geração de conteúdo focado em marketing com modelos.</li>
                </ul>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold text-gray-800 mb-6">Geração de Imagem</h4>
              <div className="mb-8">
                <h5 className="text-xl font-semibold text-gray-700 mb-4 flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Ferramentas Grátis</h5>
                <ul className="space-y-4">
                  <li className="pl-6 relative"><span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-green-500 rounded-full"></span><strong>Stable Diffusion</strong>: Modelo de código aberto com gerações gratuitas ilimitadas.</li>
                  <li className="pl-6 relative"><span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-green-500 rounded-full"></span><strong>DALL·E Mini (Craiyon)</strong>: Gerador de texto para imagem gratuito com capacidades básicas.</li>
                  <li className="pl-6 relative"><span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-green-500 rounded-full"></span><strong>Leonardo.Ai (Grátis)</strong>: 150 créditos gratuitos/mês para geração de arte com IA.</li>
                </ul>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-gray-700 mb-4 flex items-center"><svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>Ferramentas Pagas</h5>
                <ul className="space-y-4">
                  <li className="pl-6 relative"><span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-primary rounded-full"></span><strong>MidJourney</strong>: $10/mês para plano básico com 2500 gerações de imagem.</li>
                  <li className="pl-6 relative"><span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-primary rounded-full"></span><strong>Adobe Firefly</strong>: Integrado com a Creative Cloud ($20.99/mês para aplicativo único).</li>
                  <li className="pl-6 relative"><span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-primary rounded-full"></span><strong>Runway ML</strong>: $15/mês para mais de 100 ferramentas de IA com mais de 1000 créditos/mês.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 p-6 bg-muted rounded-lg border-l-4 border-primary">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Escolhendo a Opção Certa</h4>
            <p className="text-gray-700">Comece com ferramentas gratuitas para entender suas necessidades. Para trabalho profissional, os planos pagos oferecem melhor qualidade, geração mais rápida e recursos avançados. Sempre verifique os direitos de uso para aplicações comerciais.</p>
          </div>
        </div>
      </section>

      {/* AI Prompt Generator Section */}
      <section id="gerador" className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Gerador de Prompt de IA</h3>
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
                <textarea id="prompt-input" rows={4} className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent" placeholder={`Descreva sua solicitação para ${aiModels[activeTab].name}...`} value={promptInput} onChange={(e) => setPromptInput(e.target.value)}></textarea>
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
                  <h4 className="font-semibold text-primary/90 mb-2">Guia de Sintaxe para {aiModels[activeTab].name}:</h4>
                  <p className="text-muted-foreground">{aiModels[activeTab].syntaxGuide}</p>
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
                <h4 className="font-semibold text-primary/90 mb-2">Exemplo de Prompt para {aiModels[activeTab].name}:</h4>
                <p className="text-muted-foreground">{aiModels[activeTab].example}</p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">Lembre-se, o sucesso do seu gerador de IA depende da qualidade da sua entrada. Dedique tempo para criar cada prompt com cuidado e teste-o minuciosamente.</p>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Como Usar um Gerador de Prompt de IA?</h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">1</div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-800">Selecione seu Modelo de IA</h4>
                  <p className="text-muted-foreground">Escolha a plataforma de IA que você está usando, como ChatGPT, MidJourney ou Stable Diffusion.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">2</div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-800">Descreva sua Solicitação</h4>
                  <p className="text-muted-foreground">Explique claramente o que você quer que a IA gere, incluindo quaisquer detalhes ou requisitos específicos.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">3</div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-800">Gere o Prompt</h4>
                  <p className="text-muted-foreground">Clique no botão 'Gerar Prompt' para criar um prompt otimizado e adaptado ao seu modelo de IA escolhido.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">4</div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-800">Refine e Use</h4>
                  <p className="text-muted-foreground">Revise o prompt gerado, faça os ajustes necessários e use-o com seu gerador de IA.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-muted rounded-lg border-l-4 border-primary">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Dica Profissional</h4>
              <p className="text-gray-700">Use os prompts gerados para aprender a linguagem da IA. Analise como diferentes parâmetros e sintaxe afetam o resultado para melhorar suas habilidades de criação de prompts ao longo do tempo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Comece a Criar Melhores Prompts de IA Hoje</h3>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Seja para criar texto, imagens ou outro conteúdo com IA, nosso gerador de prompts o ajudará a obter melhores resultados com menos esforço.
          </p>
          <a href="#gerador" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium text-lg shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
            Experimente o Gerador de Prompts
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h2 className="text-xl font-bold">Gerador de Prompt de IA</h2>
              </div>
              <p className="text-gray-400 max-w-xs">
                Crie prompts eficazes para geradores de IA com nossa ferramenta intuitiva de geração de prompts.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div>
                <h4 className="font-semibold text-lg mb-4">Produto</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Recursos</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Preços</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Documentação</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Recursos</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Tutoriais</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Suporte</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Empresa</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Sobre</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Contato</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Privacidade</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Gerador de Prompt de IA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
