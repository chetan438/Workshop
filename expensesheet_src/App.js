import React, { useState } from 'react';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [deposits, setDeposits] = useState([]);
  const [purchaseType, setPurchaseType] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [depositType, setDepositType] = useState('');
  const [depositAmount, setDepositAmount] = useState('');

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (purchaseType && description && amount) {
      const newExpense = {
        type: 'Expense',
        purchaseType,
        description,
        amount: parseFloat(amount),
      };
      setExpenses([...expenses, newExpense]);
      setPurchaseType('');
      setDescription('');
      setAmount('');
    }
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const handleAddDeposit = (e) => {
    e.preventDefault();
    if (depositType && depositAmount) {
      const newDeposit = {
        type: 'Deposit',
        depositType,
        amount: parseFloat(depositAmount),
      };
      setDeposits([...deposits, newDeposit]);
      setDepositType('');
      setDepositAmount('');
    }
  };

  const getTotalBalance = () => {
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    const totalDeposits = deposits.reduce((total, deposit) => total + deposit.amount, 0);
    return (totalDeposits - totalExpenses).toFixed(2);
  };

  const allEntries = [...expenses, ...deposits];

  return (
    <div className="App">
      <h1>Expense Sheet</h1>
      <div className="balance">
        <h2>Balance: ${getTotalBalance()}</h2>
      </div>
      
      <form onSubmit={handleAddExpense} className="expense-form">
        <h3>Add Expense</h3>
        <label>
          Purchase Type:
          <input
            type="text"
            value={purchaseType}
            onChange={(e) => setPurchaseType(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Expense</button>
      </form>

      <form onSubmit={handleAddDeposit} className="deposit-form">
        <h3>Add Deposit</h3>
        <label>
          Type:
          <input
            type="text"
            value={depositType}
            onChange={(e) => setDepositType(e.target.value)}
            required
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            step="0.01"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Deposit</button>
      </form>

      <div className="expense-table">
        <h2>Expenses and Deposits</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allEntries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.type === 'Deposit' ? entry.depositType : entry.purchaseType}</td>
                <td>{entry.type === 'Deposit' ? '' : entry.description}</td>
                <td>${entry.amount.toFixed(2)}</td>
                <td>
                  {entry.type === 'Expense' && (
                    <button onClick={() => handleDeleteExpense(index)}>Delete</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
