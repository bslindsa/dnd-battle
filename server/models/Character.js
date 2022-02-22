const { Schema, model } = require('mongoose');
const { INTEGER } = require('sequelize');

const characterSchema = new Schema ({
    name: {
        type: String,
        required: 'Your character needs a name',
        trim: true
    },
    hit_points: {
        type: Number,
        required: true
    },
    armor_class: {
        type: Number,
        required: true
    },
    strength: {
        type: Number,
        required: true
    },
    dexterity: {
        type: Number,
        required: true
    },
    constitution: {
        type: Number,
        required: true
    },
    intelligence: {
        type: Number,
        required: true
    },
    wisdom: {
        type: Number,
        required: true
    },
    charisma: {
        type: Number,
        required: true
    },
    proficiencies: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Proficiencies'
        }
    ],
    actions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Actions'
        }
    ],
    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Actions'
        }
    ],
    equipment: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Actions'
        }
    ],
    spells: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Actions'
        }
    ]

})

const Character = model('Character', characterSchema);

module.exports = Character;
