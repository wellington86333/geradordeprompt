
'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faMagic, faPalette, faSyncAlt, faUnlockAlt, faStar, faLockOpen, faClock } from '@fortawesome/free-solid-svg-icons';

const LovartSection = () => {
    return (
        <section className="lovart-section">
            <div className="container mx-auto">
                <header className="lovart-header">
                    <h1 className="lovart-logo">LOVART</h1>
                    <p className="lovart-tagline">O primeiro agente de design com IA que transforma suas ideias em realidade</p>
                    <p className="lovart-subtitle">Crie designs profissionais em segundos, sem necessidade de habilidades técnicas. Logos, banners, interfaces e muito mais!</p>
                </header>

                <div className="lovart-content">
                    <div className="lovart-features-section">
                        <h2 className="lovart-section-title">Por que escolher o Lovart?</h2>
                        <ul className="lovart-features-list">
                            <li className="lovart-feature-item">
                                <div className="lovart-feature-icon">
                                    <FontAwesomeIcon icon={faBolt} />
                                </div>
                                <div className="lovart-feature-content">
                                    <h3>Velocidade impressionante</h3>
                                    <p>Gera designs profissionais em questão de segundos, economizando horas de trabalho manual.</p>
                                </div>
                            </li>
                            <li className="lovart-feature-item">
                                <div className="lovart-feature-icon">
                                     <FontAwesomeIcon icon={faMagic} />
                                </div>
                                <div className="lovart-feature-content">
                                    <h3>Inteligência criativa</h3>
                                    <p>IA avançada que entende sua visão e a transforma em arte impressionante com um único comando.</p>
                                </div>
                            </li>
                             <li className="lovart-feature-item">
                                <div className="lovart-feature-icon">
                                     <FontAwesomeIcon icon={faPalette} />
                                </div>
                                <div className="lovart-feature-content">
                                    <h3>Variedade de estilos</h3>
                                    <p>De logos minimalistas a interfaces complexas, o Lovart domina todos os estilos de design.</p>
                                </div>
                            </li>
                            <li className="lovart-feature-item">
                                <div className="lovart-feature-icon">
                                    <FontAwesomeIcon icon={faSyncAlt} />
                                </div>
                                <div className="lovart-feature-content">
                                    <h3>Iterações infinitas</h3>
                                    <p>Não gostou do resultado? Gere novas variações até encontrar o design perfeito.</p>
                                </div>
                            </li>
                             <li className="lovart-feature-item">
                                <div className="lovart-feature-icon">
                                    <FontAwesomeIcon icon={faUnlockAlt} />
                                </div>
                                <div className="lovart-feature-content">
                                    <h3>Acesso exclusivo</h3>
                                    <p>Versão beta com recursos premium disponíveis apenas para usuários com código especial.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="lovart-codes-section">
                        <h2 className="lovart-section-title">Códigos de Acesso Exclusivo</h2>
                        <div className="lovart-codes-container">
                            <div className="lovart-code-card">
                                <div className="lovart-code-label">CÓDIGO VIP 1</div>
                                <span className="lovart-referral-code">3VXFuv8</span>
                                <p className="lovart-code-desc">Acesso prioritário à versão beta com recursos premium ilimitados por 30 dias</p>
                                <p className="text-[#ccc]"><FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-2" /> Melhor para designers profissionais</p>
                            </div>

                            <div className="lovart-code-card">
                                <div className="lovart-code-label">CÓDIGO VIP 2</div>
                                <span className="lovart-referral-code">D5hqSCR</span>
                                <p className="lovart-code-desc">Acesso completo à plataforma com 100 créditos iniciais para geração de designs</p>
                                <p className="text-[#ccc]"><FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-2" /> Ideal para pequenas empresas</p>
                            </div>

                            <div className="lovart-code-card">
                                <div className="lovart-code-label">CÓDIGO VIP 3</div>
                                <span className="lovart-referral-code">KvEj5AR</span>
                                <p className="lovart-code-desc">Acesso premium com suporte prioritário e recursos de edição avançada</p>
                                <p className="text-[#ccc]"><FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-2" /> Recomendado para agências</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lovart-cta-section">
                    <h2 className="lovart-cta-title">Comece a criar designs incríveis hoje mesmo!</h2>
                    <p className="lovart-cta-subtitle">Junte-se à revolução do design com IA. Cadastre-se agora e use qualquer um dos nossos códigos exclusivos para desbloquear acesso VIP.</p>
                    <a href="https://www.lovart.ai" target="_blank" rel="noopener noreferrer" className="lovart-cta-button">
                        <FontAwesomeIcon icon={faLockOpen} className="mr-2" /> ACESSAR PLATAFORMA
                    </a>
                    <div className="lovart-counter">
                        <FontAwesomeIcon icon={faClock} className="mr-2" /> OFERTA POR TEMPO LIMITADO
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LovartSection;
