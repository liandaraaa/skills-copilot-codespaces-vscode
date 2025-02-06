// Create web server with express
const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.json({ comments: [] });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});