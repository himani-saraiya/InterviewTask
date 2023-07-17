
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Serve the db.json file
app.get('/data', (req, res) => {
  const jsonData = require('./db.json');
  res.json(jsonData);
});

// Handle form submission
app.post('/submit', (req, res) => {

  // Respond with a success message
  res.json({ message: 'Data submitted successfully' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
