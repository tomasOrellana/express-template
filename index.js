const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Hello from Express API' });
});

const port = process.env.PORT || 3000;

/* app.listen(port, () => console.log('Express server running on port', port)); */