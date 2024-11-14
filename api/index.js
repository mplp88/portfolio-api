const express = require('express')
const cors = require('cors')

const bodyParser = require('body-parser')
const http = require('http')

require('dotenv').config()

const EmailSender = require('../emailSender/emailSender')
const ChatBot = require('../chatbot/chatbot')

const PORT = process.env.PORT || 3000

const app = express()

const server = http.createServer(app)

app.use(cors())
app.use(bodyParser.json())

app.use('/email', EmailSender)
app.use('/chatbot', ChatBot)

app.get('/', (req, res) => {
  res.send('Api online')
})

server.listen(PORT, () => {
  console.log(`Api is listening on http://localhost:${PORT}/`)
})
