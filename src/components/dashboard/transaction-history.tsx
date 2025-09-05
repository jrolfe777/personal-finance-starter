"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Transaction, Account } from '@/types';
import { Badge } from '@/components/ui/badge';
import ClientSideDate from '../client-side-date';

interface TransactionHistoryProps {
  transactions: Transaction[];
  accounts: Account[];
}

const TRANSACTIONS_PER_PAGE = 8;

export default function TransactionHistory({ transactions, accounts }: TransactionHistoryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [accountFilter, setAccountFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTransactions = useMemo(() => {
    return transactions.filter(transaction => {
      const searchMatch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
      const accountMatch = accountFilter === 'all' || transaction.accountId === accountFilter;
      return searchMatch && accountMatch;
    });
  }, [transactions, searchTerm, accountFilter]);
  
  const totalPages = Math.ceil(filteredTransactions.length / TRANSACTIONS_PER_PAGE);

  const paginatedTransactions = useMemo(() => {
    const startIndex = (currentPage - 1) * TRANSACTIONS_PER_PAGE;
    return filteredTransactions.slice(startIndex, startIndex + TRANSACTIONS_PER_PAGE);
  }, [filteredTransactions, currentPage]);

  const handlePageChange = (direction: 'next' | 'prev') => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getAccountName = (accountId: string) => accounts.find(a => a.id === accountId)?.name || 'N/A';

  const formatCurrency = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

  const getCategoryColor = (category: string) => {
    switch (category) {
        case 'Groceries': return 'bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30';
        case 'Transport': return 'bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-500/30';
        case 'Shopping': return 'bg-purple-500/20 text-purple-700 dark:text-purple-400 border-purple-500/30';
        case 'Income': return 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-emerald-500/30';
        case 'Food': return 'bg-orange-500/20 text-orange-700 dark:text-orange-400 border-orange-500/30';
        case 'Health': return 'bg-red-500/20 text-red-700 dark:text-red-400 border-red-500/30';
        case 'Bills': return 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/30';
        default: return 'bg-gray-500/20 text-gray-700 dark:text-gray-400 border-gray-500/30';
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
        <CardDescription>View and manage your recent transactions.</CardDescription>
        <div className="flex items-center gap-4 pt-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by description..."
              className="pl-8"
              value={searchTerm}
              onChange={e => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            />
          </div>
          <Select value={accountFilter} onValueChange={value => { setAccountFilter(value); setCurrentPage(1); }}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by account" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Accounts</SelectItem>
              {accounts.map(account => (
                <SelectItem key={account.id} value={account.id}>
                  {account.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="border rounded-md">
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Description</TableHead>
                <TableHead className="hidden md:table-cell">Account</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {paginatedTransactions.length > 0 ? paginatedTransactions.map(t => (
                <TableRow key={t.id}>
                    <TableCell>
                    <div className="font-medium">{t.description}</div>
                    <div className="text-sm text-muted-foreground"><ClientSideDate dateString={t.date} /></div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                        <Badge variant="outline" className={getCategoryColor(t.category)}>{t.category}</Badge>
                    </TableCell>
                    <TableCell className={`text-right font-medium ${t.amount > 0 ? 'text-green-600' : ''}`}>
                    {formatCurrency(t.amount)}
                    </TableCell>
                </TableRow>
                )) : (
                    <TableRow>
                        <TableCell colSpan={3} className="text-center h-24">
                            No transactions found.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
            </Table>
        </div>
        <div className="flex items-center justify-between pt-4">
            <div className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
            </div>
            <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => handlePageChange('prev')} disabled={currentPage === 1}>
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => handlePageChange('next')} disabled={currentPage === totalPages}>
                <ChevronRight className="h-4 w-4" />
            </Button>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
