import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Zap, Globe, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Active Users",
      value: "50,000+",
      description: "Creators using our tools daily"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Prompts Generated",
      value: "2M+",
      description: "High-quality prompts created"
    },
    {
      icon: <Globe className="h-8 w-8 text-green-500" />,
      title: "AI Models",
      value: "8+",
      description: "Different AI platforms supported"
    },
    {
      icon: <Award className="h-8 w-8 text-purple-500" />,
      title: "Success Rate",
      value: "98%",
      description: "User satisfaction rating"
    }
  ];

  return (
    <section className="my-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Trusted by Creators Worldwide</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Join thousands of content creators, developers, and AI enthusiasts who use our platform daily
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-2">
                {stat.icon}
              </div>
              <CardTitle className="text-2xl font-bold">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-1">{stat.title}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;