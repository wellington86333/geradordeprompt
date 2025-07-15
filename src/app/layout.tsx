
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: 'Lovart - O Primeiro Agente de Design com IA',
  description: 'Crie designs profissionais em segundos. Logos, banners, interfaces e muito mais!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Montserrat:wght@800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-dark text-light bg-gradient-to-br from-background to-black antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
