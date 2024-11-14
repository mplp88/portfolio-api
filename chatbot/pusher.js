const dialogflow = require('@google-cloud/dialogflow')
const Pusher = require('pusher')

const projectId = process.env.GOOGLE_PROJECT_ID
const sessionClient = new dialogflow.SessionsClient({
  credentials: {
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_CLIENT_EMAIL
  }
})

const pusher = new Pusher({
  appId: process.env.PUSHER_APPID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true
})

const init = (chatId) => {
  try {
    console.log('init')
    pusher.trigger('ponbot', 'init', {
      chatId,
      message: {
        sender: 'PonBot',
        text: 'Hola, soy PonBot el ChatBot de Martín! ¿En qué te puedo ayudar?'
      }
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}

const receiveMessage = async (chatId, text) => {
  try {
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

    const responses = await sessionClient.detectIntent(request)
    const botReply = responses[0].queryResult.fulfillmentText

    pusher.trigger('ponbot', 'receiveMessage', {
      chatId,
      message: {
        sender: 'PonBot',
        text: botReply
      }
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = { pusher, init, receiveMessage }
