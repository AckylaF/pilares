import transporter from '../../config/nodemailer'

export default (req, res) => {
  const {
    name,
    birth,
    gender,
    address,
    email,
    phone,
    feedbackDay,
    mentorship
  } = req.body

  const mailOptions = {
    from: 'admin@projetopilares.com',
    to: 'pilaresdiscipulado@gmail.com',
    replyTo: email,
    subject: `Cadastro de ${name}`,
    text: `${name},${birth},${gender},${address},${email},${phone}`,
    html: `${name}<br>${birth}<br>${gender}<br>${address}<br>${email}<br>${phone}`
  }

  if (mentorship) {
    mailOptions.subject = `Resposta do dia ${feedbackDay}. ${email}`
    mailOptions.text = mentorship
    mailOptions.html = mentorship
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions)
    resolve(res.send('Success'))

    reject(new Error({ message: 'Failure' }))
  })
}
