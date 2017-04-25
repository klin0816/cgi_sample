# cgi_sample

this is a cgi practice that use 3 method: get, post and ajax.
need to install 'querystring' first
```c
  npm i querystring
```

## ajax.njs
```c
  setTimeout( () => {console.log();},5000) 
```
'5000' means ajax.njs will throw the result to app.js after 5 seconds

## app.js
```c
  $.get('ajax.njs', {fname: 2}, (data) => {$('#ajax-output').html(data)} )
```
  1. use 'get' method send {fname: 2} to ajax.njs
  2. the result return from ajax.njs = data and change 'ajax-output' tag with data
