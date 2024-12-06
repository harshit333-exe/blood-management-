
const express = require('express');
const cors = require('cors');  // Import the cors package
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all origins (or specify specific origins)
app.use(cors());  // This will allow all origins to access your server

// Start server
app.listen(port,()=>console.log(`Server running on port ${port}`));


// Import routes
const donorRoutes = require('./routes/donorRoutes'); // Adjust path if needed

// Use routes
app.use('http://localhost:3000/api',donorRoutes); // Prefix routes with /api


