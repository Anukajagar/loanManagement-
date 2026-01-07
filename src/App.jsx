import React, { useState } from 'react'
import LoanForm from './components/LoanForm'
import SummaryDisplay from './components/SummaryDisplay'
import './App.css'

function App() {
  const [loanData, setLoanData] = useState(null)

  const handleFormSubmit = async (data) => {
    try {
      const response = await fetch('/api/loans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to save loan data');
      }

      const savedLoan = await response.json();
      console.log('Loan saved:', savedLoan);
      setLoanData(data);
    } catch (error) {
      console.error('Error saving loan:', error);
      // Still show the summary even if save fails, or maybe show an alert
      setLoanData(data);
      alert('Note: Could not save to database, but calculation is shown below.');
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Loan Management System</h1>
      </header>
      <main className="app-main">
        <LoanForm onSubmit={handleFormSubmit} />
        {loanData && <SummaryDisplay loanData={loanData} />}
      </main>
    </div>
  )
}

export default App

