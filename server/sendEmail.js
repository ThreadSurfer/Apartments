
function sendEmail(to, id, text) {
  require('dotenv').config()
   
const nodemailer = require('nodemailer');
const username = process.env.USERNAME

console.log(username)

let transporter = nodemailer.createTransport({

             host: 'smtp.gmail.com',

             port: 465,

             auth: {

                 user: process.env.USERNAME,

                 pass: process.env.PASSWORD

             }

     })

    let message = {
        
                 from: process.env.USER,
        
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