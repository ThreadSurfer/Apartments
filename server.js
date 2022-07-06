require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to database"))

app.use(express.json())

const apartmentRouter = require('./server/routes/apartments')

app.use('/apartments', apartmentRouter)

app.listen(3000, () => console.log("Server started"))