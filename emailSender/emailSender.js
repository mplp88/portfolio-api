const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

router.post('/', (req, res) => {
  const responses = []
  const { name, email, subject, message } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.resend.com',
    secure: true,
    port: 465,
    auth: {
      user: 'resend',
      pass: process.env.RESEND_API_KEY
    }
  })

  const sendEmails = async () => {
    try {
      const responses = []

      const infoCliente = await transporter.sendMail({
        from: `"Martín Ponce" <${process.env.GMAIL_FROM}>`,
        to: email,
        subject: 'Gracias por tu contacto',
        text: `¡Hola ${name}! Gracias por dejar tu mensaje. Me pondré en contacto a la brevedad.`
      })
      responses.push(infoCliente.response)

      const infoParaMi = await transporter.sendMail({
        from: `"Web Contact" <${process.env.GMAIL_FROM}>`,
        to: process.env.GMAIL_FROM,
        replyTo: email,
        subject: subject || `Nuevo contacto de ${name}`,
        text: `Mensaje de ${name} (${email}): ${message}`
      })
      responses.push(infoParaMi.response)

      res.send({
        message: 'Correos enviados correctamente',
        data: responses
      })
    } catch (error) {
      console.error('Error en Nodemailer:', error)
      res.status(400).send({
        message: 'Error al enviar los correos',
        error: error.message
      })
    }
  }

  sendEmails()
})

module.exports = router
