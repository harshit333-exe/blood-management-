const express = require('express');
const router = express.Router();
const Donor = require('../models/donor'); // Adjust path if needed

// POST route for donor registration
router.post('http://localhost:3000/api/register', async (req, res) => {
    const { fullName, email, phone, bloodType } = req.body;

    try {
        const newDonor = new Donor({ fullName, email, phone, bloodType });
        await newDonor.save();
        res.status(201).json({ message: 'Donor registered successfully!' });
    } 
    catch (error) {
        console.error('Error during donor registration:', error);
        res.status(500).json({ message: 'Failed to register donor' });
    }
});

module.exports = router;
