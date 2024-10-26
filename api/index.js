const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const EmailSender = require('../emailSender/emailSender')

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/email', EmailSender)

app.get('/', (req, res) => {
  res.send('Api online')
})

app.listen(PORT, () => {
  console.log(`Api is listening on http://localhost:${PORT}/`)
})
