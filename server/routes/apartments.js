const express = require('express')
const router = express.Router()
const Apartment = require('../models/apartmentModel')
const sendEmail = require('../sendEmail')

router.get('/', async (req, res) => {
    try {
        let apartments = await Apartment.find()
        res.status(200).json(apartments)
    } catch(err) {
        res.json(500).json({ message: err.message })
    }

})

router.post('/', async(req, res) => {
    let newApartment = new Apartment( {
        number: req.body.number,
        cost: req.body.cost,
        purchaseDate: req.body.purchaseDate ? req.body.purchaseDate : null
    })
    try {
        await newApartment.save()
        res.status(201).json(newApartment)

    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

router.delete('/', async(req, res) => {
    try {
        await Apartment.deleteMany()
        res.send("all entries deleted")
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/sendMail/:to/:subject/:message', async (req, res) => {
    try {
        await sendEmail(req.params.to, req.params.subject, req.params.message)
        res.status(200).json({ message: req.params.message })
    } catch(err) {
        res.status(400).json({ message: err.message })
    }

})

module.exports = router