// Create web server
const express = require('express');
const app = express();

// Read json files
const fs = require('fs');
const comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Create a route that sends the comments as a JSON response
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});