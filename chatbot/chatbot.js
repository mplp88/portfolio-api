const express = require('express')
const router = express.Router()
const { init, receiveMessage } = require('./pusher')

router.get('/', (req, res) => {
  try {
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
    res.status(200).send()
  } catch (error) {
    res.status(400).send(error)
  }
})

module.exports = router
