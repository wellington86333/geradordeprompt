
'use server';

import { personalizeHeadline, PersonalizeHeadlineInput, PersonalizeHeadlineOutput } from '@/ai/flows/personalize-headline';

export async function personalizeHeadlineAction(input: PersonalizeHeadlineInput): Promise<PersonalizeHeadlineOutput> {
  try {
    const result = await personalizeHeadline(input);
    return result;
  } catch (error) {
    console.error("Error personalizing headline:", error);
    // Depending on desired behavior, you could return a default or error object
    return { personalizedHeadline: input.originalHeadline };
  }
}
