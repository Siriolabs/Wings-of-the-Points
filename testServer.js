var express = require('express');

const app = module.exports = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/index_new.html', (req, res) => {
  res.sendFile(__dirname + '/index_new.html');
});

app.get('/local.json', (req, res) => {
  res.sendFile(__dirname + '/local.json');
});

app.listen(3050);
console.log('Express started on port 3050');
