'use server';

import { generateFinancialSummary } from '@/ai/flows/financial-summary-tool';
import { generateCreditReport } from '@/ai/flows/credit-report-generator';
import { generateGoalStrategy } from '@/ai/flows/goal-strategy-flow';
import { MOCK_DATA } from '@/lib/mock-data';
import type { GoalStrategyInput } from '@/ai/flows/goal-strategy-flow';

export async function getFinancialSummaryAction() {
  try {
    const { creditScore, accounts, assets, transactions } = MOCK_DATA;

    const accountBalances = accounts.reduce((acc, account) => {
        if(account.type !== 'credit'){
            acc[account.name] = account.balance;
        }
      return acc;
    }, {} as Record<string, number>);

    const assetValues = assets.reduce((acc, asset) => {
      acc[asset.name] = asset.value;
      return acc;
    }, {} as Record<string, number>);

    // Use only the last 10 transactions for the summary for brevity
    const recentTransactions = transactions.slice(0, 10).map(t => ({
      date: t.date,
      description: t.description,
      amount: t.amount,
    }));

    const result = await generateFinancialSummary({
      creditScore,
      accountBalances,
      assetValues,
      transactionHistory: recentTransactions,
    });
    return { summary: result.summary };
  } catch (error) {
    console.error('Error generating financial summary:', error);
    return { error: 'Failed to generate financial summary.' };
  }
}

export async function getCreditReportAction() {
  try {
    const { creditHistory } = MOCK_DATA;
    const result = await generateCreditReport({ creditHistory });
    return { report: result.summary };
  } catch (error) {
    console.error('Error generating credit report:', error);
    return { error: 'Failed to generate credit report.' };
  }
}

export async function getGoalStrategyAction(input: GoalStrategyInput) {
    try {
        const { accounts, transactions } = MOCK_DATA;
        const result = await generateGoalStrategy({
            ...input,
            financials: {
                // This would be dynamically sourced in a real app
                monthlyIncome: 5000,
                accounts,
                recentTransactions: transactions.slice(0, 20)
            }
        });
        return { strategy: result };
    } catch (error) {
        console.error('Error generating goal strategy:', error);
        return { error: 'Failed to generate goal strategy.' };
    }
}
