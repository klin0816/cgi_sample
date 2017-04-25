#!/usr/local/bin/node
var querystring = require('querystring');
var param = querystring.parse(process.env.QUERY_STRING);
console.log('Content-type: text/plain; charset=utf-8\n');
setTimeout(() => {
  console.log('Hello, ' + param.fname + ' ' + param.lname);
},5000)
