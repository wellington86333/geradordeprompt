
import HeadlinePersonalizer from '@/components/headline-personalizer';
import PartnersSection from '@/components/partners-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-12 md:py-16">
        <HeadlinePersonalizer />
        <PartnersSection />
      </main>
    </div>
  );
}
