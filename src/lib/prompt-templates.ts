export interface PromptTemplate {
    id: string;
    name: string;
    description: string;
    category: string;
    template: string;
    variables: string[];
    aiModels: string[];
    examples?: string[];
}

export interface PromptCategory {
    id: string;
    name: string;
    description: string;
    icon: string;
}

export const promptCategories: PromptCategory[] = [
    {
        id: 'writing',
        name: 'Escrita & Conteúdo',
        description: 'Templates para criação de textos, artigos e conteúdo',
        icon: '✍️'
    },
    {
        id: 'coding',
        name: 'Programação',
        description: 'Templates para desenvolvimento e código',
        icon: '💻'
    },
    {
        id: 'business',
        name: 'Negócios',
        description: 'Templates para estratégia e análise de negócios',
        icon: '📊'
    },
    {
        id: 'creative',
        name: 'Criativo',
        description: 'Templates para design e criatividade',
        icon: '🎨'
    },
    {
        id: 'analysis',
        name: 'Análise',
        description: 'Templates para análise e pesquisa',
        icon: '🔍'
    },
    {
        id: 'education',
        name: 'Educação',
        description: 'Templates para ensino e aprendizado',
        icon: '📚'
    }
];

export const promptTemplates: PromptTemplate[] = [
    // Writing & Content Templates
    {
        id: 'blog-post',
        name: 'Artigo de Blog',
        description: 'Cria artigos de blog otimizados e envolventes',
        category: 'writing',
        template: `Escreva um artigo de blog completo sobre "{topic}".

**Especificações:**
- Público-alvo: {audience}
- Tom: {tone}
- Tamanho: {length} palavras
- Incluir: {includeElements}

**Estrutura:**
1. Título chamativo e otimizado para SEO
2. Introdução que desperte interesse
3. Desenvolvimento com subtítulos (H2, H3)
4. Exemplos práticos e dados relevantes
5. Conclusão com call-to-action

**Diretrizes:**
- Use linguagem clara e acessível
- Inclua palavras-chave naturalmente
- Adicione valor real ao leitor
- Mantenha o leitor engajado do início ao fim

Responda em português brasileiro.`,
        variables: ['topic', 'audience', 'tone', 'length', 'includeElements'],
        aiModels: ['chatgpt', 'claude', 'gemini'],
        examples: [
            'Tópico: Inteligência Artificial no Marketing, Audiência: Empreendedores, Tom: Profissional mas acessível'
        ]
    },
    {
        id: 'social-media',
        name: 'Post para Redes Sociais',
        description: 'Cria posts envolventes para diferentes plataformas',
        category: 'writing',
        template: `Crie um post para {platform} sobre "{topic}".

**Especificações:**
- Plataforma: {platform}
- Objetivo: {objective}
- Tom: {tone}
- Público-alvo: {audience}

**Elementos a incluir:**
- Hook inicial impactante
- Conteúdo de valor
- Call-to-action claro
- Hashtags relevantes (se aplicável)
- Emojis apropriados

**Diretrizes específicas da plataforma:**
${'{platform}' === 'LinkedIn' ? '- Foco profissional e networking\n- Máximo 3000 caracteres\n- Use storytelling' : ''}
${'{platform}' === 'Instagram' ? '- Visual e inspiracional\n- Máximo 2200 caracteres\n- Use hashtags estratégicas' : ''}
${'{platform}' === 'Twitter' ? '- Conciso e direto\n- Máximo 280 caracteres\n- Use threads se necessário' : ''}

Responda em português brasileiro.`,
        variables: ['platform', 'topic', 'objective', 'tone', 'audience'],
        aiModels: ['chatgpt', 'claude', 'gemini']
    },

    // Coding Templates
    {
        id: 'code-review',
        name: 'Revisão de Código',
        description: 'Analisa e sugere melhorias para código',
        category: 'coding',
        template: `Analise o seguinte código {language} e forneça uma revisão detalhada:

\`\`\`{language}
{code}
\`\`\`

**Aspectos a analisar:**
1. **Qualidade do código:** Legibilidade, organização, convenções
2. **Performance:** Otimizações possíveis, complexidade
3. **Segurança:** Vulnerabilidades potenciais
4. **Manutenibilidade:** Facilidade de manutenção e extensão
5. **Boas práticas:** Padrões da linguagem/framework

**Para cada problema identificado, forneça:**
- Descrição clara do problema
- Impacto (baixo/médio/alto)
- Sugestão de correção com exemplo de código
- Explicação do benefício da mudança

**Formato da resposta:**
- Use markdown para formatação
- Inclua exemplos de código corrigido
- Priorize sugestões por impacto

Responda em português brasileiro.`,
        variables: ['language', 'code'],
        aiModels: ['chatgpt', 'claude', 'gemini']
    },
    {
        id: 'api-documentation',
        name: 'Documentação de API',
        description: 'Gera documentação completa para APIs',
        category: 'coding',
        template: `Crie documentação completa para a seguinte API:

**Informações da API:**
- Nome: {apiName}
- Versão: {version}
- Base URL: {baseUrl}
- Tipo: {apiType}

**Endpoints a documentar:**
{endpoints}

**Para cada endpoint, inclua:**
1. **Método HTTP e URL**
2. **Descrição funcional**
3. **Parâmetros de entrada:**
   - Path parameters
   - Query parameters
   - Request body (com schema JSON)
4. **Respostas possíveis:**
   - Códigos de status
   - Response body (com exemplos)
   - Headers relevantes
5. **Exemplos de uso:**
   - cURL
   - JavaScript/Python
6. **Tratamento de erros**
7. **Autenticação necessária**

**Formato:**
- Use OpenAPI/Swagger quando possível
- Inclua exemplos práticos
- Adicione notas sobre rate limiting
- Documente códigos de erro comuns

Responda em português brasileiro.`,
        variables: ['apiName', 'version', 'baseUrl', 'apiType', 'endpoints'],
        aiModels: ['chatgpt', 'claude', 'gemini']
    },

    // Business Templates
    {
        id: 'business-plan',
        name: 'Plano de Negócios',
        description: 'Cria seções de plano de negócios estruturado',
        category: 'business',
        template: `Desenvolva um plano de negócios para "{businessIdea}".

**Informações do negócio:**
- Ideia: {businessIdea}
- Mercado-alvo: {targetMarket}
- Investimento inicial: {initialInvestment}
- Prazo de análise: {timeframe}

**Estrutura do plano:**

1. **Resumo Executivo**
   - Visão geral do negócio
   - Proposta de valor única
   - Objetivos principais

2. **Análise de Mercado**
   - Tamanho do mercado
   - Público-alvo detalhado
   - Análise da concorrência
   - Tendências do setor

3. **Modelo de Negócio**
   - Como gerar receita
   - Estrutura de custos
   - Canais de distribuição
   - Parcerias estratégicas

4. **Estratégia de Marketing**
   - Posicionamento
   - Mix de marketing (4Ps)
   - Estratégias de aquisição de clientes

5. **Projeções Financeiras**
   - Receitas projetadas (3 anos)
   - Custos operacionais
   - Ponto de equilíbrio
   - ROI esperado

6. **Análise de Riscos**
   - Principais riscos identificados
   - Estratégias de mitigação

Responda em português brasileiro com dados realistas e específicos.`,
        variables: ['businessIdea', 'targetMarket', 'initialInvestment', 'timeframe'],
        aiModels: ['chatgpt', 'claude', 'gemini']
    },

    // Creative Templates
    {
        id: 'image-generation',
        name: 'Geração de Imagem',
        description: 'Cria prompts otimizados para geração de imagens',
        category: 'creative',
        template: `Crie uma imagem de "{subject}" com as seguintes especificações:

**Elementos principais:**
- Assunto: {subject}
- Estilo: {style}
- Mood/Atmosfera: {mood}
- Cores dominantes: {colors}

**Detalhes técnicos:**
- Qualidade: Ultra alta qualidade, resolução 8K, obra-prima
- Composição: {composition}
- Iluminação: {lighting}
- Perspectiva: {perspective}

**Estilo artístico:**
{style === 'fotográfico' ? '- Fotorrealista, fotografia profissional\n- Foco nítido, texturas detalhadas\n- Iluminação profissional' : ''}
{style === 'ilustração' ? '- Ilustração digital, arte conceitual\n- Linhas limpas, cores vibrantes\n- Interpretação artística' : ''}
{style === 'pintura' ? '- Estilo de pintura a óleo, pinceladas artísticas\n- Texturas ricas, composição clássica\n- Qualidade de belas artes' : ''}

**Prompt otimizado:**
"{subject}, estilo {style}, atmosfera {mood}, paleta de cores {colors}, composição {composition}, iluminação {lighting}, perspectiva {perspective}, ultra alta qualidade, resolução 8K, obra-prima, detalhado, profissional"

**Prompt negativo:**
"baixa qualidade, desfocado, distorcido, amador, pixelado, ruído, artefatos, marca d'água, texto, assinatura, recortado, fora do quadro"

**Configurações recomendadas:**
- Aspect Ratio: {aspectRatio}
- Steps: 30-50
- CFG Scale: 7-12

Responda em inglês para melhor compatibilidade com IAs de imagem.`,
        variables: ['subject', 'style', 'mood', 'colors', 'composition', 'lighting', 'perspective', 'aspectRatio'],
        aiModels: ['midjourney', 'dall_e', 'stable_diffusion']
    },

    // Analysis Templates
    {
        id: 'data-analysis',
        name: 'Análise de Dados',
        description: 'Analisa dados e gera insights',
        category: 'analysis',
        template: `Analise os seguintes dados sobre "{dataContext}":

**Dados fornecidos:**
{dataSet}

**Tipo de análise solicitada:**
{analysisType}

**Objetivos da análise:**
{objectives}

**Estrutura da análise:**

1. **Resumo dos Dados**
   - Visão geral do dataset
   - Principais métricas
   - Período analisado

2. **Análise Descritiva**
   - Estatísticas básicas
   - Distribuições
   - Tendências identificadas

3. **Insights Principais**
   - Padrões descobertos
   - Correlações relevantes
   - Anomalias ou outliers

4. **Análise Comparativa**
   - Benchmarks (se aplicável)
   - Comparações temporais
   - Segmentações relevantes

5. **Conclusões e Recomendações**
   - Principais achados
   - Implicações práticas
   - Próximos passos sugeridos

6. **Visualizações Sugeridas**
   - Tipos de gráficos recomendados
   - KPIs para dashboard

**Diretrizes:**
- Use linguagem clara e objetiva
- Inclua números e percentuais específicos
- Destaque insights acionáveis
- Considere limitações dos dados

Responda em português brasileiro.`,
        variables: ['dataContext', 'dataSet', 'analysisType', 'objectives'],
        aiModels: ['chatgpt', 'claude', 'gemini', 'perplexity']
    },

    // Education Templates
    {
        id: 'lesson-plan',
        name: 'Plano de Aula',
        description: 'Cria planos de aula estruturados',
        category: 'education',
        template: `Crie um plano de aula sobre "{topic}" para {audience}.

**Informações da aula:**
- Tópico: {topic}
- Público: {audience}
- Duração: {duration}
- Nível: {level}
- Objetivos: {objectives}

**Estrutura do plano:**

1. **Informações Gerais**
   - Título da aula
   - Duração total
   - Público-alvo
   - Pré-requisitos

2. **Objetivos de Aprendizagem**
   - O que os alunos devem saber ao final
   - Competências a serem desenvolvidas
   - Critérios de avaliação

3. **Conteúdo Programático**
   - Tópicos principais
   - Subtópicos
   - Conceitos-chave

4. **Metodologia**
   - Estratégias de ensino
   - Recursos necessários
   - Atividades práticas

5. **Cronograma Detalhado**
   - Introdução (X min)
   - Desenvolvimento (X min)
   - Atividades práticas (X min)
   - Conclusão e avaliação (X min)

6. **Recursos Necessários**
   - Materiais didáticos
   - Tecnologias
   - Espaço físico

7. **Avaliação**
   - Métodos de avaliação
   - Critérios de sucesso
   - Feedback aos alunos

8. **Atividades Complementares**
   - Exercícios para casa
   - Leituras recomendadas
   - Projetos extras

**Diretrizes pedagógicas:**
- Adapte a linguagem ao público
- Inclua momentos de interação
- Varie as estratégias de ensino
- Considere diferentes estilos de aprendizagem

Responda em português brasileiro.`,
        variables: ['topic', 'audience', 'duration', 'level', 'objectives'],
        aiModels: ['chatgpt', 'claude', 'gemini']
    }
];

export function getTemplatesByCategory(categoryId: string): PromptTemplate[] {
    return promptTemplates.filter(template => template.category === categoryId);
}

export function getTemplateById(id: string): PromptTemplate | undefined {
    return promptTemplates.find(template => template.id === id);
}

export function getCompatibleTemplates(aiModel: string): PromptTemplate[] {
    return promptTemplates.filter(template =>
        template.aiModels.includes(aiModel)
    );
}