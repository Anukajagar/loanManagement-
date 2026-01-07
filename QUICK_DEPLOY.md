# Quick Deployment Steps - Render (PaaS)

## Prerequisites Checklist
- [ ] GitHub account
- [ ] Render account (https://render.com)
- [ ] Code pushed to GitHub repository

## Step-by-Step Deployment

### 1. Push Code to GitHub
```bash
git init
git add .
git commit -m "Ready for deployment"
git remote add origin https://github.com/YOUR_USERNAME/loan-management-system.git
git push -u origin main
```

### 2. Deploy on Render

1. **Go to Render Dashboard**: https://dashboard.render.com
2. **Click**: "New +" → "Web Service"
3. **Connect GitHub** (if not connected)
4. **Select Repository**: Choose `loan-management-system`
5. **Configure**:
   - Name: `loan-management-system`
   - Environment: `Node`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Plan: `Free` (or paid for better performance)
6. **Click**: "Create Web Service"
7. **Wait**: 2-5 minutes for build to complete
8. **Access**: Your app at `https://your-app-name.onrender.com`

## What Happens During Deployment?

1. **Build Phase**: 
   - Installs dependencies (`npm install`)
   - Builds React app (`npm run build`)
   - Creates optimized production files in `/dist`

2. **Start Phase**:
   - Runs Node.js server (`npm start`)
   - Serves static files from `/dist`
   - App is live and accessible

## Service Types (Render)

- **PaaS (Platform as a Service)** ✅ - What we're using
  - Render manages: Server, Runtime, Build, Deployment
  - You manage: Application code only

- **IaaS (Infrastructure as a Service)**
  - You manage: OS, Runtime, Server configuration
  - More control, more responsibility

- **SaaS (Software as a Service)**
  - Fully managed software (e.g., Gmail, Salesforce)

## Important Files for Deployment

- `server.js` - Node.js server to serve static files
- `package.json` - Contains build and start scripts
- `render.yaml` - Optional: Infrastructure as Code config
- `vite.config.js` - Vite build configuration

## Testing Locally Before Deployment

```bash
# Build the app
npm run build

# Start the production server
npm start

# Visit http://localhost:3000
```

## Troubleshooting

**Build fails?**
- Check Render logs
- Verify all dependencies in `package.json`

**App not loading?**
- Check start command: `npm start`
- Verify `server.js` exists
- Check logs for errors

**404 on page refresh?**
- Already handled by catch-all route in `server.js`


