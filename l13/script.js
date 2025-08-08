const express =require('express');
const app = express();

app.response.sendStatus = function(statusCode) {
  this.status(statusCode).end()
  .send(message); 
}   

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.get('/bad request', (req, res) => {
  res.sendStatus(400);
});

app.get('/notfound', (req, res) => {
  res.sendStatus(404);
});