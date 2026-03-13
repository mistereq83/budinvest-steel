const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

// Design variants comparison as homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'compare', 'index.html'));
});

// Chooser splash page
app.get('/chooser', (req, res) => {
  res.sendFile(path.join(__dirname, 'chooser', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Budinvest Steel running on port ${PORT}`);
});
