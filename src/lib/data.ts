export type AIModel = {
    name: string;
    description: string;
    example: string;
    syntaxGuide: string;
  };
  
export type AIModels = Record<string, AIModel>;
  
export const aiModels: AIModels = {
    veo: {
        name: 'VO3 Google',
        description: 'Modelo de IA do Google para geração de vídeo de alta qualidade a partir de texto.',
        example: 'Um drone sobrevoando uma praia tropical com águas cristalinas e palmeiras ao pôr do sol, cinematográfico, 1080p.',
        syntaxGuide: 'Descreva a cena com detalhes visuais, especificando o tipo de filmagem (ex: "tomada de drone", "câmera lenta"), estilo (ex: "cinematográfico"), e qualidades técnicas (ex: "altamente detalhado", "1080p").'
    },
    chatgpt: {
      name: 'ChatGPT',
      description: 'O poderoso modelo de linguagem da OpenAI para geração de texto',
      example: 'Escreva uma redação de 500 palavras sobre os benefícios da energia renovável para estudantes do ensino médio',
      syntaxGuide: 'Use objetivos claros, especifique o público e inclua instruções de formatação (ex: "em tópicos")'
    },
    claude: {
      name: 'Claude',
      description: 'Modelo de IA da Anthropic focado em segurança e conversação natural.',
      example: 'Explique o conceito de computação quântica como se eu tivesse cinco anos, focando na segurança.',
      syntaxGuide: 'Ideal para diálogos. Forneça personas (ex: "Aja como..."). Use XML para estruturar tarefas complexas.'
    },
    gemini: {
        name: 'Gemini',
        description: 'Modelo de IA multimodal do Google com acesso a informações em tempo real.',
        example: 'Planeje uma viagem de 3 dias para o Rio de Janeiro, incluindo voos e hotéis, e mostre os resultados em uma tabela.',
        syntaxGuide: 'Faça perguntas diretas. Pode solicitar informações da web e formatos de saída específicos como tabelas ou JSON.'
    },
    perplexity: {
        name: 'Perplexity',
        description: 'Motor de busca conversacional que cita fontes para suas respostas.',
        example: 'Quais são os avanços mais recentes na tecnologia de baterias? Inclua fontes acadêmicas.',
        syntaxGuide: 'Formule perguntas como se estivesse pesquisando. Peça fontes para verificar a informação.'
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
    },
    dalle3: {
      name: 'DALL-E 3',
      description: 'Gerador de imagens da OpenAI que entende linguagem natural complexa.',
      example: 'Uma pintura a óleo de um guaxinim em um terno lendo um livro em uma poltrona aconchegante.',
      syntaxGuide: 'Seja descritivo e detalhado. DALL-E 3 entende frases completas e nuances, não precisa de sintaxe especial.'
    }
  };
  
export const promptTemplates: Record<string, string[]> = {
    veo: [
        'Tomada cinematográfica de [assunto] em [local], [iluminação], [hora do dia].',
        'Um vídeo em lapso de tempo de [evento] mostrando [detalhes].',
        'Visão de drone sobrevoando [paisagem] com [elementos].',
        'Cena em câmera lenta de [ação], estilo [estilo visual].',
        'Um vídeo realista de [animal] em seu habitat natural, [detalhes do ambiente].'
    ],
    chatgpt: [
      'Explique [tópico] para [público] usando [analogia]',
      'Escreva um(a) [tipo] sobre [assunto] com [tom]',
      'Gere [número] ideias criativas para [tópico] com [restrição]',
      'Compare [item1] e [item2] com base em [critérios] em formato de tabela',
      'Resuma [conteúdo] em [número] tópicos com emojis'
    ],
    claude: [
      'Aja como um [profissão] e explique [conceito] para um [público].',
      'Crie um diálogo entre um [personagem A] e um [personagem B] sobre [tópico].',
      'Resuma o seguinte texto sobre [assunto] e liste os pontos principais.',
      'Forneça uma análise de sentimento sobre a seguinte frase: [frase].',
      'Escreva um e-mail [formal/informal] para [destinatário] sobre [assunto].'
    ],
    gemini: [
      'Crie um roteiro de [duração] para um vídeo do YouTube sobre [tópico].',
      'Liste os prós e contras de [tecnologia] em formato de tabela.',
      'Encontre e resuma as últimas notícias sobre [empresa ou indústria].',
      'Gere uma lista de ideias para posts de blog sobre [nicho de mercado].',
      'Traduza a seguinte frase para [idioma]: "[frase]".'
    ],
    perplexity: [
      'Quais são as principais pesquisas sobre [tópico científico]? Forneça links para os artigos.',
      'Compare [produto A] e [produto B] com base em análises de usuários e especificações técnicas.',
      'Explique [evento histórico] com uma linha do tempo e fontes confiáveis.',
      'Encontre um tutorial passo a passo para [tarefa técnica].',
      'Resuma os argumentos a favor e contra [tópico controverso], citando as fontes.'
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
    ],
    dalle3: [
      'Uma ilustração detalhada de [assunto] em um estilo [estilo artístico].',
      'Uma foto realista de [objeto] em um [ambiente] com [iluminação específica].',
      'Um [personagem] fazendo [ação] em um cenário [fantástico/futurista].',
      'Uma renderização 3D isométrica de um [cômodo] com [móveis e decoração].',
      'A capa de um livro de [gênero] com o título "[título do livro]" em destaque.'
    ]
  };
