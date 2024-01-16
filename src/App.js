import React from 'react';
import './App.css';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import Footer from './components/Footer';
import { GlobalProvider } from './context/GlobalState';
import Profile from './components/Profile';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <div className="container">
        <Profile />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
