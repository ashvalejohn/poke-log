const Sequelize = require('sequelize');

const connection = new Sequelize('poke-log-dev', 'mac.me', '123', {
  dialect: 'postgres'
});


connection.authenticate()
  .then(() => console.log('Connected to the database'))
  .catch(() => console.log('Error: Unable to connect to database'));


module.exports = connection;
