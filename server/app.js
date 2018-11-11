const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, '..', 'client')))

app.get('/', (res, req, next) => {
  res.sendFile(index.html)
})

module.exports = app