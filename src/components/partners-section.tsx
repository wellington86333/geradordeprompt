
import PartnerCard from './partner-card';

const partners = [
  {
    name: 'Lovart AI',
    logoUrl: 'https://www.lovart.ai/favicon.ico',
    description: 'Autonomous design agent for creating visual assets.',
    referralUrl: 'https://www.lovart.ai?ref=3VXFuv8',
    referralCode: '3VXFuv8',
    discount: '50% OFF',
    ctaText: 'Access with Discount',
    icon: 'Rocket',
    buttonColor: 'bg-primary hover:bg-primary/90 text-primary-foreground',
  },
  {
    name: 'Abacus AI',
    logoUrl: 'https://abacus.ai/favicon.ico',
    description: 'Predictive analytics platform for decision making.',
    referralUrl: 'https://abacus.ai/signup?referral_code=ABACUS2024',
    referralCode: 'ABACUS2024',
    discount: '3 months free',
    ctaText: 'Try for Free',
    icon: 'LineChart',
    buttonColor: 'bg-accent hover:bg-accent/90 text-accent-foreground',
  },
];

export default function PartnersSection() {
  return (
    <section className="py-16 mt-12 border-t-2 border-b-2 border-border/50">
      <h2 className="text-3xl font-bold text-center mb-12">Recommended AI Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {partners.map((partner) => (
          <PartnerCard key={partner.name} {...partner} />
        ))}
      </div>
    </section>
  );
}
