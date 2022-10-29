const path = require('path')
const fs = require('fs')
const http = require('http')

const server = http.createServer((request, response) => {
    let filepath = path.join(__dirname, 'template_pages', request.url === '/'? 'index.html': request.url)
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) throw err;
      response.writeHead(200, {'Content-Type' : 'text/html'})
      response.end(data)
    })

  
  })

  const port = 8000;
  server.listen(port ,() => {
    console.log('Server is running on port 8000')
})