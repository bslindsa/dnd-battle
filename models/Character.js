const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PC extends Model {}

PC.init(
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
        total_level: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        hit_points: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        armor_class: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        dexterity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        constitution: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        intelligence: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        wisdom: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        charisma: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        proficiency_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'proficiencies',
                key: 'id',
            },
        },
        actions_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'actions',
                key: 'id',
            },
        },
        equipment_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'equipment',
                key: 'id',
            },
        },
        spell_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'spell',
                key: 'id',
            },
        },
        class_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'class',
                key: 'id',
            },
        },
        subclass_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'subclass',
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

module.exports = PC;
