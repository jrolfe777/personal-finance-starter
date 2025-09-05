'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Account } from '@/types';
import { useMemo } from 'react';
import { Landmark, PiggyBank } from 'lucide-react';

interface BalanceOverviewProps {
  accounts: Account[];
}

export default function BalanceOverview({ accounts }: BalanceOverviewProps) {
  const { totalCash, totalDebt } = useMemo(() => {
    const totalCash = accounts
      .filter((acc) => acc.type === 'checking' || acc.type === 'savings')
      .reduce((sum, acc) => sum + acc.balance, 0);

    const totalDebt = accounts
      .filter((acc) => acc.type === 'credit')
      .reduce((sum, acc) => sum + acc.balance, 0);
    

    return { totalCash, totalDebt };
  }, [accounts]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-8">
      
    </div>
  );
}
