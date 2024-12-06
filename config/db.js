// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://harshit333_:15751575CS@cluster0.5kojb.mongodb.net/blood-management?retryWrites=true&w=majority');
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:',error);
        process.exit(1); // Exit process with failure code
    }
};

module.exports=connectDB;
