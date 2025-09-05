import type { FinancialProfile } from '@/types';

export const MOCK_DATA: FinancialProfile = {
  user: {
    id: 'user-001',
    name: 'Amina',
    email: 'amina@example.com',
  },
  creditScore: 625,
  accounts: [
    { id: 'acc-001', name: 'Chase Total Checking', type: 'checking', balance: -2859.66 },
    { id: 'acc-002', name: 'Chase Savings', type: 'savings', balance: 300.00 },
    { id: 'acc-003', name: 'Chase Freedom Flex', type: 'credit', balance: -2100 },
    { id: 'acc-004', name: 'Discover it Cash Back', type: 'credit', balance: -1500 },
    { id: 'acc-005', name: 'Capital One Quicksilver', type: 'credit', balance: -1700 },
  ],
  assets: [],
  transactions: [
    { id: 'txn-001', date: '2024-08-26', description: 'Rent Payment', amount: -2400.00, accountId: 'acc-001', category: 'Housing' },
    { id: 'txn-002', date: '2024-08-26', description: 'Chase Freedom Flex Payment', amount: -500.00, accountId: 'acc-001', category: 'Payments' },
    { id: 'txn-003', date: '2024-08-25', description: 'Graphic Design Software Subscription', amount: -55.00, accountId: 'acc-003', category: 'Work' },
    { id: 'txn-004', date: '2024-08-24', description: 'Dinner with Client', amount: -85.00, accountId: 'acc-004', category: 'Food' },
    { id: 'txn-005', date: '2024-08-22', description: 'Invoice Payment Received', amount: 3200.00, accountId: 'acc-001', category: 'Income' },
    { id: 'txn-006', date: '2024-08-20', description: 'Art Supplies', amount: -120.00, accountId: 'acc-005', category: 'Work' },
    { id: 'txn-007', date: '2024-08-18', description: 'Grocery Shopping', amount: -75.50, accountId: 'acc-001', category: 'Groceries' },
    { id: 'txn-008', date: '2024-08-15', description: 'MOHELA Student Loan Payment', amount: -140.00, accountId: 'acc-001', category: 'Loans' },
    { id: 'txn-009', date: '2024-08-12', description: 'Internet Bill', amount: -70.00, accountId: 'acc-001', category: 'Bills' },
    { id: 'txn-010', date: '2024-08-10', description: 'Freelance Project Deposit', amount: 1500.00, accountId: 'acc-001', category: 'Income' },
    { id: 'txn-011', date: '2024-08-08', description: 'Late Fee: Discover it', amount: -35.00, accountId: 'acc-004', category: 'Fees' },
    { id: 'txn-012', date: '2024-08-05', description: 'Transfer to Savings', amount: -50.00, accountId: 'acc-001', category: 'Transfers' },
    { id: 'txn-013', date: '2024-08-05', description: 'Transfer from Checking', amount: 50.00, accountId: 'acc-002', category: 'Transfers' },
    { id: 'txn-014', date: '2024-08-02', description: 'Coffee Shop Meeting', amount: -15.25, accountId: 'acc-001', category: 'Work' },
    { id: 'txn-015', date: '2024-07-30', description: 'Invoice Payment Received', amount: 2800.00, accountId: 'acc-001', category: 'Income' },
  ],
  creditAccounts: [
    { id: 'ca-001', lender: 'MOHELA', type: 'student_loan', balance: -18000, payment_status: 'On-time', apr: 5.75, minPayment: 140, dueDate: '2024-09-15' },
    { id: 'ca-002', lender: 'Chase Freedom Flex', type: 'credit_card', balance: -2100, limit: 5000, payment_status: 'On-time', apr: 22.99, minPayment: 75, dueDate: '2024-09-20' },
    { id: 'ca-003', lender: 'Discover it Cash Back', type: 'credit_card', balance: -1500, limit: 3000, payment_status: 'Late (1)', apr: 24.99, minPayment: 50, dueDate: '2024-09-08' },
    { id: 'ca-004', lender: 'Capital One Quicksilver', type: 'credit_card', balance: -1700, limit: 4000, payment_status: 'On-time', apr: 21.49, minPayment: 60, dueDate: '2024-09-12' },
  ],
  creditHistory: `
    Report for Amina (ID: user-001)
    Generated on: 2024-08-29

    Open Accounts:
    1. MOHELA (Student Loan)
       - Opened: 2019-01-15
       - Original Balance: $26,000
       - Current Balance: $18,000
       - Payment History: Mostly on-time. 1 late payment reported in the last 24 months.
    2. Chase Freedom Flex (Credit Card)
       - Opened: 2020-07-10
       - Balance: $2,100
       - Credit Limit: $5,000
       - Utilization: 42%
       - Payment History: 100% on-time payments.
    3. Discover it Cash Back (Credit Card)
       - Opened: 2021-03-22
       - Balance: $1,500
       - Credit Limit: $3,000
       - Utilization: 50%
       - Payment History: 2 late payments reported in the last 12 months.
    4. Capital One Quicksilver (Credit Card)
       - Opened: 2022-11-01
       - Balance: $1,700
       - Credit Limit: $4,000
       - Utilization: 42.5%
       - Payment History: 100% on-time payments.

    Closed Accounts:
    - None

    Credit Inquiries (Last 24 months):
    - 2022-10-28: Capital One (Hard Inquiry)
    - 2023-09-15: Apartment Rental Application (Hard Inquiry)

    Public Records:
    - None
  `,
};
