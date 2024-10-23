// db.js
const mongoose = require('mongoose');

const uri = 'mongodb+srv://231181:<Q2nozDvQ6H82tAMI>@ecoconnect.af9fo.mongodb.net/'; 

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
