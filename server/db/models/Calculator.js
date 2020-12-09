const Sequelize = require('sequelize');
const db = require('../database');

const Calculator = db.define('calculator', {
  calculation: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
});

module.exports = Calculator;
