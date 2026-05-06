# FinCore AI - Loan Eligibility & Risk Analyzer

FinCore AI is a full-stack, AI-powered dashboard designed to assess loan eligibility, analyze financial risk, calculate EMIs, and provide smart financial recommendations.

## Features
- **AI Insights:** Uses AI engines to provide deeper analysis of the loan risk and suggestions based on credit score, income, and existing liabilities.
- **EMI Breakdown Engine:** Calculates prospective EMIs given interest rates and inputs, enabling immediate transparency for applicants.
- **Risk Assessment:** Features a real-time risk indicator tracking likelihood of default compared with healthy financing.
- **Status Tracker & History:** Ability to track and maintain records of previously run loan analysis outcomes.
- **Dark/Light Mode:** Toggleable theme configurations (defaults to Light Mode).

## Tech Stack
- **Frontend:** React, TypeScript, Tailwind CSS, Vite, Framer Motion
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Deployment:** Vercel (Monorepo deployment)

## Project Structure
- `/client` - Contains all frontend code and components
- `/server` - Contains the Node+Express backend API and MongoDB controllers

## Local Setup

### 1. Backend (Server)
```bash
cd server
npm install
# Set up your .env file with PORT, MONGO_URI, etc.
node index.js
```

### 2. Frontend (Client)
```bash
cd client
npm install
npm run dev
```

## Vercel Deployment

This project is configured out-of-the-box for simultaneous frontend and backend deployment on Vercel. 

**Steps to deploy:**
1. Push your code to a GitHub repository.
2. Go to Vercel and create a new project by importing your repository.
3. Ensure the **Framework Preset** is set to `Other` or `Vite`.
4. Ensure the **Root Directory** is left at the repository root (`./`).
5. Add any required backend environment variables (like `MONGO_URI`) in the Vercel dashboard.
6. Deploy! Vercel handles the API routing and static asset builds natively via the provided `vercel.json` file.
