const nodemailer = require("nodemailer");



function mailNewUser(email) {
 
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "fhoman@gmail.com", // generated ethereal user
          pass: process.env.GMAIL, // generated ethereal password
        },
      });

      // send mail with defined transport object
      let mailOptions = transporter.sendMail({
        from: "Pianolessen Amsterdam", // sender address
        to: email, // list of receivers
        subject: "Sign up for a account at Pianolessen Amsterdam", // Subject line
        text: ``, // plain text body
        html: `This is a test`, // html body
      });

      transporter.sendMail(mailOptions, function (err, info) {
        if (err) console.log(err);
        else console.log(info);
      });
  
}

module.exports = mailNewUser;