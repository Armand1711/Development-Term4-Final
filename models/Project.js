// models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true }
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
