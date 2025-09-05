'use server';

/**
 * @fileOverview An AI-powered tool that provides an executive summary of a user's financial health.
 *
 * - generateFinancialSummary - A function that generates the financial summary.
 * - FinancialSummaryInput - The input type for the generateFinancialSummary function.
 * - FinancialSummaryOutput - The return type for the generateFinancialSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FinancialSummaryInputSchema = z.object({
  creditScore: z.number().describe('The user\'s credit score.'),
  accountBalances: z
    .record(z.string(), z.number())
    .describe('A map of account names to balances.'),
  assetValues: z.record(z.string(), z.number()).describe('A map of asset names to values.'),
  transactionHistory: z
    .array(z.object({
      date: z.string().describe('The date of the transaction.'),
      description: z.string().describe('A description of the transaction.'),
      amount: z.number().describe('The amount of the transaction.'),
    }))
    .describe('A list of recent transactions.'),
});
export type FinancialSummaryInput = z.infer<typeof FinancialSummaryInputSchema>;

const FinancialSummaryOutputSchema = z.object({
  summary: z.string().describe('A comprehensive summary of the user\'s financial health.'),
});
export type FinancialSummaryOutput = z.infer<typeof FinancialSummaryOutputSchema>;

export async function generateFinancialSummary(
  input: FinancialSummaryInput
): Promise<FinancialSummaryOutput> {
  return financialSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'financialSummaryPrompt',
  input: {schema: FinancialSummaryInputSchema},
  output: {schema: FinancialSummaryOutputSchema},
  prompt: `You are a personal finance expert. Please analyze the following financial data and provide an executive summary of the user's overall financial health. Include explanations of key data points and offer insights for improvement.

Credit Score: {{{creditScore}}}

Account Balances:
{{#each accountBalances}}  {{@key}}: {{{this}}}
{{/each}}

Asset Values:
{{#each assetValues}}  {{@key}}: {{{this}}}
{{/each}}

Recent Transactions:
{{#each transactionHistory}}  Date: {{{date}}}, Description: {{{description}}}, Amount: {{{amount}}}
{{/each}}

Summary:`,
});

const financialSummaryFlow = ai.defineFlow(
  {
    name: 'financialSummaryFlow',
    inputSchema: FinancialSummaryInputSchema,
    outputSchema: FinancialSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
