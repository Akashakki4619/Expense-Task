
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { Transaction } from '@/types/Transaction';

interface AddTransactionFormProps {
  onAddTransaction: (transaction: Omit<Transaction, 'id'>) => void;
}

const AddTransactionForm: React.FC<AddTransactionFormProps> = ({ onAddTransaction }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      toast({
        title: "Error",
        description: "Please enter a title for the transaction",
        variant: "destructive",
      });
      return;
    }

    if (!amount || isNaN(Number(amount))) {
      toast({
        title: "Error",
        description: "Please enter a valid amount",
        variant: "destructive",
      });
      return;
    }

    onAddTransaction({
      title: title.trim(),
      amount: parseFloat(amount),
      date: new Date(date).toISOString(),
    });

    // Reset form
    setTitle('');
    setAmount('');
    setDate(new Date().toISOString().substr(0, 10));
    
    toast({
      title: "Success",
      description: "Transaction added successfully",
      variant: "default",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Transaction</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">
              Amount <span className="text-sm text-muted-foreground">(negative for expense)</span>
            </Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              placeholder="Enter amount..."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full">Add Transaction</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddTransactionForm;
