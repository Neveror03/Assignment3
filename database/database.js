// Using Node.js `require()`
const mongoose = require('mongoose');

// Using ES6 imports
import mongoose from 'mongoose';

const connectDatabase = () => {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log('Connected!'));
};

const Schema = mongoose.Schema;

const StudentModel = new Schema({
    name: { type: String },
    studentCode: { type: String },
    isActive: { type: Boolean }
});

const Student = mongoose.model('Student', StudentModel);

module.exports = {
    connectDatabase,
    StudentMode
};