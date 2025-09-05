import type { FinancialProfile } from '@/types';

export const MOCK_DATA: FinancialProfile = {
  user: {
    id: 'user-001',
    name: 'Alex Doe',
    email: 'alex.doe@example.com',
  },
  creditScore: 780,
  accounts: [
    { id: 'acc-001', name: 'Primary Checking', type: 'checking', balance: 5420.55 },
    { id: 'acc-002', name: 'High-Yield Savings', type: 'savings', balance: 25102.12 },
    { id: 'acc-003', name: 'Retirement 401(k)', type: 'investment', balance: 112543.89 },
    { id: 'acc-004', name: 'Travel Rewards Card', type: 'credit', balance: -1245.23 },
  ],
  assets: [
    { id: 'asset-001', name: 'Primary Residence', type: 'real_estate', value: 450000 },
    { id: 'asset-002', name: '2022 SUV', type: 'vehicle', value: 28000 },
  ],
  transactions: [
    { id: 'txn-001', date: '2024-07-28', description: 'Grocery Store', amount: -85.43, accountId: 'acc-004', category: 'Groceries' },
    { id: 'txn-002', date: '2024-07-28', description: 'Gas Station', amount: -45.12, accountId: 'acc-004', category: 'Transport' },
    { id: 'txn-003', date: '2024-07-27', description: 'Online Shopping', amount: -112.99, accountId: 'acc-004', category: 'Shopping' },
    { id: 'txn-004', date: '2024-07-26', description: 'Paycheck Deposit', amount: 2500.00, accountId: 'acc-001', category: 'Income' },
    { id: 'txn-005', date: '2024-07-25', description: 'Restaurant', amount: -65.50, accountId: 'acc-004', category: 'Food' },
    { id: 'txn-006', date: '2024-07-25', description: 'Transfer to Savings', amount: -1000.00, accountId: 'acc-001', category: 'Transfers' },
    { id: 'txn-007', date: '2024-07-25', description: 'Transfer from Checking', amount: 1000.00, accountId: 'acc-002', category: 'Transfers' },
    { id: 'txn-008', date: '2024-07-24', description: 'Coffee Shop', amount: -5.75, accountId: 'acc-001', category: 'Food' },
    { id: 'txn-009', date: '2024-07-22', description: 'Credit Card Payment', amount: -1200.00, accountId: 'acc-001', category: 'Payments' },
    { id: 'txn-010', date: '2024-07-20', description: 'Gym Membership', amount: -40.00, accountId: 'acc-004', category: 'Health' },
    { id: 'txn-011', date: '2024-07-18', description: 'Bookstore', amount: -25.60, accountId: 'acc-004', category: 'Shopping' },
    { id: 'txn-012', date: '2024-07-15', description: 'Mortgage Payment', amount: -1850.00, accountId: 'acc-001', category: 'Housing' },
    { id: 'txn-013', date: '2024-07-12', description: 'Car Loan Payment', amount: -450.00, accountId: 'acc-001', category: 'Loans' },
    { id: 'txn-014', date: '2024-07-11', description: 'Paycheck Deposit', amount: 2500.00, accountId: 'acc-001', category: 'Income' },
    { id: 'txn-015', date: '2024-07-10', description: 'Utilities Bill', amount: -120.34, accountId: 'acc-001', category: 'Bills' },
  ],
  creditAccounts: [
    { id: 'ca-001', lender: 'City Mortgage', type: 'mortgage', balance: -280000, payment_status: 'On-time' },
    { id: 'ca-002', lender: 'Auto Finance Co.', type: 'auto_loan', balance: -15000, payment_status: 'On-time' },
    { id: 'ca-003', lender: 'Big Bank', type: 'credit_card', balance: -1245.23, limit: 15000, payment_status: 'On-time' },
    { id: 'ca-004', lender: 'University Loans', type: 'student_loan', balance: 0, payment_status: 'Paid Off' },
  ],
  creditHistory: `
    Report for Alex Doe (ID: user-001)
    Generated on: 2024-07-29

    Open Accounts:
    1. City Mortgage (Mortgage)
       - Opened: 2020-03-15
       - Balance: $280,000
       - Payment History: 100% on-time payments. No late payments reported.
    2. Auto Finance Co. (Auto Loan)
       - Opened: 2022-08-01
       - Balance: $15,000
       - Payment History: 100% on-time payments.
    3. Big Bank (Credit Card)
       - Opened: 2018-05-20
       - Balance: $1,245.23
       - Credit Limit: $15,000
       - Utilization: 8%
       - Payment History: 100% on-time payments.

    Closed Accounts:
    1. University Loans (Student Loan)
       - Opened: 2012-09-01
       - Closed: 2023-01-10
       - Status: Paid in full.

    Credit Inquiries (Last 24 months):
    - 2022-07-25: Auto Finance Co. (Hard Inquiry)
    - 2023-11-05: Home Insurance Quote (Soft Inquiry)

    Public Records:
    - None
  `,
};
