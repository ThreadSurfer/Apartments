
function sendEmail(to, id, text) {
  require('dotenv').config()
   
const nodemailer = require('nodemailer');
const username = process.env.CREDENTIALNAME
const password = process.env.PASSWORD

console.log(username)

let transporter = nodemailer.createTransport({

             host: 'smtp.gmail.com',

             port: 465,

             auth: {

                 user: username,

                 pass: password

             }

     })

    let message = {
        
                 from: username,
        
                 to: to,
        
                 subject: "Apartment " + id + " has been purchased",
        
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