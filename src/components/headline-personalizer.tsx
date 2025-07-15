
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { personalizeHeadlineAction } from '@/lib/actions';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Wand2 } from 'lucide-react';

const formSchema = z.object({
  userProfile: z.string().min(10, 'Please describe your profile in at least 10 characters.'),
});

const originalHeadline = "Unlock Top AI Tools with Exclusive Partner Deals";

export default function HeadlinePersonalizer() {
  const [headline, setHeadline] = useState(originalHeadline);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userProfile: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setError(null);
    try {
      const result = await personalizeHeadlineAction({
        userProfile: values.userProfile,
        originalHeadline: originalHeadline,
      });
      if (result.personalizedHeadline) {
        setHeadline(result.personalizedHeadline);
      } else {
        setError('Could not generate a personalized headline. Please try again.');
      }
    } catch (e) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary transition-all duration-500">
          {headline}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We partner with leading AI companies to bring you exclusive discounts and offers. Discover tools that can supercharge your workflow.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wand2 className="text-primary" />
            Personalize Your Experience
          </CardTitle>
          <CardDescription>
            Tell us about yourself to get a headline tailored just for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="userProfile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Profile</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., I'm a product designer at a startup focused on developer tools." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={loading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                {loading ? <Loader2 className="animate-spin" /> : 'Personalize Headline'}
              </Button>
              {error && <p className="text-sm font-medium text-destructive">{error}</p>}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
