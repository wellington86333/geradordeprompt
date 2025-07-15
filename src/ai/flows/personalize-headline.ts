// src/ai/flows/personalize-headline.ts
'use server';
/**
 * @fileOverview A flow that personalizes the intro headline based on user data.
 *
 * - personalizeHeadline - A function that personalizes the headline.
 * - PersonalizeHeadlineInput - The input type for the personalizeHeadline function.
 * - PersonalizeHeadlineOutput - The return type for the personalizeHeadline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeHeadlineInputSchema = z.object({
  userProfile: z
    .string()
    .describe('A description of the user profile, including their interests and profession.'),
  originalHeadline: z.string().describe('The original headline to be personalized.'),
});
export type PersonalizeHeadlineInput = z.infer<typeof PersonalizeHeadlineInputSchema>;

const PersonalizeHeadlineOutputSchema = z.object({
  personalizedHeadline: z
    .string()
    .describe('The personalized headline that is relevant to the user.'),
});
export type PersonalizeHeadlineOutput = z.infer<typeof PersonalizeHeadlineOutputSchema>;

export async function personalizeHeadline(input: PersonalizeHeadlineInput): Promise<PersonalizeHeadlineOutput> {
  return personalizeHeadlineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeHeadlinePrompt',
  input: {schema: PersonalizeHeadlineInputSchema},
  output: {schema: PersonalizeHeadlineOutputSchema},
  prompt: `You are an expert marketing copywriter.

You are tasked with personalizing a headline for a website based on a user's profile.

Here is the user profile:
{{{userProfile}}}

Here is the original headline:
{{{originalHeadline}}}

Create a new headline that is more relevant to the user, while still conveying the same overall message. The personalized headline should be concise and engaging.

Output the new personalized headline.`,
});

const personalizeHeadlineFlow = ai.defineFlow(
  {
    name: 'personalizeHeadlineFlow',
    inputSchema: PersonalizeHeadlineInputSchema,
    outputSchema: PersonalizeHeadlineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
