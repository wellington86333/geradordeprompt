import { PromptTemplate } from './prompt-templates';

export interface PromptGenerationOptions {
  template?: PromptTemplate;
  aiModel: string;
  userInput: string;
  variables?: Record<string, string>;
  customInstructions?: string;
  outputLanguage?: 'pt' | 'en';
  tone?: string;
  complexity?: 'simple' | 'intermediate' | 'advanced';
}

export interface GeneratedPrompt {
  content: string;
  metadata: {
    aiModel: string;
    template?: string;
    generatedAt: Date;
    estimatedTokens: number;
    language: string;
  };
}

export class PromptGenerator {
  private static readonly AI_MODEL_CONFIGS = {
    chatgpt: {
      name: 'ChatGPT (OpenAI)',
      maxTokens: 4096,
      strengths: ['conversação', 'escrita criativa', 'análise'],
      prefix: 'Você é um assistente especializado da OpenAI.',
      suffix: 'Forneça uma resposta detalhada e útil.'
    },
    claude: {
      name: 'Claude (Anthropic)',
      maxTokens: 8192,
      strengths: ['análise profunda', 'escrita técnica', 'raciocínio'],
      prefix: 'Você é Claude, um assistente IA criado pela Anthropic.',
      suffix: 'Seja preciso, analítico e forneça insights valiosos.'
    },
    gemini: {
      name: 'Gemini (Google)',
      maxTokens: 8192,
      strengths: ['multimodal', 'pesquisa', 'raciocínio complexo'],
      prefix: 'Você é Gemini, desenvolvido pelo Google.',
      suffix: 'Use suas capacidades multimodais e de raciocínio avançado.'
    },
    perplexity: {
      name: 'Perplexity',
      maxTokens: 4096,
      strengths: ['pesquisa', 'fatos atuais', 'citações'],
      prefix: 'Você é um assistente de pesquisa especializado.',
      suffix: 'Forneça informações precisas com fontes quando possível.'
    },
    vo3_google: {
      name: 'VO3 Google',
      maxTokens: 2048,
      strengths: ['geração de vídeo', 'narrativa visual'],
      prefix: 'Crie um conceito detalhado para geração de vídeo.',
      suffix: 'Inclua especificações técnicas e narrativa visual.'
    },
    midjourney: {
      name: 'Midjourney',
      maxTokens: 1024,
      strengths: ['arte digital', 'composição visual', 'estilos artísticos'],
      prefix: '',
      suffix: ' --ar 16:9 --v 6 --style raw --quality 2'
    },
    dall_e: {
      name: 'DALL-E (OpenAI)',
      maxTokens: 1024,
      strengths: ['realismo', 'conceitos abstratos', 'precisão'],
      prefix: 'Crie uma imagem de alta qualidade de',
      suffix: ', fotografia profissional, detalhada, resolução 8K'
    },
    stable_diffusion: {
      name: 'Stable Diffusion',
      maxTokens: 1024,
      strengths: ['customização', 'estilos variados', 'controle fino'],
      prefix: '',
      suffix: ', obra-prima, melhor qualidade, ultra detalhado, 8k'
    }
  };

  static generatePrompt(options: PromptGenerationOptions): GeneratedPrompt {
    const config = this.AI_MODEL_CONFIGS[options.aiModel as keyof typeof this.AI_MODEL_CONFIGS];
    
    if (!config) {
      throw new Error(`Modelo de IA não suportado: ${options.aiModel}`);
    }

    let promptContent = '';

    // Se há um template, use-o
    if (options.template) {
      promptContent = this.processTemplate(options.template, options.variables || {});
    } else {
      // Gere um prompt básico baseado na entrada do usuário
      promptContent = this.generateBasicPrompt(options);
    }

    // Aplique configurações específicas do modelo
    promptContent = this.applyModelSpecificFormatting(promptContent, options.aiModel, config);

    // Adicione instruções customizadas se fornecidas
    if (options.customInstructions) {
      promptContent += `\n\n**Instruções adicionais:**\n${options.customInstructions}`;
    }

    // Calcule tokens estimados (aproximação)
    const estimatedTokens = Math.ceil(promptContent.length / 4);

    return {
      content: promptContent,
      metadata: {
        aiModel: options.aiModel,
        template: options.template?.id,
        generatedAt: new Date(),
        estimatedTokens,
        language: options.outputLanguage || 'pt'
      }
    };
  }

