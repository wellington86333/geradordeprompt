
'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Upload } from 'lucide-react';
import { personalizeHeadlineAction } from '@/lib/actions';


const FunnyCatSection = () => {
    const [imageSrc, setImageSrc] = useState("https://storage.googleapis.com/aifire.co/images/B9p6S73uB8K8g6a4c2a4.jpeg");
    const [altText, setAltText] = useState("Pessoa com máscara de terror e camiseta de caveira");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result;
                if (typeof result === 'string') {
                    setImageSrc(result);
                    setAltText(file.name);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <section className="my-16">
            <Card className="w-full max-w-4xl mx-auto overflow-hidden shadow-lg border-border/40 p-1 rounded-2xl animate-[pulse-glow_4s_ease-in-out_infinite]">
                <div className="bg-background rounded-xl">
                    <CardHeader className="items-center text-center">
                        <Zap className="h-10 w-10 text-yellow-400 mb-2"/>
                        <CardTitle className="text-2xl font-bold">Quando o café bate forte demais...</CardTitle>
                        <CardDescription className="text-muted-foreground">Ou quando você escolhe sua própria imagem viral.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center gap-4">
                        <a href={imageSrc} target="_blank" rel="noopener noreferrer" className="w-full aspect-square relative rounded-lg overflow-hidden border-2 border-primary/20 shadow-inner block cursor-pointer">
                            <Image 
                                src={imageSrc} 
                                alt={altText} 
                                layout="fill"
                                objectFit="cover"
                                data-ai-hint="scary mask"
                                className="transform hover:scale-105 transition-transform duration-300"
                            />
                        </a>
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            className="hidden"
                        />
                        <Button onClick={handleButtonClick}>
                            <Upload className="mr-2 h-4 w-4" />
                            Carregar Imagem do Computador
                        </Button>
                    </CardContent>
                </div>
            </Card>
        </section>
    );
}

export default FunnyCatSection;
