const { Schema, model } = require('mongoose');


const actionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    equipment: [
        {
            name: {
                type: String
            },
            attack_bonus: {
                type: Number
            },
            damage: {
                type: Number
            }
        }
    ],
    spells: [
        {
            name: {
                type: String
            },
            attack_bonus: {
                type: Number
            },
            save_stat: {
                type: String
            },
            save_dc: {
                type: Number
            },
            damage: {
                type: Number
            }
        }
    ]
})

const Actions = model('Action', actionSchema);

module.exports = Actions;
