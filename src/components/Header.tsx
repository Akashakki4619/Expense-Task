
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-8">
      <h1 className="text-3xl font-bold text-primary">Expense Tracker</h1>
      <p className="text-muted-foreground mt-2">Track your income and expenses easily</p>
    </header>
  );
};

export default Header;
