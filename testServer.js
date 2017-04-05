var express = require('express');

const app = module.exports = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3050);
console.log('Express started on port 3050');
