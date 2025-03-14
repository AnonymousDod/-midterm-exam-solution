const express = require('express');  // Import express
  const app = express();  // Create an express app
  
  // Define the /test route
  app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Rod Kent M. Ito' });
  });
  
  // Set the app to listen on port 3000
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });