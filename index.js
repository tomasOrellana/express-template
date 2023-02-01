const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Hello from Express API' });
});

app.listen(3000, () => console.log('Express server running on port 3000'));