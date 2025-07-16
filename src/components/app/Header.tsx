'use client';
import React from 'react';

const Header = () => {
  return (
    <header className="text-center my-10 md:my-12">
      <div className="mb-6">
        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
          🚀 New: Enhanced AI Prompt Generator with 8+ Models
        </span>
      </div>
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 gradient-text max-w-4xl mx-auto">
        Professional AI Prompt Generator
      </h1>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
        Create perfect prompts for AI models like ChatGPT, Claude, Gemini, and VO3 Google.
        Refine your ideas and get incredible results in text, code, images, or video.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
        <span className="px-3 py-1 bg-secondary/50 rounded-full">✨ English Output</span>
        <span className="px-3 py-1 bg-secondary/50 rounded-full">🤖 8+ AI Models</span>
        <span className="px-3 py-1 bg-secondary/50 rounded-full">💾 Save & History</span>
        <span className="px-3 py-1 bg-secondary/50 rounded-full">📱 Mobile Friendly</span>
      </div>
    </header>
  );
};

export default Header;
