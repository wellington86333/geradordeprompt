'use client';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
        title: "Mensagem Enviada!",
        description: `Obrigado por seu contato, ${name}!`,
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contato" className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">Entre em Contato</h3>
        <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-foreground font-medium mb-2">Nome</label>
              <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-foreground font-medium mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-foreground font-medium mb-2">Mensagem</label>
              <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            </div>
            <button type="submit" className="px-6 py-3 rounded-lg font-medium text-white transition bg-primary hover:bg-primary/90">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
