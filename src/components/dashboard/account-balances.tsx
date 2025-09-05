'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Account } from '@/types';
import { Banknote, PiggyBank, Briefcase } from 'lucide-react';

interface AccountBalancesProps {
  accounts: Account[];
}

export default function AccountBalances({ accounts }: AccountBalancesProps) {
  const nonCreditAccounts = accounts.filter(acc => acc.type !== 'credit');

  const getAccountIcon = (type: string) => {
    switch (type) {
      case 'checking':
        return <Banknote className="h-6 w-6 text-muted-foreground" />;
      case 'savings':
        return <PiggyBank className="h-6 w-6 text-muted-foreground" />;
      case 'investment':
        return <Briefcase className="h-6 w-6 text-muted-foreground" />;
      default:
        return <Banknote className="h-6 w-6 text-muted-foreground" />;
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Balances</CardTitle>
        <CardDescription>An overview of your cash and investment accounts.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {nonCreditAccounts.length > 0 ? (
          <ul className="space-y-4">
            {nonCreditAccounts.map(account => (
              <li key={account.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {getAccountIcon(account.type)}
                  <div>
                    <p className="font-medium">{account.name}</p>
                    <p className="text-sm text-muted-foreground capitalize">{account.type}</p>
                  </div>
                </div>
                <div className={`text-lg font-semibold ${account.balance < 0 ? 'text-destructive' : ''}`}>
                  {formatCurrency(account.balance)}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-muted-foreground">No cash or investment accounts found.</p>
        )}
      </CardContent>
    </Card>
  );
}
