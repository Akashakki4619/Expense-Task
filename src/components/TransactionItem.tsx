
import React from 'react';
import { Trash } from 'lucide-react';
import { Transaction } from '@/types/Transaction';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

interface TransactionItemProps {
  transaction: Transaction;
  onDelete: (id: string) => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction, onDelete }) => {
  const isIncome = transaction.amount > 0;
  const formattedAmount = Math.abs(transaction.amount).toFixed(2);
  const formattedDate = format(new Date(transaction.date), 'MMM dd, yyyy');

  return (
    <div className={`transaction-item ${isIncome ? 'transaction-income' : 'transaction-expense'}`}>
      <div className="flex flex-col">
        <span className="font-medium">{transaction.title}</span>
        <span className="text-sm text-muted-foreground">{formattedDate}</span>
      </div>
      <div className="flex items-center">
        <span className={`mr-4 ${isIncome ? 'income-amount' : 'expense-amount'}`}>
          {isIncome ? '+' : '-'}${formattedAmount}
        </span>
        <Button
          variant="ghost" 
          size="icon" 
          onClick={() => onDelete(transaction.id)}
          className="h-8 w-8 text-muted-foreground hover:text-destructive"
        >
          <Trash size={16} />
        </Button>
      </div>
    </div>
  );
};

export default TransactionItem;
