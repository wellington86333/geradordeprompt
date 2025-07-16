import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Content Creator",
      avatar: "👩‍💻",
      rating: 5,
      text: "This prompt generator has revolutionized my workflow! I can create perfect prompts for any AI in seconds."
    },
    {
      name: "João Santos",
      role: "Digital Marketer",
      avatar: "👨‍💼",
      rating: 5,
      text: "The English output feature is perfect for international projects. The quality is consistently excellent."
    },
    {
      name: "Ana Costa",
      role: "AI Researcher",
      avatar: "👩‍🔬",
      rating: 5,
      text: "Having templates for different AI models saves me hours of work. Highly recommended for professionals!"
    }
  ];

  return (
    <section className="my-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-muted-foreground text-lg">
          Real feedback from creators who use our tools daily
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-primary opacity-50 mr-2" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <span className="text-2xl mr-3">{testimonial.avatar}</span>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;