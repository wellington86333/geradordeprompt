
'use client';
import React, { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('chatgpt');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [promptInput, setPromptInput] = useState('');
  
  // Dados mock para diferentes modelos de IA
  const aiModels: Record<string, {name: string, description: string, example: string}> = {
    chatgpt: {
      name: 'ChatGPT',
      description: 'O poderoso modelo de linguagem da OpenAI para geração de texto',
      example: 'Escreva uma redação de 500 palavras sobre os benefícios da energia renovável'
    },
    midjourney: {
      name: 'MidJourney',
      description: 'Gerador de arte de IA que cria imagens a partir de prompts de texto',
      example: 'Um horizonte de cidade futurista ao pôr do sol, estilo cyberpunk, --v 5 --style raw'
    },
    stable_diffusion: {
      name: 'Stable Diffusion',
      description: 'Modelo de geração de imagem de IA de código aberto',
      example: 'Uma paisagem de fantasia com ilhas flutuantes e cachoeiras [prompt negativo: embaçado, baixa qualidade]'
    }
  };
  
  // Modelos de prompt mock para diferentes modelos de IA
  const promptTemplates: Record<string, string[]> = {
    chatgpt: [
      'Explique [tópico] em termos simples para um [público]',
      'Escreva um(a) [tipo] sobre [assunto] para [propósito]',
      'Gere [número] ideias criativas para [tópico]',
      'Compare [item1] e [item2] com base em [critérios]',
      'Resuma [conteúdo] em [número] pontos'
    ],
    midjourney: [
      '[Descrição da cena], [estilo], --v 5',
      '[Assunto] em [ambiente], [humor], --style raw',
      '[Objeto] desenhado em [estilo], [esquema de cores], --ar [proporção]',
      '[Criatura] com [características], [cenário], --stylize [valor]',
      'Obra de arte do tipo [tipo de arte] retratando [assunto], [estilo do artista], --chaos [valor]'
    ],
    stable_diffusion: [
      '[Descrição da cena], [detalhes] [tags de qualidade]',
      '[Assunto] em [cenário] com [humor], [estilo] [prompt negativo: elementos indesejados]',
      '[Objeto] com [características], [ambiente], [iluminação] [prompt negativo: falhas]',
      '[Criatura] com [traços], [pose] em [localização], [esquema de cores] [prompt negativo: imperfeições]',
      'Obra de arte estilo [estilo de arte] mostrando [assunto], [detalhes] [prompt negativo: baixa qualidade]'
    ]
  };
  
  const generatePrompt = () => {
    if (!promptInput.trim()) return;
    
    // Em um aplicativo real, isso seria mais sofisticado
    // Para esta demonstração, vamos apenas combinar com um modelo aleatório
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Crie Prompts de IA Perfeitos com Facilidade</h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Gere prompts eficazes para ChatGPT, MidJourney, Stable Diffusion e outras ferramentas de IA com nosso gerador de prompts intuitivo.
          </p>
          <a 
            href="#gerador" 
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium text-lg shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1"
          >
            Começar
          </a>
        </div>
      </section>

      {/* What is AI Prompting Section */}
      <section id="o-que-e" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">O que é um Prompt de IA?</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Um prompt de IA é um processo pelo qual você fornece uma entrada textual genérica a um gerador de IA, que então usa essa entrada para gerar uma saída única (texto, imagem, som, vídeo ou outra mídia). Normalmente, isso é feito com o uso de palavras-chave e frases que ajudam a IA a entender que tipo de saída deve criar.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Usando várias técnicas de Processamento de Linguagem Natural, o gerador de IA pode interpretar e reformatar sua entrada para criar algo que não é apenas único, mas também mais significativo.
            </p>
            <div className="mt-8 p-6 bg-muted rounded-lg border-l-4 border-primary">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Visão Chave</h4>
              <p className="text-gray-700">
                Criar prompts é uma arte. Uma arte que requer não apenas conhecimento técnico, mas também uma compreensão da linguagem, cultura e psicologia por trás dela. Escrever prompts de IA é um processo diferente de escrever para humanos, pois você deve levar em consideração não apenas o conteúdo, mas como a IA deve interpretá-lo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps for Writing Effective AI Prompts */}
      <section id="passos" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Passos para Escrever Prompts de IA Eficazes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { number: 1, title: "Defina seu Objetivo", description: "Identifique claramente o que você quer que a IA gere e qual o propósito." },
              { number: 2, title: "Entenda a Linguagem da IA", description: "Aprenda a sintaxe e as palavras-chave específicas usadas pelo modelo de IA com o qual você está trabalhando." },
              { number: 3, title: "Seja Específico e Detalhado", description: "Forneça instruções claras com detalhes suficientes para guiar a saída da IA." },
              { number: 4, title: "Use Exemplos", description: "Inclua exemplos do formato ou estilo desejado para ajudar a IA a entender melhor." },
              { number: 5, title: "Itere e Refine", description: "Teste seus prompts e refine-os com base na qualidade da saída." },
              { number: 6, title: "Experimente e Aprenda", description: "Tente diferentes abordagens para descobrir o que funciona melhor para o seu caso de uso específico." }
            ].map((step, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Writing Effective AI Prompts */}
      <section id="dicas" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Dicas para Escrever Prompts de IA Eficazes</h3>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4">
              {[
                "Use uma linguagem clara e concisa que a IA possa entender facilmente",
                "Incorpore palavras-chave relevantes que se relacionem com a saída desejada",
                "Estruture seu prompt de forma lógica com um começo, meio e fim claros",
                "Para geração de imagens, inclua detalhes sobre estilo, cor, composição",
                "Quando apropriado, especifique o formato ou estrutura que você deseja que a saída siga",
                "Para geração de texto, inclua informações sobre tom, estilo e público",
                "Use modificadores como 'elaborado', 'conciso', 'criativo' ou 'técnico' para guiar a IA",
                "Teste diferentes variações do seu prompt para ver o que produz os melhores resultados"
              ].map((tip, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Free vs Paid AI Tools Section */}
      <section id="gratis-pago" className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Ferramentas de IA Grátis vs Pagas</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Text Generation Tools */}
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold text-gray-800 mb-6">Geração de Texto</h4>
              
              <div className="mb-8">
                <h5 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Ferramentas Grátis
                </h5>
                <ul className="space-y-4">
                  <li className="pl-6 relative">
                    <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <strong>Google Gemini</strong>: Acesso gratuito ao modelo de IA do Google com conectividade à internet.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <strong>HuggingChat</strong>: Chatbot de código aberto com múltiplos modelos de linguagem.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <strong>Perplexity AI (Grátis)</strong>: Combina IA com pesquisa na web para informações atualizadas.
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  Ferramentas Pagas
                </h5>
                <ul className="space-y-4">
                  <li className="pl-6 relative">
                    <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <strong>ChatGPT Plus</strong>: $20/mês para GPT-4, respostas mais rápidas e acesso prioritário.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <strong>Jasper</strong>: $49/mês para copywriting de IA focado em negócios com personalização de voz da marca.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <strong>Copy.ai</strong>: $49/mês para geração de conteúdo focado em marketing com modelos.
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Image Generation Tools */}
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold text-gray-800 mb-6">Geração de Imagem</h4>
              
              <div className="mb-8">
                <h5 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Ferramentas Grátis
                </h5>
                <ul className="space-y-4">
                  <li className="pl-6 relative">
                    <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <strong>Stable Diffusion</strong>: Modelo de código aberto com gerações gratuitas ilimitadas.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <strong>DALL·E Mini (Craiyon)</strong>: Gerador de texto para imagem gratuito com capacidades básicas.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <strong>Leonardo.Ai (Grátis)</strong>: 150 créditos gratuitos/mês para geração de arte com IA.
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  Ferramentas Pagas
                </h5>
                <ul className="space-y-4">
                  <li className="pl-6 relative">
                    <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <strong>MidJourney</strong>: $10/mês para plano básico com 2500 gerações de imagem.
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <strong>Adobe Firefly</strong>: Integrado com a Creative Cloud ($20.99/mês para aplicativo único).
                  </li>
                  <li className="pl-6 relative">
                    <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <strong>Runway ML</strong>: $15/mês para mais de 100 ferramentas de IA com mais de 1000 créditos/mês.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-muted rounded-lg border-l-4 border-primary">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Escolhendo a Opção Certa</h4>
            <p className="text-gray-700">
              Comece com ferramentas gratuitas para entender suas necessidades. Para trabalho profissional, os planos pagos oferecem melhor qualidade, geração mais rápida e recursos avançados. Sempre verifique os direitos de uso para aplicações comerciais.
            </p>
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
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                        activeTab === key 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-foreground hover:bg-muted/80'
                      }`}
                    >
                      {model.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="prompt-input" className="block text-foreground font-medium mb-2">
                  Descreva o que você quer gerar:
                </label>
                <textarea
                  id="prompt-input"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                  placeholder={`Descreva sua solicitação para ${aiModels[activeTab].name}...`}
                  value={promptInput}
                  onChange={(e) => setPromptInput(e.target.value)}
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={generatePrompt}
                  disabled={!promptInput.trim()}
                  className={`px-6 py-3 rounded-lg font-medium text-white transition bg-primary hover:bg-primary/90 disabled:bg-gray-400 disabled:cursor-not-allowed`}
                >
                  Gerar Prompt
                </button>
              </div>
              
              {generatedPrompt && (
                <div className="mt-6 p-4 bg-muted rounded-lg border border-border">
                  <h4 className="font-semibold text-gray-800 mb-2">Seu Prompt Gerado:</h4>
                  <div className="bg-background p-4 rounded border border-input min-h-[80px] mb-4 whitespace-pre-wrap">
                    {generatedPrompt}
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button onClick={copyToClipboard} className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">
                      Copiar
                    </button>
                    <button onClick={generatePrompt} className="px-4 py-2 bg-primary/10 text-primary rounded hover:bg-primary/20 transition">
                      Gerar Novamente
                    </button>
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
            <p className="text-muted-foreground">
              Lembre-se, o sucesso do seu gerador de IA depende da qualidade da sua entrada. Dedique tempo para criar cada prompt com cuidado e teste-o minuciosamente.
            </p>
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
              <p className="text-gray-700">
                Não use o gerador de prompts de IA apenas para gerar prompts. Você pode até usar esses prompts gerados para aprender mais sobre a sintaxe e a linguagem do gerador de IA. Isso o ajudará a criar melhores prompts no futuro.
              </p>
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
          <a 
            href="#gerador" 
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium text-lg shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1"
          >
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

    