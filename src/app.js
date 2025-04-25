const express = require('express');

const app = express();

app.get('/user', (req, res) => {
  res.send({ firstname: 'Akshay', lastName: 'Saini' });
});

app.post('/user', (req, res) => {
  res.send('Data successfully saved to the database');
});

app.delete('/user', (req, res) => {
  res.send('Deleted Successfully');
});

app.use('/test', (req, res) => {
  res.send('Hello from the server');
});

app.listen(7777, () => {
  console.log('Server running at port: 7777');
});
