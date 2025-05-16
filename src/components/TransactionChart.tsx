
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Transaction } from '@/types/Transaction';

interface TransactionChartProps {
  transactions: Transaction[];
}

const TransactionChart: React.FC<TransactionChartProps> = ({ transactions }) => {
  const income = transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);
    
  const expense = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => acc + Math.abs(transaction.amount), 0);

  const data = [
    { name: 'Income', value: income, color: '#10B981' },
    { name: 'Expense', value: expense, color: '#EF4444' },
  ];

  // If there are no transactions or only one type (income or expense), don't render the chart
  if (transactions.length === 0 || income === 0 || expense === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Income vs. Expenses</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center">
          <p className="text-muted-foreground">
            {transactions.length === 0 
              ? "Add transactions to see chart" 
              : "Need both income and expenses to generate chart"}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Income vs. Expenses</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => ['$' + value.toFixed(2), '']}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default TransactionChart;
