const Content = require("../model/Content");
const transporter = require("../../config/nodemailer");

module.exports = {
  index(req, res) {
    return res.render("home");
  },
  show(req, res) {
    Content.find(req.params.id, (err, result) => {
      if(err) throw err;
      let content = Array.from(result);
      return res.render("discipulado", { content: content[0] });
    })
  },
  send(req, res) {
    const { name, birth, gender, address, email, phone, feedbackDay, mentorship } = req.body;
    
    const mailOptions = {
      from: "admin@projetopilares.com",
      to: "pilaresdiscipulado@gmail.com",
      replyTo: email,
      subject: `Cadastro de ${name}`,
      text: `${name},${birth},${gender},${address},${email},${phone}`,
      html: `${name}<br>${birth}<br>${gender}<br>${address}<br>${email}<br>${phone}`
    };

    if(mentorship) {
      mailOptions.subject = `Resposta do dia ${feedbackDay}. (${name})`;
      mailOptions.text = mentorship;
      mailOptions.html = mentorship;
    }

    transporter.sendMail(mailOptions, (error) => {
      if(error) throw error;
    });
    return res.redirect("/")
  }
}