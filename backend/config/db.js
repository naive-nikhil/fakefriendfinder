const mongoose = require('mongoose');
const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/fakefriends';

const connectDB = async ()=>{
    try {
        await mongoose.connect(DB_URI);
        console.log(`MongoDB Connected: ${mongoose.connection.host}`);
    } catch (error) {
        console.error(`Error Connecting to Database: ${error.message}`);
        process.exit(1);
        
    }
}

module.exports = connectDB;