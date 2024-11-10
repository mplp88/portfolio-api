const { Server } = require('socket.io')
const dialogflow = require('@google-cloud/dialogflow') // require('dialogflow');
require('dotenv').config()

const projectId = process.env.GOOGLE_PROJECT_ID
const sessionClient = new dialogflow.SessionsClient({
  credentials: {
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_CLIENT_EMAIL
  }
})

const addSocketIo = (server) => {
  const io = new Server(server, {
    cors: {
      origin: 'http://localhost:5173',
      methods: ['GET', 'POST']
    }
  })
  io.on('connection', (socket) => {
    socket.emit('receiveMessage', {
      socketId: socket.id,
      message: {
        sender: 'PonBot',
        text: 'Hola, soy PonBot el ChatBot de Martín! ¿En qué te puedo ayudar?'
      }
    })

    socket.on('init', () => {
      io.emit('init', 'Hello!')
    })

    socket.on('sendMessage', async ({ socketId, text }) => {
      const sessionId = crypto.randomUUID()
      const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId)

      const request = {
        session: sessionPath,
        queryInput: {
          text: {
            text,
            languageCode: 'es'
          }
        }
      }

      try {
        const responses = await sessionClient.detectIntent(request)
        const botReply = responses[0].queryResult.fulfillmentText

        io.emit('receiveMessage', {
          socketId,
          message: {
            sender: 'PonBot',
            text: botReply
          }
        })
      } catch (error) {
        console.error('ERROR:', error)
      }
    })

    // socket.on('disconnect', () => {
    //   //Do something on disconect
    // })
  })
}

module.exports = addSocketIo