  private static processTemplate(template: PromptTemplate, variables: Record<string, string>): string {
    let processedTemplate = template.template;

    // Substitua variáveis no template
    template.variables.forEach(variable => {
      const value = variables[variable] || `{${variable}}`;
      const regex = new RegExp(`{${variable}}`, 'g');
      processedTemplate = processedTemplate.replace(regex, value);
    });

    return processedTemplate;
  }

  private static generateBasicPrompt(options: PromptGenerationOptions): string {
    const { aiModel, userInput, tone, complexity, outputLanguage } = options;
    const config = this.AI_MODEL_CONFIGS[aiModel as keyof typeof this.AI_MODEL_CONFIGS];

    // Templates básicos por tipo de modelo
    if (['midjourney', 'dall_e', 'stable_diffusion'].includes(aiModel)) {
      return this.generateImagePrompt(userInput, aiModel);
    }

    if (aiModel === 'vo3_google') {
      return this.generateVideoPrompt(userInput);
    }

    // Para modelos de texto
    return this.generateTextPrompt(userInput, tone, complexity, outputLanguage);
  }

  private static generateImagePrompt(userInput: string, aiModel: string): string {
    const styleKeywords = this.extractStyleKeywords(userInput);
    const basePrompt = userInput;
    
    let enhancedPrompt = basePrompt;

    // Adicione palavras-chave de qualidade
    const qualityKeywords = [
      'high quality', 'detailed', 'professional', 'masterpiece',
      'ultra detailed', '8k resolution', 'sharp focus'
    ];

    // Adicione configurações específicas do modelo
    if (aiModel === 'midjourney') {
      enhancedPrompt += ', cinematic lighting, professional composition';
    } else if (aiModel === 'dall_e') {
      enhancedPrompt += ', photorealistic, studio lighting';
    } else if (aiModel === 'stable_diffusion') {
      enhancedPrompt += ', best quality, ultra detailed';
    }

    return enhancedPrompt;
  }

  private static generateVideoPrompt(userInput: string): string {
    return `Crie um vídeo conceitual baseado em: ${userInput}

**Especificações do vídeo:**
- Duração: 30-60 segundos
- Resolução: 4K (3840x2160)
- Frame rate: 30fps
- Estilo visual: Cinematográfico

**Elementos narrativos:**
- Introdução impactante (0-5s)
- Desenvolvimento da ideia (5-45s)
- Conclusão memorável (45-60s)

**Direção técnica:**
- Movimentos de câmera suaves
- Transições profissionais
- Iluminação cinematográfica
- Composição visual equilibrada

**Mood e atmosfera:**
- Tom: Profissional e envolvente
- Cores: Paleta harmoniosa
- Ritmo: Dinâmico mas controlado`;
  }

  private static generateTextPrompt(
    userInput: string, 
    tone?: string, 
    complexity?: string, 
    outputLanguage?: string
  ): string {
    const lang = outputLanguage === 'en' ? 'inglês' : 'português brasileiro';
    
    let prompt = `Ajude-me com a seguinte solicitação: ${userInput}\n\n`;

    prompt += `**Diretrizes:**\n`;
    
    if (tone) {
      prompt += `- Tom: ${tone}\n`;
    }
    
    if (complexity) {
      const complexityMap = {
        simple: 'Linguagem simples e direta',
        intermediate: 'Linguagem técnica moderada',
        advanced: 'Linguagem técnica avançada'
      };
      prompt += `- Complexidade: ${complexityMap[complexity]}\n`;
    }

    prompt += `- Idioma da resposta: ${lang}\n`;
    prompt += `- Forneça uma resposta completa e bem estruturada\n`;
    prompt += `- Use exemplos práticos quando relevante\n`;
    prompt += `- Seja preciso e útil\n`;

    return prompt;
  }

