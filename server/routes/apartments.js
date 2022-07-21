const express = require('express')
const router = express.Router()
const Apartment = require('../models/apartmentModel')
const sendEmail = require('../sendEmail')

//get all

router.get('/', async (req, res) => {
    try {
        let apartments = await Apartment.find()
        res.status(200).json(apartments)
    } catch(err) {
        res.json(500).json({ message: err.message })
    }

})

//get one appartment by id
router.get('/:id', getApartment, (req, res) => {
    try {
        res.json(res.apartment)
    } catch(err) {
        // res.status(500).json({ message: err.message })
    }
})

// get one appartment by unit number (1 - 6)
router.get('/:num', getApartment, async(req, res) => {
    try {

        if(apartment.length == 0)
            return res.status(404).json( { message: "Apartment not yet registered " })
        else res.status(200).json(apartment)
    }
    catch(err) {
        res.status(500).json({ message : err.message })
    }
    
})

//create one

router.post('/', async(req, res) => {
    let newApartment = new Apartment( {
        number: req.body.number,
        cost: req.body.cost,
        purchaseDate: req.body.purchaseDate ? req.body.purchaseDate : console.log('skip purchaseDate'),
        purchaser: req.body.purchaser ? req.body.purchaser : console.log('skip purhcaser')
    })
    try {
        await newApartment.save()
        res.status(201).json(newApartment)

    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

//delete one

router.delete('/:number', async(req, res) => {

    try {
        await Apartment.deleteMany({ number: req.params.number })
        res.json({ message: "Apartment " + req.params.number +" deleted." })
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
    

})

// Delete all. Used for testing purposes.

router.delete('/', async(req, res) => {
    try {
        await Apartment.deleteMany()
        res.send("all entries deleted")
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
})

//email post for potential future email use

router.post('/sendMail/:to/:id/', async (req, res) => {
    try {
        await sendEmail(req.params.to, req.params.id, req.body.message)
        res.status(200).json({ message: req.params.message })
    } catch(err) {
        res.status(400).json({ message: err.message })
    }

})

//middleware

async function getApartment(req, res, next) {

    let apartment
    try {
         apartment = await Apartment.findOne({number: req.params.id})
        if(apartment == null || apartment.length == 0)
            res.status(404).json({ message: "Apartment not found"})
    } catch(err) {
        res.status(500).json({ message: err.message })
    }

    res.apartment = apartment
    next()
}

module.exports = router