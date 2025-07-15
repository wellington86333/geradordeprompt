
'use client';

import Image from 'next/image';
import { Rocket, LineChart, Copy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

type PartnerCardProps = {
  name: string;
  logoUrl: string;
  description: string;
  referralUrl: string;
  referralCode: string;
  discount: string;
  ctaText: string;
  icon: 'Rocket' | 'LineChart';
  buttonColor: string;
};

const icons = {
  Rocket: Rocket,
  LineChart: LineChart,
};

export default function PartnerCard({
  name,
  logoUrl,
  description,
  referralUrl,
  referralCode,
  discount,
  ctaText,
  icon,
  buttonColor,
}: PartnerCardProps) {
  const { toast } = useToast();
  const IconComponent = icons[icon];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode).then(() => {
      toast({
        title: 'Code Copied!',
        description: `Referral code "${referralCode}" has been copied to your clipboard.`,
      });
      // Mock gtag event
      // if (typeof window.gtag === 'function') {
      //   window.gtag('event', 'copy_code', { event_category: 'referrals', event_label: name.toLowerCase().replace(' ', '') });
      // }
    });
  };
  
  const handleCTAClick = () => {
    window.open(referralUrl, '_blank');
    // Mock gtag event
    // if (typeof window.gtag === 'function') {
    //   window.gtag('event', 'referral_click', { event_category: 'partnerships', event_label: name.toLowerCase().replace(' ', '') });
    // }
  }

  return (
    <Card className="flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-2xl">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Image src={logoUrl} alt={`${name} logo`} width={40} height={40} className="rounded-md"/>
          <CardTitle className="text-2xl font-bold">{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <Button onClick={handleCTAClick} className={cn('w-full text-lg py-6', buttonColor)}>
          <IconComponent className="mr-2 h-5 w-5" />
          {ctaText}
        </Button>
        <div className="w-full flex justify-between items-center p-3 rounded-lg border border-dashed bg-muted/50">
            <div className="text-sm text-muted-foreground">
                Your code: <span className="font-medium text-foreground">{referralCode}</span>
                <Badge variant="outline" className="ml-2 border-primary/50 text-primary">{discount}</Badge>
            </div>
          <Button variant="ghost" size="icon" onClick={handleCopyCode} aria-label="Copy code">
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
