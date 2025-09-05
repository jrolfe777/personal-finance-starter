export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  accountId: string;
  category: string;
}

export interface Account {
  id: string;
  name: string;
  type: 'checking' | 'savings' | 'investment' | 'credit';
  balance: number;
}

export interface Asset {
  id: string;
  name: string;
  type: 'real_estate' | 'vehicle';
  value: number;
}

export interface CreditAccount {
  id: string;
  lender: string;
  type: 'mortgage' | 'auto_loan' | 'credit_card' | 'student_loan';
  balance: number;
  limit?: number;
  payment_status: string;
}

export interface FinancialProfile {
  user: {
    id: string;
    name: string;
    email: string;
  };
  creditScore: number;
  creditHistory: string;
  accounts: Account[];
  assets: Asset[];
  transactions: Transaction[];
  creditAccounts: CreditAccount[];
}
