
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface TransactionFilterProps {
  currentFilter: 'all' | 'income' | 'expense';
  onFilterChange: (value: 'all' | 'income' | 'expense') => void;
}

const TransactionFilter: React.FC<TransactionFilterProps> = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="flex justify-end mb-4">
      <ToggleGroup type="single" value={currentFilter} onValueChange={(value) => {
        if (value) onFilterChange(value as 'all' | 'income' | 'expense');
      }}>
        <ToggleGroupItem value="all" className="text-sm">All</ToggleGroupItem>
        <ToggleGroupItem value="income" className="text-sm">Income</ToggleGroupItem>
        <ToggleGroupItem value="expense" className="text-sm">Expenses</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default TransactionFilter;
