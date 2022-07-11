
function sendEmail(to, subject, text) {
   
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({

             host: 'smtp-relay.sendinblue.com',

             port: 587,

             auth: {

                 user: "wulu1919@gmail.com",

                 pass: "kBDImfN4FPHRzJ8S"

             }

     })

    let message = {
        
                 from: "wulu1919@gmail.com",
        
                 to: to,
        
                 subject: subject,
        
                 text: text
        
            }
        
            transporter.sendMail(message, (err, info) => {
        
                 if (err) {
        
                   console.log(err)
        
                 } else {
        
                   console.log(info);
        
                 }
                })
            }

module.exports = sendEmail