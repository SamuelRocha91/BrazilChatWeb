const express = require('express');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use(express.static('public'))

module.exports = app;