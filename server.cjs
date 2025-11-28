const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const root = path.join(__dirname, 'dist');

app.use(express.static(root));

// SPA fallback: serve index.html for any unknown route
app.get('*', (req, res) => {
  res.sendFile(path.join(root, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
