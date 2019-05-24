const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.send('hello mock');
  res.end();
})

app.listen(5000, () => console.info('Server running at http://127.0.0.1:5000'));