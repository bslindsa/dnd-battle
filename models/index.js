const User = require('./User');
const PC = require('./Character');
const Equipment = require('./Equipment');
const Actions = require('./Actions');
const Proficiencies = require('./Proficiencies');


User.hasMany(PC, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

PC.belongsTo(User, {
  foreignKey: 'user_id'
});

PC.hasMany(Proficiencies, {
  foreignKey: 'character_id',
  onDelete: 'SET NULL'
});

PC.hasMany(Equipment, {
  foreignKey: 'character_id',
  onDelete: 'SET NULL'
});

PC.hasMany(Actions, {
  foreignKey: 'character_id',
  onDelete: 'SET NULL'
})

module.exports = { User, Project };
