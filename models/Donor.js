const mongoose = require('mongoose');
const DonorSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        //unique: true,  // Ensure this line is uncommented to enforce unique emails
    },
    phone:{
        type: String,
        required: true,
    },
    bloodType:{
        type: String,
        required: true,
    },
});

module.exports=mongoose.model('../models/donor',DonorSchema);

