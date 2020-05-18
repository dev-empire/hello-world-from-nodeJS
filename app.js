const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'path', 'index.html'), (err, data) => {
      if (err) throw err
      res.writeHead(200, { 'content-Type': 'text/html' })
      res.end(data)
    })
  }
  if (req.url === '/about') {
    fs.readFile(path.join(__dirname, 'path', 'about.html'), (err, data) => {
      if (err) throw err
      res.writeHead(200, { 'content-Type': 'text/html' })
      res.end(data)
    })
  }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, console.log(`server is okay on ${PORT}...`))
