'use server';

/**
 * @fileOverview An AI agent that creates a personalized savings strategy for a financial goal.
 *
 * - generateGoalStrategy - A function that handles the goal strategy process.
 * - GoalStrategyInput - The input type for the generateGoalStrategy function.
 * - GoalStrategyOutput - The return type for the generateGoalStrategy function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import type { Account, Transaction } from '@/types';

const GoalStrategyInputSchema = z.object({
  goalType: z.enum(['SAVE_FOR_PURCHASE', 'PAY_OFF_DEBT', 'SAVE_FOR_DOWN_PAYMENT']).describe('The type of financial goal.'),
  targetAmount: z.number().describe('The total amount the user wants to save or pay off.'),
  targetDate: z.string().describe('The desired date to achieve the goal (e.g., "2025-12-31").'),
  financials: z.object({
      monthlyIncome: z.number().describe("The user's total monthly income."),
      accounts: z.any().describe("An array of the user's financial accounts."),
      recentTransactions: z.any().describe("An array of the user's recent transactions.")
  }).describe("The user's financial data.")
});
export type GoalStrategyInput = z.infer<typeof GoalStrategyInputSchema>;

const GoalStrategyOutputSchema = z.object({
  isAchievable: z.boolean().describe('Whether the goal is realistically achievable within the given timeframe.'),
  monthlyContribution: z.number().describe('The recommended monthly amount to save or pay.'),
  projectedDate: z.string().describe('The newly projected date of goal completion based on the strategy.'),
  tips: z.array(z.string()).describe('A list of actionable tips for cutting expenses or increasing savings.'),
});
export type GoalStrategyOutput = z.infer<typeof GoalStrategyOutputSchema>;

export async function generateGoalStrategy(input: GoalStrategyInput): Promise<GoalStrategyOutput> {
  return goalStrategyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'goalStrategyPrompt',
  input: { schema: GoalStrategyInputSchema },
  output: { schema: GoalStrategyOutputSchema },
  prompt: `You are a helpful financial planning assistant. Your task is to analyze a user's financial goal and their current financial situation to create a personalized, actionable strategy.

User's Goal:
- Type: {{{goalType}}}
- Target Amount: {{{targetAmount}}}
- Target Date: {{{targetDate}}}

User's Financials:
- Monthly Income: {{{financials.monthlyIncome}}}
- Accounts: {{jsonStringify financials.accounts}}
- Recent Transactions: {{jsonStringify financials.recentTransactions}}

Based on this information, create a savings plan. Follow these steps:
1.  Determine if the goal is achievable by the target date. Consider their income and spending habits shown in the transactions.
2.  Calculate a recommended monthly contribution.
3.  If the original target date is not realistic, calculate a new projected completion date.
4.  Provide 2-3 specific, actionable tips for how the user can meet their goal. These tips should be based on their actual transaction history (e.g., "Reduce spending on 'Food' category which was high last month").

Return the result in the specified JSON format.
`,
});


const goalStrategyFlow = ai.defineFlow(
  {
    name: 'goalStrategyFlow',
    inputSchema: GoalStrategyInputSchema,
    outputSchema: GoalStrategyOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
