const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Donation = require('./models/Donation'); // Adjust path as necessary
const ContactUs = require('./models/ContactUs'); // Adjust path as necessary

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('as')); // Assuming your HTML files are in a folder called 'public'

// MongoDB connection
const uri = 'mongodb+srv://231181:<Q2nozDvQ6H82tAMI>@ecoconnect.af9fo.mongodb.net/'; 
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.post('/donations', (req, res) => {
    const newDonation = new Donation(req.body);
    newDonation.save()
        .then(() => res.status(201).send('Donation recorded'))
        .catch(err => res.status(400).send('Error recording donation: ' + err));
});

app.post('/contactUs', (req, res) => {
    const newContact = new ContactUs(req.body);
    newContact.save()
        .then(() => res.status(201).send('Contact message sent'))
        .catch(err => res.status(400).send('Error sending message: ' + err));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
