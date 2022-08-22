// server.js
var http = require('http'); // Import Node.js core module
var doctors = require('./doctors');

var server = http.createServer(function (req, res) {   // create web server

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url == '/') { // check the URL of the current request
    // set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // set response content
    res.write('<html><body><p>Greens Kiosk API.</p></body></html>');
    res.end();
  }
  else if (req.url == "/doctorsList") { // check the URL of the current request
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(doctors.getItems()));
    res.end();
  }
  else if (req.url == "/doctorsList/hiv") {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(doctors.getItems('hiv')));
    res.end();
  }
  else if (req.url == '/doctorsList/physical') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(doctors.getItems('physical')));
    res.end();
  }
  else if (req.url == '/doctorsList/nutrition') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(doctors.getItems('nutrition')));
    res.end();
  }
  else if (req.url == '/doctorsList/gynacology') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(doctors.getItems('gynacology')));
    res.end();
  }
  else if (req.url == '/doctorsList/therapy') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(doctors.getItems('therapy')));
    res.end();
  }
  else if (req.url == '/doctorsList/family') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(doctors.getItems('family')));
    res.end();
  }
  else
    res.end('Invalid Request!');

});

server.listen(5000); // listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')