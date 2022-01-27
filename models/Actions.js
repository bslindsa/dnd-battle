const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Actions extends Model { }

Actions.init(
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
        weapon: {
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'equipment',
                key: 'id',
            },
        },
        spell: {
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'spell',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'action',
    }
);

module.exports = Actions;
