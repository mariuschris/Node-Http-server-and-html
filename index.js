const path = require('path')
const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
    fs.readFile('home.html', (err, data) => {
      if (err) throw err;
      res.writeHead(200, {'Content-Type' : 'text/html'})
      res.end()
    })
  }).listen(8000)