import React, { useState } from 'react'
import '../LoanForm.css'

function LoanForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    customerName: '',
    loanAmount: '',
    paymentDate: '',
    dueDate: ''
  })
  const [errors, setErrors] = useState({})

  const validateField = (name, value) => {
    let error = ''
    
    if (!value || value.trim() === '') {
      error = `${name} is required`
    } else if (name === 'loanAmount') {
      const amount = parseFloat(value)
      if (isNaN(amount) || amount <= 0) {
        error = 'Loan amount must be a positive number'
      }
    } else if (name === 'paymentDate' || name === 'dueDate') {
      const date = new Date(value)
      if (isNaN(date.getTime())) {
        error = 'Please enter a valid date'
      }
    }
    
    return error
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate all fields
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key])
      if (error) {
        newErrors[key] = error
      }
    })

    // Dates are validated individually above, no need for additional date comparison
    // Early payments (payment date before due date) are allowed and will result in no penalty

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // If validation passes, submit the form
    onSubmit({
      customerName: formData.customerName.trim(),
      loanAmount: parseFloat(formData.loanAmount),
      paymentDate: formData.paymentDate,
      dueDate: formData.dueDate
    })
  }

  return (
    <div className="loan-form-container">
      <h2>Add Customer Loan Repayment Details</h2>
      <form onSubmit={handleSubmit} className="loan-form">
        <div className="form-group">
          <label htmlFor="customerName">Customer Name *</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.customerName ? 'error' : ''}
            placeholder="Enter customer name"
          />
          {errors.customerName && <span className="error-message">{errors.customerName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="loanAmount">Loan Amount *</label>
          <input
            type="number"
            id="loanAmount"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.loanAmount ? 'error' : ''}
            placeholder="Enter loan amount"
            step="0.01"
            min="0"
          />
          {errors.loanAmount && <span className="error-message">{errors.loanAmount}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="dueDate">Due Date *</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.dueDate ? 'error' : ''}
          />
          {errors.dueDate && <span className="error-message">{errors.dueDate}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="paymentDate">Payment Date *</label>
          <input
            type="date"
            id="paymentDate"
            name="paymentDate"
            value={formData.paymentDate}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.paymentDate ? 'error' : ''}
          />
          {errors.paymentDate && <span className="error-message">{errors.paymentDate}</span>}
        </div>

        <button type="submit" className="submit-button">Calculate Loan Details</button>
      </form>
    </div>
  )
}

export default LoanForm

