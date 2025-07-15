
'use client';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {Zap} from 'lucide-react';

const FunnyCatSection = () => {
    return (
        <section className="my-16">
            <Card className="w-full max-w-4xl mx-auto overflow-hidden shadow-lg border-border/40 p-1 rounded-2xl animate-[pulse-glow_4s_ease-in-out_infinite]">
                <div className="bg-background rounded-xl">
                    <CardHeader className="items-center text-center">
                        <Zap className="h-10 w-10 text-yellow-400 mb-2"/>
                        <CardTitle className="text-2xl font-bold">Quando o café bate forte demais...</CardTitle>
                        <CardDescription className="text-muted-foreground">E você percebe que o bug era só um ponto e vírgula faltando.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="w-full aspect-square relative rounded-lg overflow-hidden border-2 border-primary/20 shadow-inner">
                            <Image 
                                src="https://storage.googleapis.com/aifire.co/images/B9p6S73uB8K8g6a4c2a4.jpeg" 
                                alt="Pessoa com máscara de terror e camiseta de caveira" 
                                layout="fill"
                                objectFit="cover"
                                data-ai-hint="scary mask"
                                className="transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </CardContent>
                </div>
            </Card>
        </section>
    );
}

export default FunnyCatSection;

    