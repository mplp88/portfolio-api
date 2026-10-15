const express = require('express')
const crypto = require('crypto')
const router = express.Router()
const { init, receiveMessage } = require('./pusher')

router.get('/', (req, res) => {
  const chatId = crypto.randomUUID()
  return res.json({ chatId })
})

router.get('/init/:chatid', async (req, res) => {
  const chatId = req.params.chatid

  try {
    await init(chatId)

    return res.status(200).json({ chatId })
  } catch (error) {
    console.error('[Chatbot] Error inicializando chat:', error)

    return res.status(500).json({
      error: 'No se pudo inicializar el chatbot.'
    })
  }
})

router.post('/sendMessage/:chatId', async (req, res) => {
  const chatId = req.params.chatId
  const message = req.body.message

  if (typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({
      error: 'El mensaje es obligatorio.'
    })
  }

  try {
    await receiveMessage(chatId, message)

    return res.status(200).json({
      success: true
    })
  } catch (error) {
    console.error('[Chatbot] Error procesando mensaje:', error)

    return res.status(500).json({
      error: 'No se pudo procesar el mensaje.'
    })
  }
})

module.exports = router
