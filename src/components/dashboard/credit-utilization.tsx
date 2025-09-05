'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import type { CreditAccount } from '@/types';
import ClientSideDate from '@/components/client-side-date';

interface CreditUtilizationProps {
  creditAccounts: CreditAccount[];
}

export default function CreditUtilization({ creditAccounts }: CreditUtilizationProps) {
  const creditCards = creditAccounts.filter(acc => acc.type === 'credit_card');

  const getStatusColor = (status: string) => {
    if (status.toLowerCase().includes('late')) return 'text-destructive';
    return 'text-green-500';
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Credit Utilization</CardTitle>
        <CardDescription>An overview of your credit card balances and limits.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {creditCards.map(card => {
          const utilization = card.limit ? (Math.abs(card.balance) / card.limit) * 100 : 0;
          return (
            <div key={card.id}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">{card.lender}</span>
                <span className="text-sm text-muted-foreground">
                  {formatCurrency(Math.abs(card.balance))} / {formatCurrency(card.limit || 0)}
                </span>
              </div>
              <Progress value={utilization} className="h-2 mb-2" />
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <Badge variant={utilization > 50 ? 'destructive' : 'secondary'}>
                  Utilization: {utilization.toFixed(1)}%
                </Badge>
                <div className='text-right'>
                    <div>Due: {card.dueDate ? <ClientSideDate dateString={card.dueDate} /> : 'N/A'}</div>
                    <div className={getStatusColor(card.payment_status)}>
                        Min. {formatCurrency(card.minPayment || 0)}
                    </div>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
