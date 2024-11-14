const express = require('express')
const router = express.Router()
const { init, receiveMessage } = require('./pusher')

router.get('/', (req, res) => {
  try {
    console.log('contactando al chatbot')
    const chatId = crypto.randomUUID()
    res.json({
      chatId
    })
  } catch (error) {
    res.status(400).json({
      error
    })
  }
})

router.get('/init/:chatid', (req, res) => {
  const chatId = req.params.chatid
  try {
    console.log('iniciando el chatbot')
    init(chatId)
  } catch (error) {
    res.status(400).json({
      error
    })
  }
})

router.post('/sendMessage/:chatId', (req, res) => {
  try {
    const chatId = req.params.chatId
    const message = req.body.message
    receiveMessage(chatId, message)
  } catch (error) {
    res.status(400).send(error)
  }
})

module.exports = router