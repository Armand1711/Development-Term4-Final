const mongoose = require('mongoose');

// Make sure the password is correct and URL-encoded if it contains special characters.
const uri = 'mongodb+srv://231181:ECO@Eduan@1711@ecoconnect.af9fo.mongodb.net/EcoConnect?retryWrites=true&w=majority';

mongoose.connect(uri)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
