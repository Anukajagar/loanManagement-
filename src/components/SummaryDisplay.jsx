import React from 'react'
import '../SummaryDisplay.css'

function SummaryDisplay({ loanData }) {
  const calculatePenalty = (loanAmount, dueDate, paymentDate) => {
    const due = new Date(dueDate)
    const payment = new Date(paymentDate)
    const diffTime = payment - due
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    // If payment is early (negative days), no penalty
    if (diffDays <= 0) {
      return { penaltyRate: 0, penaltyAmount: 0, days: 0 }
    } else if (diffDays <= 15) {
      return { penaltyRate: 0, penaltyAmount: 0, days: diffDays }
    } else if (diffDays >= 16 && diffDays <= 30) {
      return { penaltyRate: 3, penaltyAmount: loanAmount * 0.03, days: diffDays }
    } else if (diffDays >= 31 && diffDays <= 60) {
      return { penaltyRate: 6, penaltyAmount: loanAmount * 0.06, days: diffDays }
    } else {
      return { penaltyRate: 12, penaltyAmount: loanAmount * 0.12, days: diffDays }
    }
  }

  const penaltyInfo = calculatePenalty(loanData.loanAmount, loanData.dueDate, loanData.paymentDate)
  const totalAmount = loanData.loanAmount + penaltyInfo.penaltyAmount

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="summary-container">
      <h2>Loan Repayment Summary</h2>
      <div className="summary-card">
        <div className="summary-row">
          <span className="summary-label">Customer Name:</span>
          <span className="summary-value">{loanData.customerName}</span>
        </div>
        
        <div className="summary-row">
          <span className="summary-label">Due Date:</span>
          <span className="summary-value">{formatDate(loanData.dueDate)}</span>
        </div>
        
        <div className="summary-row">
          <span className="summary-label">Payment Date:</span>
          <span className="summary-value">{formatDate(loanData.paymentDate)}</span>
        </div>
        
        <div className="summary-row">
          <span className="summary-label">Days Delayed:</span>
          <span className="summary-value">
            {penaltyInfo.days === 0 ? 'No delay (paid on time or early)' : `${penaltyInfo.days} days`}
          </span>
        </div>
        
        <div className="summary-row">
          <span className="summary-label">Original Loan Amount:</span>
          <span className="summary-value">${loanData.loanAmount.toFixed(2)}</span>
        </div>
        
        <div className="summary-row">
          <span className="summary-label">Penalty Rate:</span>
          <span className="summary-value">
            {penaltyInfo.penaltyRate > 0 ? `${penaltyInfo.penaltyRate}%` : 'No penalty'}
          </span>
        </div>
        
        <div className="summary-row">
          <span className="summary-label">Penalty Amount:</span>
          <span className="summary-value">${penaltyInfo.penaltyAmount.toFixed(2)}</span>
        </div>
        
        <div className="summary-row total-row">
          <span className="summary-label">Total Amount to be Paid:</span>
          <span className="summary-value total-amount">${totalAmount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export default SummaryDisplay

