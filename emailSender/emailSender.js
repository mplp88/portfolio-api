const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

router.post('/', (req, res) => {
  const responses = []
  const { name, email, message } = req.body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD
    }
  })

  const mailOptions = {
    from: `Martín Ponce <${process.env.GMAIL_USERNAME}>`,
    to: `${name} <${email}>`,
    subject: 'Gracias por tu contacto',
    text: `¡Hola ${name}! Gracias por dejar tu mensaje. Me pondré en contacto a la brevedad. Martín`
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(400).send({
        message: 'Error al enviar el correo al usuario',
        data: error
      })
      return
    }
    responses.push(info.response)

    mailOptions.from = `${name} <${email}>`
    mailOptions.to = process.env.GMAIL_USERNAME
    mailOptions.name = name
    mailOptions.text = message + '.'
    mailOptions.subject = `Nuevo contacto de ${name}`
    mailOptions.replyTo = email

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(400).send({
          message: 'Error al enviar el correo a mi',
          data: error
        })

        return
      }

      responses.push(info.response)
      res.send({
        message: 'Correos enviados correctamente:',
        data: responses
      })
    })
  })
})

module.exports = router
