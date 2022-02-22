const { Schema, model } = require('mongoose');


const proficiencySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
})

const Proficiencies = model('Proficiency', proficiencySchema);

module.exports = Proficiencies;