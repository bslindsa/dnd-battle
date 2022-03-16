const mongoose = require('mongoose');

// let userDB = new mongoose();
// let fiveEDB = new mongoose();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dndbattle', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// fiveEDB.connect(`https://www.dnd5eapi.co/graphql`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

module.exports = mongoose.connection;
