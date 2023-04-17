const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tucorreo@gmail.com',
      pass: 'tucontraseña'
    }
  });
  const mailOptions = {
    from: 'tucorreo@gmail.com',
    to: 'destinatario@example.com',
    subject: 'Prueba de correo electrónico',
    text: 'Este es un correo electrónico de prueba enviado desde Node.js'
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
    }
  });
      