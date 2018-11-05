var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ls04af@gmail.com',
    pass: 'Angelina2040Nando'
  }
});

var mailOptions = {
  from: 'ls04af@gmail.com',
  to: 'ls04af@gmail.com',
  subject: 'Enviando este email atravéz da minha aplicação',
  text: 'teste bem feito'
};

module.exports = {
  sendEmail : function () {
      transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}
