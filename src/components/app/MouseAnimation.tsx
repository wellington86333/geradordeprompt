'use client';

import React, { useState, useEffect, useRef } from 'react';

const MouseAnimation = () => {
  const mouseRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState(1); // 1 para direita, -1 para esquerda
  const [isRunning, setIsRunning] = useState(true);
  
  useEffect(() => {
    if (!mouseRef.current) return;
    
    // Obter dimensões da janela
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Posição inicial fora da tela
    let posX = -50;
    let posY = Math.random() * (windowHeight - 200) + 100;
    
    // Velocidade e direção
    let speedX = Math.random() * 2 + 1;
    let speedY = (Math.random() - 0.5) * 2;
    let currentDirection = 1;
    
    // Função para animar o rato
    const animate = () => {
      if (!mouseRef.current || !isRunning) return;
      
      // Atualizar posição
      posX += speedX * currentDirection;
      posY += speedY;
      
      // Verificar limites da tela
      if (posX > windowWidth + 50) {
        // Saiu pela direita, volta pela esquerda
        posX = -50;
        posY = Math.random() * (windowHeight - 200) + 100;
        speedX = Math.random() * 2 + 1;
        speedY = (Math.random() - 0.5) * 2;
      } else if (posX < -50) {
        // Saiu pela esquerda, volta pela direita
        posX = windowWidth + 50;
        posY = Math.random() * (windowHeight - 200) + 100;
        speedX = Math.random() * 2 + 1;
        speedY = (Math.random() - 0.5) * 2;
      }
      
      // Verificar limites verticais
      if (posY < 50 || posY > windowHeight - 50) {
        speedY = -speedY; // Inverter direção vertical
      }
      
      // Atualizar direção visual
      if (speedX * currentDirection < 0) {
        currentDirection = -currentDirection;
        setDirection(currentDirection);
      }
      
      // Aplicar posição
      mouseRef.current.style.transform = `translate(${posX}px, ${posY}px) scaleX(${currentDirection})`;
      
      // Continuar animação
      requestAnimationFrame(animate);
    };
    
    // Iniciar animação
    const animationId = requestAnimationFrame(animate);
    
    // Limpar animação quando o componente desmontar
    return () => {
      cancelAnimationFrame(animationId);
      setIsRunning(false);
    };
  }, [isRunning]);
  
  return (
    <div
      ref={mouseRef}
      className="fixed pointer-events-none z-50"
      style={{ 
        left: 0,
        top: 0,
        transition: 'transform 0.1s linear'
      }}
    >
      <div className="relative">
        {/* Corpo do rato */}
        <div className="w-12 h-6 bg-gray-500 rounded-full relative">
          {/* Orelhas */}
          <div className="absolute -top-2 left-1 w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="absolute -top-2 right-1 w-3 h-3 bg-gray-500 rounded-full"></div>
          
          {/* Olhos */}
          <div className="absolute top-1 left-2 w-1.5 h-1.5 bg-black rounded-full"></div>
          <div className="absolute top-1 right-2 w-1.5 h-1.5 bg-black rounded-full"></div>
          
          {/* Nariz */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-pink-300 rounded-full"></div>
          
          {/* Bigodes */}
          <div className="absolute top-2 left-1 w-3 h-0.5 bg-gray-300 transform -rotate-12"></div>
          <div className="absolute top-3 left-1 w-3 h-0.5 bg-gray-300"></div>
          <div className="absolute top-4 left-1 w-3 h-0.5 bg-gray-300 transform rotate-12"></div>
          
          {/* Cauda */}
          <div className="absolute -right-6 top-2 w-6 h-1 bg-gray-500 rounded-full"></div>
          
          {/* Patas com animação CSS */}
          <div 
            className="absolute -bottom-1 left-2 w-1.5 h-2 bg-gray-500 rounded-b-full animate-paw1"
          ></div>
          <div 
            className="absolute -bottom-1 right-2 w-1.5 h-2 bg-gray-500 rounded-b-full animate-paw2"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MouseAnimation;