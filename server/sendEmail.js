
function sendEmail(to, subject, text) {
   
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({

             host: 'smtp-mail.outlook.com',

             port: 587,

             auth: {

                 user: "giladij@hotmail.com",

                 pass: "pouidyaufdlgtgkd"

             }

     })

    let message = {
        
                 from: "giladij@hotmail.com",
        
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