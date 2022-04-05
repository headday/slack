const {Sequelize} = require('sequelize');

module.exports = new Sequelize({
  host: 'localhost',
  dialect: "mysql",
  database:"slack",
  username:"root",
  password:""
});
