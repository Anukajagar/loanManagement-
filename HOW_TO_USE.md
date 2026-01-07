# How to Use the Loan Management System

## 🚀 Quick Start Guide

### Option 1: Development Mode (Recommended for Development)

1. **Install Dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Open in Browser**:
   - The terminal will show a URL like: `http://localhost:5173`
   - Open this URL in your browser
   - The app will automatically reload when you make changes

4. **Stop the Server**:
   - Press `Ctrl + C` in the terminal

---

### Option 2: Production Mode (Test Before Deployment)

1. **Build the Application**:
   ```bash
   npm run build
   ```
   This creates optimized production files in the `/dist` folder.

2. **Start Production Server**:
   ```bash
   npm start
   ```

3. **Open in Browser**:
   - Visit: `http://localhost:3000`
   - This simulates how it will run on Render

4. **Stop the Server**:
   - Press `Ctrl + C` in the terminal

---

## 📝 Using the Application

### Step 1: Fill Out the Form

1. **Customer Name**
   - Enter the customer's full name
   - Required field
   - Example: "John Doe"

2. **Loan Amount**
   - Enter the loan amount in dollars
   - Must be a positive number
   - Can include decimals (e.g., 10000.50)
   - Example: `10000`

3. **Due Date**
   - Select the original loan due date
   - Use the date picker
   - Example: January 1, 2024

4. **Payment Date**
   - Select when the payment was/will be made
   - Can be before, on, or after the due date
   - Example: January 25, 2024

### Step 2: Submit the Form

- Click the **"Calculate Loan Details"** button
- The form will validate all fields
- If there are errors, they will be shown in red

### Step 3: View Results

After successful submission, you'll see a summary showing:

- ✅ **Customer Name**: The name you entered
- ✅ **Due Date**: Formatted date display
- ✅ **Payment Date**: Formatted date display
- ✅ **Days Delayed**: Number of days late (or "No delay" if on time/early)
- ✅ **Original Loan Amount**: The loan amount entered
- ✅ **Penalty Rate**: Percentage applied (or "No penalty")
- ✅ **Penalty Amount**: Calculated penalty in dollars
- ✅ **Total Amount to be Paid**: Loan amount + penalty

---

## 💰 Penalty Calculation Rules

The system automatically calculates penalties based on delay:

| Days Delayed | Penalty Rate | Example (on $10,000 loan) |
|--------------|--------------|---------------------------|
| **0-15 days** | 0% (No penalty) | $0 penalty = $10,000 total |
| **16-30 days** | 3% | $300 penalty = $10,300 total |
| **31-60 days** | 6% | $600 penalty = $10,600 total |
| **61+ days** | 12% | $1,200 penalty = $11,200 total |
| **Early/On-time** | 0% (No penalty) | $0 penalty = $10,000 total |

---

## ✅ Form Validation

The form validates:

1. **Required Fields**: All fields must be filled
2. **Numeric Values**: Loan amount must be a number
3. **Positive Amounts**: Loan amount must be greater than 0
4. **Valid Dates**: Dates must be valid calendar dates
5. **Real-time Feedback**: Errors show as you type or when you leave a field

### Example Validations:

- ❌ Empty customer name → "Customer Name is required"
- ❌ Negative loan amount → "Loan amount must be a positive number"
- ❌ Text in loan amount → "Loan amount must be a positive number"
- ❌ Invalid date → "Please enter a valid date"

---

## 📊 Example Scenarios

### Example 1: On-Time Payment
- **Loan Amount**: $5,000
- **Due Date**: March 1, 2024
- **Payment Date**: March 1, 2024
- **Result**: No delay, No penalty, Total = $5,000

### Example 2: 20 Days Late
- **Loan Amount**: $10,000
- **Due Date**: January 1, 2024
- **Payment Date**: January 21, 2024
- **Result**: 20 days late, 3% penalty ($300), Total = $10,300

### Example 3: 45 Days Late
- **Loan Amount**: $15,000
- **Due Date**: February 1, 2024
- **Payment Date**: March 18, 2024
- **Result**: 46 days late, 6% penalty ($900), Total = $15,900

### Example 4: Very Late Payment
- **Loan Amount**: $20,000
- **Due Date**: January 1, 2024
- **Payment Date**: April 15, 2024
- **Result**: 105 days late, 12% penalty ($2,400), Total = $22,400

---

## 🛠️ Available Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server (with hot reload) |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run preview` | Preview production build (alternative) |

---

## 🐛 Troubleshooting

### Issue: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org

### Issue: Port already in use
**Solution**: 
- Development: Vite will suggest another port automatically
- Production: Change PORT in server.js or set environment variable

### Issue: Dependencies not installing
**Solution**: 
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Issue: Build fails
**Solution**: 
- Check Node.js version: `node --version` (should be >= 18.0.0)
- Check npm version: `npm --version` (should be >= 9.0.0)
- Delete `node_modules` and `package-lock.json`, then `npm install` again

### Issue: Page not loading
**Solution**:
- Check if server is running (look for "Server is running" message)
- Verify the correct URL (dev: http://localhost:5173, prod: http://localhost:3000)
- Check browser console for errors (F12)

---

## 💡 Tips

1. **Development Mode**: Use `npm run dev` when making changes - it has hot reload
2. **Production Testing**: Use `npm run build && npm start` to test production build
3. **Form Reset**: Refresh the page to clear the form and start over
4. **Multiple Calculations**: Submit the form multiple times with different values to see different results

---

## 📱 Browser Compatibility

Works on all modern browsers:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

---

## 🎯 Next Steps

1. **Test Locally**: Run `npm run dev` and test all features
2. **Build for Production**: Run `npm run build` to create production files
3. **Deploy**: Follow the deployment guide to deploy on Render
4. **Customize**: Modify styles, add features, or customize as needed

---

**Need Help?** Check the deployment guides or troubleshoot section above.