  private static applyModelSpecificFormatting(
    content: string, 
    aiModel: string, 
    config: any
  ): string {
    let formattedContent = content;

    // Adicione prefixo específico do modelo
    if (config.prefix) {
      formattedContent = `${config.prefix}\n\n${formattedContent}`;
    }

    // Adicione sufixo específico do modelo
    if (config.suffix) {
      formattedContent += config.suffix;
    }

    // Verifique limite de tokens
    if (formattedContent.length > config.maxTokens * 4) {
      console.warn(`Prompt pode exceder limite de tokens para ${aiModel}`);
    }

    return formattedContent;
  }

  private static extractStyleKeywords(input: string): string[] {
    const styleKeywords = [
      'realista', 'cartoon', 'anime', 'pintura', 'fotografia',
      'minimalista', 'detalhado', 'colorido', 'monocromático',
      'vintage', 'moderno', 'futurista', 'clássico'
    ];

    return styleKeywords.filter(keyword => 
      input.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  static validatePrompt(prompt: string, aiModel: string): {
    isValid: boolean;
    warnings: string[];
    suggestions: string[];
  } {
    const warnings: string[] = [];
    const suggestions: string[] = [];
    const config = this.AI_MODEL_CONFIGS[aiModel as keyof typeof this.AI_MODEL_CONFIGS];

    // Verifique comprimento
    const estimatedTokens = Math.ceil(prompt.length / 4);
    if (estimatedTokens > config.maxTokens * 0.8) {
      warnings.push(`Prompt pode ser muito longo para ${config.name}`);
      suggestions.push('Considere dividir em partes menores');
    }

    // Verifique se está vazio
    if (prompt.trim().length === 0) {
      warnings.push('Prompt está vazio');
      return { isValid: false, warnings, suggestions };
    }

    // Sugestões específicas por modelo
    if (['midjourney', 'dall_e', 'stable_diffusion'].includes(aiModel)) {
      if (!prompt.includes('quality') && !prompt.includes('detailed')) {
        suggestions.push('Adicione palavras-chave de qualidade para melhores resultados');
      }
    }

    return {
      isValid: warnings.length === 0,
      warnings,
      suggestions
    };
  }

  static getModelRecommendation(userInput: string): string {
    const input = userInput.toLowerCase();

    // Palavras-chave para diferentes modelos
    const modelKeywords = {
      chatgpt: ['conversa', 'chat', 'diálogo', 'explicar', 'ensinar'],
      claude: ['análise', 'pesquisa', 'documento', 'revisar', 'avaliar'],
      gemini: ['multimodal', 'imagem', 'vídeo', 'complexo', 'raciocínio'],
      perplexity: ['pesquisar', 'fatos', 'atual', 'notícias', 'dados'],
      midjourney: ['arte', 'imagem', 'design', 'visual', 'criativo'],
      dall_e: ['foto', 'realista', 'imagem', 'gerar'],
      stable_diffusion: ['personalizado', 'estilo', 'controle', 'imagem'],
      vo3_google: ['vídeo', 'animação', 'movimento', 'cinematográfico']
    };

    let bestMatch = 'chatgpt';
    let maxMatches = 0;

    Object.entries(modelKeywords).forEach(([model, keywords]) => {
      const matches = keywords.filter(keyword => input.includes(keyword)).length;
      if (matches > maxMatches) {
        maxMatches = matches;
        bestMatch = model;
      }
    });

    return bestMatch;
  }
}