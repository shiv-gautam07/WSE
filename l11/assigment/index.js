const {greet} = require('./script');

function sayHello(name) {
  return greet(name);
}   
Module.exports = { sayHello };