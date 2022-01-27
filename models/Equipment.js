const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const PC = require('./Character');

class Equipment extends Model {}

Equipment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ac_bonus: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        damage: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        damage_type: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        action_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'action',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'player_character',
    }
);

module.exports = Equipment;