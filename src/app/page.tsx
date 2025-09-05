import { MOCK_DATA } from '@/lib/mock-data';
import type { Account, Asset, Transaction } from '@/types';
import Header from '@/components/dashboard/header';
import BalanceOverview from '@/components/dashboard/balance-overview';
import TransactionHistory from '@/components/dashboard/transaction-history';
import FinancialSummary from '@/components/dashboard/financial-summary';
import CreditReport from '@/components/dashboard/credit-report';
import GoalPlannerWidget from '@/components/dashboard/goal-planner-widget';

export default function Home() {
  const { accounts, assets, transactions, user } = MOCK_DATA;

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header userName={user.name} />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div className="col-span-1 lg:col-span-4">
                <FinancialSummary />
            </div>
        </div>

        <BalanceOverview
          accounts={accounts as Account[]}
          assets={assets as Asset[]}
        />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <TransactionHistory 
                transactions={transactions as Transaction[]}
                accounts={accounts as Account[]} 
            />
            <div className="flex flex-col gap-4 lg:gap-8">
              <CreditReport />
              <GoalPlannerWidget />
            </div>
        </div>
      </main>
    </div>
  );
}
