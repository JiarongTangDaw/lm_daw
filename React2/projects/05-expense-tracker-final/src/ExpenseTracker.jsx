import React, { useState, useEffect } from 'react';
import './ExpenseTracker.css';

function ExpenseTracker() {
  // 🎯 PASO 2A: useState básico
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('comida');

  // 🎯 PASO 2B: Función para añadir gastos
  const addExpense = (e) => {
    e.preventDefault();
    if (description.trim() && amount > 0) {
      const newExpense = {
        id: Date.now(),
        description: description.trim(),
        amount: parseFloat(amount),
        category,
        date: new Date().toLocaleDateString('es-ES')
      };
      
      setExpenses(prev => [newExpense, ...prev]);
    //   setExpenses(prev => {
    //     const newExpenseToSave = [newExpense, ...prev];

    //     localStorage.setItem('expenses', JSON.stringify(newExpenseToSave));
    //     return newExpenseToSave;
    //   });

      setDescription('');
      setAmount('');
    }
  };

  // 🎯 PASO 2C: Calcular total
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  // 🎯 PASO 3A: Cargar datos usando localStorage 
  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses') ;

    if(savedExpenses) {
        setExpenses(JSON.parse(savedExpenses));
    }
  },[]);

  // 🎯 PASO 3B: Guardar datos usando localStorage 
  useEffect(() => {
    if(expenses.length > 0){
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }
  },[expenses])

  // 🎯 PASO 3C: Añadir un limite de gasto mensual
  const [monthlyBudget, setMonthlyBudget] = useState(1000);

  useEffect(() =>{
    const budget = localStorage.getItem('budget');

    if(budget){
        setMonthlyBudget(budget);
    }
  },[])

  useEffect(() =>{
    localStorage.setItem('budget', monthlyBudget);
  },[monthlyBudget]);


  return (
    <div className="expense-tracker">
      <header className="header">
        <h1>💰 Control de Gastos</h1>
      </header>

      <div className="dashboard">
        <div className="stat-card">
          <h3>Total Gastado</h3>
          <p>€{totalExpenses.toFixed(2)}</p>
        </div>
      </div>

      <form onSubmit={addExpense} className="expense-form">
        <input
          type="text"
          placeholder="Descripción..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input"
        />
        <input
          type="number"
          step="0.01"
          placeholder="Cantidad (€)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="form-input"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-select"
        >
          <option value="comida">🍕 Comida</option>
          <option value="transporte">🚗 Transporte</option>
          <option value="entretenimiento">🎬 Entretenimiento</option>
          <option value="otros">📦 Otros</option>
        </select>
        <button type="submit" className="submit-btn">
          Añadir Gasto
        </button>
      </form>

      <div className="expenses-list">
        <h2>Gastos Recientes</h2>
        {expenses.map(expense => (
          <div key={expense.id} className="expense-item">
            <span>{expense.description}</span>
            <span>€{expense.amount.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseTracker;
