
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Transaction } from '@/types/Transaction';

interface BalanceSummaryProps {
  transactions: Transaction[];
}

const BalanceSummary: React.FC<BalanceSummaryProps> = ({ transactions }) => {
  const totalAmount = transactions.reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2);
  
  const income = transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);
    
  const expense = (transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0) * -1)
    .toFixed(2);

  return (
    <div className="grid gap-4 md:grid-cols-3 mb-8">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold text-muted-foreground mb-1">Balance</h2>
          <p className={`text-2xl font-bold ${Number(totalAmount) < 0 ? 'expense-amount' : 'text-foreground'}`}>
            ${totalAmount}
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold text-muted-foreground mb-1">Income</h2>
          <p className="text-2xl font-bold income-amount">+${income}</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold text-muted-foreground mb-1">Expense</h2>
          <p className="text-2xl font-bold expense-amount">-${expense}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BalanceSummary;
