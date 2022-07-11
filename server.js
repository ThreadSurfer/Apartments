require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }
  app.use(allowCrossDomain);


const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
const cors = require('cors')

db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to database"))

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors())

const apartmentRouter = require('./server/routes/apartments')

app.use('/apartments', cors(), apartmentRouter)

app.listen(3000, () => console.log("Server started"))
