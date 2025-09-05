import { MOCK_DATA } from '@/lib/mock-data';
import type { Account, Asset, Transaction, CreditAccount } from '@/types';
import Header from '@/components/dashboard/header';
import BalanceOverview from '@/components/dashboard/balance-overview';
import TransactionHistory from '@/components/dashboard/transaction-history';
import FinancialSummary from '@/components/dashboard/financial-summary';
import CreditReport from '@/components/dashboard/credit-report';
import CreditUtilization from '@/components/dashboard/credit-utilization';
import AccountBalances from '@/components/dashboard/account-balances';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Landmark, PiggyBank } from 'lucide-react';
import ClientSideCurrency from '@/components/client-side-currency';

export default function Home() {
  const { accounts, assets, transactions, user, creditAccounts } = MOCK_DATA;

  const totalCash = accounts
      .filter((acc) => acc.type === 'checking' || acc.type === 'savings')
      .reduce((sum, acc) => sum + acc.balance, 0);

  const totalDebt = accounts
    .filter((acc) => acc.type === 'credit')
    .reduce((sum, acc) => sum + acc.balance, 0);
  
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header userName={user.name} />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div className="col-span-1 lg:col-span-4">
                <FinancialSummary />
            </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col gap-4 lg:gap-8">
                <CreditReport />
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Cash</CardTitle>
                    <Landmark className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold"><ClientSideCurrency value={totalCash} /></div>
                    <p className="text-xs text-muted-foreground">Across checking and savings</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Debt</CardTitle>
                    <PiggyBank className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold"><ClientSideCurrency value={Math.abs(totalDebt)} /></div>
                    <p className="text-xs text-muted-foreground">Across all credit accounts</p>
                    </CardContent>
                </Card>
            </div>
            <CreditUtilization creditAccounts={creditAccounts as CreditAccount[]} />
        </div>
        
        <AccountBalances accounts={accounts as Account[]} />

        <TransactionHistory 
            transactions={transactions as Transaction[]}
            accounts={accounts as Account[]} 
        />

      </main>
    </div>
  );
}
