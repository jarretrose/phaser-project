const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname));
});

app.listen(port, () => console.log(`App is listening.`))