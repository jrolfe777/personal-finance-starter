'use server';

import { generateFinancialSummary } from '@/ai/flows/financial-summary-tool';
import { generateCreditReport } from '@/ai/flows/credit-report-generator';
import { MOCK_DATA } from '@/lib/mock-data';

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
