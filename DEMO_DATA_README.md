# Demo Data Setup - Quick Instructions

## What I've Done

I've set up your project to display demo clothing data. You have **two ways to see the demo data:**

### Option A: Use Demo Data (Works Right Now ✅)

The website will automatically use demo clothing data as a fallback if MongoDB is not connected. The demo data includes:
- 12 clothing items (shirts, pants, dresses, skirts, kids items)
- 5 categories (Shirts, Pants, Dresses, Skirts, Kids Shirts)
- 3 genres (Male, Female, Kids)

**Just refresh your browser** and you should see the demo products on the homepage and search page.

### Option B: Set Up MongoDB & Persist Real Data

If you want the data saved in a real database:

#### Step 1: Get MongoDB Running

Choose ONE of these methods:

**Method 1: MongoDB Atlas (Cloud - Easiest)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a free cluster (M0)
4. Get your connection string
5. Update `api/.env`:
   ```
   MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/clothify
   ```

**Method 2: Install MongoDB Locally (Windows)**
1. Download from: https://www.mongodb.com/try/download/community
2. Run the installer (select .msi for Windows)
3. Choose "Complete" installation
4. Leave default paths and install as service
5. MongoDB starts automatically

**Method 3: Docker (If you have Docker Desktop)**
```powershell
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

#### Step 2: Restart Your Backend

Once MongoDB is running:
```powershell
cd api
npm start
```

#### Step 3: Seed the Database

Open PowerShell and run:
```powershell
$response = Invoke-RestMethod -Uri "http://localhost:4000/products/seed/demo" -Method Post -ContentType "application/json"
$response | ConvertTo-Json
```

Or run the Node seed script:
```powershell
cd api
node seedData.js
```

## Files Created/Modified

- ✅ `frontend/src/mockData.js` - Demo clothing data
- ✅ `frontend/src/services/FallbackProductServices.js` - Service with fallback logic
- ✅ `api/seedData.js` - Script to populate MongoDB
- ✅ `api/controllers/productController.js` - Added seedDemoData endpoint
- ✅ `api/routes/productRoutes.js` - Added /seed/demo route
- ✅ `MONGODB_SETUP.md` - Detailed setup guide

## Demo Data Includes

**Male Clothing:**
- Classic Blue Shirt - $49.99
- White Cotton Shirt - $59.99
- Black Slim Fit Shirt - $54.99
- Classic Blue Jeans - $79.99
- Black Formal Pants - $89.99

**Female Clothing:**
- Red Casual Dress - $69.99
- Black Evening Dress - $129.99
- Floral Summer Dress - $59.99
- Blue Denim Skirt - $54.99
- Black Midi Skirt - $64.99

**Kids Clothing:**
- Red Kids T-Shirt - $24.99
- Blue Kids T-Shirt - $24.99
- Green Kids T-Shirt - $26.99

## Troubleshooting

**Q: I see "Loading..." but no products**
A: Make sure the frontend is compiled. Check the browser console (F12) for errors.

**Q: Products show but can't add to cart**
A: The demo data works for viewing, but backend features may need MongoDB.

**Q: Want to use real database later?**
A: Just install MongoDB and update `.env` with your connection string. The code will automatically use it.

## Next Steps

1. ✅ Refresh your browser at http://localhost:3000
2. ✅ You should see the demo products displayed
3. 📝 Later: Follow the MongoDB setup guide to persist data

Enjoy your demo! 🎉
