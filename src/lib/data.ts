import { IconDefinition, faBolt, faMagic, faPalette, faSyncAlt, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';

export interface Feature {
  icon: IconDefinition;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: faBolt,
    title: 'Velocidade impressionante',
    description: 'Gera designs profissionais em questão de segundos, economizando horas de trabalho manual.',
  },
  {
    icon: faMagic,
    title: 'Inteligência criativa',
    description: 'IA avançada que entende sua visão e a transforma em arte impressionante com um único comando.',
  },
  {
    icon: faPalette,
    title: 'Variedade de estilos',
    description: 'De logos minimalistas a interfaces complexas, o Lovart domina todos os estilos de design.',
  },
  {
    icon: faSyncAlt,
    title: 'Iterações infinitas',
    description: 'Não gostou do resultado? Gere novas variações até encontrar o design perfeito.',
  },
  {
    icon: faUnlockAlt,
    title: 'Acesso exclusivo',
    description: 'Versão beta com recursos premium disponíveis apenas para usuários com código especial.',
  },
];

export interface ReferralCode {
  label: string;
  code: string;
  description: string;
  audience: string;
}

export const referralCodes: ReferralCode[] = [
  {
    label: 'CÓDIGO VIP 1',
    code: '3VXFuv8',
    description: 'Acesso prioritário à versão beta com recursos premium ilimitados por 30 dias',
    audience: 'Melhor para designers profissionais',
  },
  {
    label: 'CÓDIGO VIP 2',
    code: 'D5hqSCR',
    description: 'Acesso completo à plataforma com 100 créditos iniciais para geração de designs',
    audience: 'Ideal para pequenas empresas',
  },
  {
    label: 'CÓDIGO VIP 3',
    code: 'KvEj5AR',
    description: 'Acesso premium com suporte prioritário e recursos de edição avançada',
    audience: 'Recomendado para agências',
  },
];
