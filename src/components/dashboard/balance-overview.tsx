'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { Account, Asset } from '@/types';
import { useMemo } from 'react';
import { Landmark, TrendingUp, Home, Car } from 'lucide-react';

interface BalanceOverviewProps {
  accounts: Account[];
  assets: Asset[];
}

export default function BalanceOverview({ accounts, assets }: BalanceOverviewProps) {
  const { totalCash, totalInvestments, totalAssetsValue, netWorth } = useMemo(() => {
    const totalCash = accounts
      .filter((acc) => acc.type === 'checking' || acc.type === 'savings')
      .reduce((sum, acc) => sum + acc.balance, 0);

    const totalInvestments = accounts
      .filter((acc) => acc.type === 'investment')
      .reduce((sum, acc) => sum + acc.balance, 0);

    const totalAssetsValue = assets.reduce((sum, asset) => sum + asset.value, 0);

    const totalLiabilities = accounts
      .filter((acc) => acc.type === 'credit')
      .reduce((sum, acc) => sum + acc.balance, 0);
    
    const netWorth = totalCash + totalInvestments + totalAssetsValue + totalLiabilities; // liabilities are negative

    return { totalCash, totalInvestments, totalAssetsValue, netWorth };
  }, [accounts, assets]);

  const chartData = useMemo(() => [
      { name: 'Cash', value: totalCash },
      { name: 'Investments', value: totalInvestments },
      ...assets.map(asset => ({ name: asset.name, value: asset.value }))
  ], [totalCash, totalInvestments, assets]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border bg-background p-2 shadow-sm">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col space-y-1">
              <span className="text-[0.7rem] uppercase text-muted-foreground">{label}</span>
              <span className="font-bold text-foreground">{formatCurrency(payload[0].value)}</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Net Worth</CardTitle>
          <Landmark className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatCurrency(netWorth)}</div>
          <p className="text-xs text-muted-foreground">Your complete financial picture</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Investments</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatCurrency(totalInvestments)}</div>
          <p className="text-xs text-muted-foreground">Across all investment accounts</p>
        </CardContent>
      </Card>
      <Card className="col-span-1 md:col-span-2">
        <CardHeader>
          <CardTitle className="text-base font-medium">Asset Allocation</CardTitle>
        </CardHeader>
        <CardContent className="h-[120px] w-full p-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 0, right: 24, left: 24, bottom: 0 }}>
              <Tooltip
                cursor={{ fill: "hsl(var(--accent) / 0.2)" }}
                content={<CustomTooltip />}
              />
              <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
