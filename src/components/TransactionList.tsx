
import React from 'react';
import TransactionItem from './TransactionItem';
import { Transaction } from '@/types/Transaction';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TransactionListProps {
  transactions: Transaction[];
  onDeleteTransaction: (id: string) => void;
  filter: 'all' | 'income' | 'expense';
}

const TransactionList: React.FC<TransactionListProps> = ({ 
  transactions, 
  onDeleteTransaction,
  filter
}) => {
  const filteredTransactions = transactions.filter(transaction => {
    if (filter === 'all') return true;
    if (filter === 'income') return transaction.amount > 0;
    if (filter === 'expense') return transaction.amount < 0;
    return true;
  });

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        {filteredTransactions.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No transactions found
          </div>
        ) : (
          <div className="space-y-2">
            {filteredTransactions.map(transaction => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                onDelete={onDeleteTransaction}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TransactionList;
