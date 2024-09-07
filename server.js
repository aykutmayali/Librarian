// Import necessary modules
const express = require('express');
const path = require('path');  // For path resolution
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const borrowRoutes = require('./routes/borrowRoutes');
const { ValidationError } = require('express-validator');

// Initialize the app
const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());

// Use the routes
app.use(userRoutes);
app.use(bookRoutes);
app.use(borrowRoutes);

// Basic health check route
app.get('/', (req, res) => {
  res.send('Library Management System API is running!');
});

// Error handling middleware for validation errors
app.use((err, req, res, next) => {
    console.error(err.stack);
  
    // If the error is an instance of ValidationError (from express-validator)
    if (err.errors) {
      return res.status(400).json({
        message: 'Validation Error',
        errors: err.errors // Provide detailed validation errors
      });
    }
  
    // General error handling
    res.status(500).json({
      message: 'Internal Server Error',
      error: err.message || 'Unknown error'
    });
  });

// Specify the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
