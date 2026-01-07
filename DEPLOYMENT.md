# Deployment Guide: Loan Management System on Render

This guide provides step-by-step instructions for deploying the Loan Management System to Render (PaaS - Platform as a Service).

## Prerequisites

1. A GitHub account
2. A Render account (sign up at https://render.com)
3. Git installed on your local machine
4. Node.js installed locally (for testing)

## Deployment Steps

### Step 1: Prepare Your Code

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Loan Management System"
   ```

2. **Create a GitHub Repository**:
   - Go to https://github.com/new
   - Create a new repository (e.g., `loan-management-system`)
   - **Do NOT** initialize with README, .gitignore, or license

3. **Push Your Code to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/loan-management-system.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Render

#### Option A: Using Render Dashboard (Recommended)

1. **Sign in to Render**:
   - Go to https://render.com
   - Sign in with your GitHub account (recommended for easier integration)

2. **Create a New Web Service**:
   - Click "New +" button in the dashboard
   - Select "Web Service"
   - Connect your GitHub account if not already connected
   - Select your repository: `loan-management-system`

3. **Configure the Service**:
   - **Name**: `loan-management-system` (or your preferred name)
   - **Environment**: `Node`
   - **Region**: Choose closest to your users (e.g., `Oregon (US West)`)
   - **Branch**: `main` (or your default branch)
   - **Root Directory**: Leave empty (or `.` if needed)
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Instance Type**: 
     - Free tier: `Free` (512 MB RAM)
     - Paid tier: `Starter` or higher for better performance

4. **Environment Variables** (Optional):
   - Click "Advanced"
   - Add environment variable:
     - Key: `NODE_ENV`
     - Value: `production`

5. **Deploy**:
   - Click "Create Web Service"
   - Render will automatically:
     - Clone your repository
     - Install dependencies (`npm install`)
     - Build your application (`npm run build`)
     - Start the server (`npm start`)

6. **Wait for Deployment**:
   - The build process takes 2-5 minutes
   - You can watch the build logs in real-time
   - Once complete, your app will be live at: `https://your-app-name.onrender.com`

#### Option B: Using render.yaml (Infrastructure as Code)

1. **The `render.yaml` file is already created** in your project root

2. **Deploy via Render Dashboard**:
   - Go to Render Dashboard
   - Click "New +" → "Blueprint"
   - Connect your GitHub repository
   - Render will automatically detect `render.yaml` and configure the service

### Step 3: Verify Deployment

1. **Check Build Logs**:
   - In Render dashboard, click on your service
   - Go to "Logs" tab
   - Verify no errors during build

2. **Test Your Application**:
   - Visit your app URL: `https://your-app-name.onrender.com`
   - Test the form submission
   - Verify penalty calculations work correctly

3. **Monitor Performance**:
   - Check "Metrics" tab in Render dashboard
   - Monitor CPU, Memory, and Response times

## Post-Deployment

### Custom Domain (Optional)

1. In Render dashboard, go to your service
2. Click "Settings" → "Custom Domains"
3. Add your domain name
4. Follow DNS configuration instructions

### Auto-Deploy

- Render automatically deploys on every push to the main branch
- You can disable this in Settings → "Auto-Deploy"

### Environment Variables

If you need to add environment variables later:
1. Go to your service in Render dashboard
2. Click "Environment"
3. Add key-value pairs as needed

## Troubleshooting

### Build Fails

- **Check build logs** in Render dashboard
- **Verify Node.js version**: Ensure `engines` in `package.json` matches Render's supported versions
- **Check dependencies**: Ensure all dependencies are in `dependencies`, not `devDependencies`

### App Not Loading

- **Check start command**: Ensure `npm start` is correct
- **Verify server.js**: Ensure the server file exists and is correct
- **Check logs**: Look for runtime errors in the logs

### 404 Errors on Refresh

- This is handled by the catch-all route in `server.js`
- If issues persist, check the static file serving configuration

## Render Service Types Explained

- **IaaS (Infrastructure as a Service)**: Render provides managed infrastructure, but you manage the OS and runtime
- **PaaS (Platform as a Service)**: Render manages the platform, runtime, and deployment (what we're using)
- **SaaS (Software as a Service)**: Fully managed software solutions

**Our deployment uses PaaS** - Render handles:
- Server provisioning
- Node.js runtime
- Build process
- Deployment pipeline
- SSL certificates
- Load balancing (on paid plans)

## Cost Information

- **Free Tier**: 
  - 512 MB RAM
  - Spins down after 15 minutes of inactivity
  - First request after spin-down takes ~30 seconds
- **Paid Plans**: 
  - Starts at $7/month
  - Always-on service
  - Better performance
  - Custom domains included

## Support

- Render Documentation: https://render.com/docs
- Render Community: https://community.render.com
- Status Page: https://status.render.com


