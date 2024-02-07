// file: db.js
const mongoose = require('mongoose');

// Thay thế URI kết nối này bằng URI kết nối thực tế của bạn
const uri = 'mongodb+srv://dannynguyen:123@cluster0.psrnfci.mongodb.net/?myShopretryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
