
import React from 'react';
import { Button } from '@/components/ui/button';
import { Transaction } from '@/types/Transaction';
import { useToast } from '@/hooks/use-toast';

interface ExportButtonProps {
  transactions: Transaction[];
}

const ExportButton: React.FC<ExportButtonProps> = ({ transactions }) => {
  const { toast } = useToast();

  const exportToCSV = () => {
    if (transactions.length === 0) {
      toast({
        title: "Nothing to export",
        description: "Add some transactions before exporting",
        variant: "destructive",
      });
      return;
    }

    // Headers for CSV
    const headers = ['Title', 'Amount', 'Date', 'Type'];
    
    // Format transaction data for CSV
    const data = transactions.map(transaction => [
      transaction.title,
      transaction.amount.toFixed(2),
      new Date(transaction.date).toLocaleDateString(),
      transaction.amount > 0 ? 'Income' : 'Expense'
    ]);

    // Combine headers and data
    const csvContent = [
      headers.join(','),
      ...data.map(row => row.join(','))
    ].join('\n');

    // Create a blob and download link
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'transactions.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    toast({
      title: "Export successful",
      description: "Your transactions have been exported to CSV",
    });
  };

  return (
    <Button 
      onClick={exportToCSV} 
      variant="outline" 
      className="ml-2"
      disabled={transactions.length === 0}
    >
      Export to CSV
    </Button>
  );
};

export default ExportButton;
