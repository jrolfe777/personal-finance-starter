'use server';

/**
 * @fileOverview Generates an easy-to-understand summary of a user's credit report using AI.
 *
 * - generateCreditReport - A function that takes credit history as input and returns a summarized report.
 * - CreditReportInput - The input type for the generateCreditReport function.
 * - CreditReportOutput - The return type for the generateCreditReport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CreditReportInputSchema = z.object({
  creditHistory: z
    .string()
    .describe('Detailed credit history of the user, including accounts, payments, and inquiries.'),
});
export type CreditReportInput = z.infer<typeof CreditReportInputSchema>;

const CreditReportOutputSchema = z.object({
  summary: z
    .string()
    .describe('A summarized, easy-to-understand report of the user credit history.'),
});
export type CreditReportOutput = z.infer<typeof CreditReportOutputSchema>;

export async function generateCreditReport(input: CreditReportInput): Promise<CreditReportOutput> {
  return creditReportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'creditReportPrompt',
  input: {schema: CreditReportInputSchema},
  output: {schema: CreditReportOutputSchema},
  prompt: `You are an AI assistant specialized in finance. Your task is to generate an easy-to-understand summary of a user's credit report, so they can quickly grasp their credit history and identify potential issues.

  Credit History: {{{creditHistory}}}

  Summary:
  `,
});

const creditReportFlow = ai.defineFlow(
  {
    name: 'creditReportFlow',
    inputSchema: CreditReportInputSchema,
    outputSchema: CreditReportOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
