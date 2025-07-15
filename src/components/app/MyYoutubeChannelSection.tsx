'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Youtube } from 'lucide-react';

const MyYoutubeChannelSection = () => {
  return (
    <section className="my-16">
      <div className="block w-full max-w-4xl mx-auto group">
        <Card className="overflow-hidden bg-gradient-to-tr from-red-900 via-black to-black border-red-800/50 shadow-2xl shadow-red-500/10 group-hover:shadow-red-500/20 transition-shadow duration-300">
          <CardContent className="p-8 pt-8">
             <div className="mx-auto flex justify-center">
              <Youtube className="h-16 w-16 text-red-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MyYoutubeChannelSection;
