'use client';
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Youtube } from 'lucide-react';

const MyYoutubeChannelSection = () => {
  return (
    <section className="my-16">
      <a href="https://www.youtube.com/@Aleat%C3%B3riamenteredund%C3%A2ntico" target="_blank" rel="noopener noreferrer" className="block w-full max-w-4xl mx-auto group">
        <Card className="overflow-hidden bg-gradient-to-tr from-red-900 via-black to-black border-red-800/50 shadow-2xl shadow-red-500/10 group-hover:shadow-red-500/20 transition-shadow duration-300">
          <CardHeader className="text-center p-8">
            <div className="mx-auto">
              <Youtube className="h-16 w-16 text-red-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </CardHeader>
          <CardContent className="p-8 pt-0">
          </CardContent>
        </Card>
      </a>
    </section>
  );
};

export default MyYoutubeChannelSection;