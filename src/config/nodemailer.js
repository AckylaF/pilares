const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.umbler.com",
  port: 587,
  auth: {
    user: "admin@projetopilares.com",
    pass: "pilares@2020"
  }
});

module.exports = transporter;