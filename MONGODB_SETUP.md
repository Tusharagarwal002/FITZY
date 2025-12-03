# MongoDB Setup Guide for Fiitzy Project

## Quick Setup Options

### Option 1: Use MongoDB Atlas (Cloud) - RECOMMENDED FOR QUICK START ⭐

1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Sign Up" and create a free account
3. Create a free cluster (M0)
4. Go to "Database Access" and create a database user with username/password
5. Go to "Network Access" and add your IP (or allow all)
6. Click "Connect" on your cluster and select "Connect your application"
7. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/dbname`)
8. Update your `.env` file:
   ```
   MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/clothify
   ```
9. Restart your backend server

### Option 2: Install MongoDB Locally on Windows

1. Download MongoDB Community Edition:
   - Visit: https://www.mongodb.com/try/download/community
   - Select Windows, .msi file
   - Choose version 7.0 or latest

2. Run the installer:
   - Accept the license
   - Choose "Complete" installation
   - Enable "MongoDB as a Windows Service"
   - Choose data directory: `C:\Program Files\MongoDB\Server\7.0\data`
   - Choose log file: `C:\Program Files\MongoDB\Server\7.0\log\mongod.log`

3. MongoDB will start automatically

4. Verify installation by opening PowerShell and running:
   ```powershell
   mongod --version
   ```

5. Once MongoDB is running, restart your backend server and run:
   ```powershell
   # Terminal 1 - Backend
   cd path/to/api
   npm start
   
   # Terminal 2 - Seed Data
   cd path/to/api
   node seedData.js
   ```

### Option 3: Use Docker (Requires Docker Desktop)

If you have Docker installed:

```powershell
# Start MongoDB in Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Then run the seed script
cd api
node seedData.js
```

## After Setup

Once MongoDB is running, go to:
- http://localhost:4000/products/seed/demo (POST request)

Or use curl in PowerShell:
```powershell
$response = Invoke-RestMethod -Uri "http://localhost:4000/products/seed/demo" -Method Post -ContentType "application/json"
$response
```

This will populate your database with demo clothing items.

## Troubleshooting

- **"Cannot find module"**: Run `npm install` in the api folder
- **"Connection timeout"**: MongoDB is not running - follow the installation steps above
- **"Port already in use"**: Change PORT in .env file
- **"Database already exists"**: The seed script will clear old data and re-populate

For more help, visit: https://docs.mongodb.com/manual/installation/
