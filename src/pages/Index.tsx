
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import BalanceSummary from '../components/BalanceSummary';
import TransactionList from '../components/TransactionList';
import AddTransactionForm from '../components/AddTransactionForm';
import TransactionChart from '../components/TransactionChart';
import TransactionFilter from '../components/TransactionFilter';
import ExportButton from '../components/ExportButton';
import { Transaction } from '@/types/Transaction';
import { useToast } from '@/hooks/use-toast';
import { v4 as uuidv4 } from 'uuid';

const Index = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all');
  const { toast } = useToast();

  // Load transactions from localStorage on component mount
  useEffect(() => {
    const savedTransactions = localStorage.getItem('transactions');
    if (savedTransactions) {
      try {
        setTransactions(JSON.parse(savedTransactions));
      } catch (error) {
        console.error('Error parsing saved transactions', error);
        localStorage.removeItem('transactions');
      }
    }
  }, []);

  // Save transactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  // Add a new transaction
  const handleAddTransaction = (transactionData: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      id: uuidv4(), // Generate a unique ID
      ...transactionData,
    };

    setTransactions(prevTransactions => [newTransaction, ...prevTransactions]);
  };

  // Delete a transaction
  const handleDeleteTransaction = (id: string) => {
    setTransactions(prevTransactions => 
      prevTransactions.filter(transaction => transaction.id !== id)
    );
    
    toast({
      description: "Transaction deleted successfully",
    });
  };

  return (
    <div className="container mx-auto px-4 pb-12">
      <Header />
      
      <BalanceSummary transactions={transactions} />
      
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <TransactionChart transactions={transactions} />
          <AddTransactionForm onAddTransaction={handleAddTransaction} />
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-4">
            <TransactionFilter currentFilter={filter} onFilterChange={setFilter} />
            <ExportButton transactions={transactions} />
          </div>
          <TransactionList 
            transactions={transactions} 
            onDeleteTransaction={handleDeleteTransaction} 
            filter={filter}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
