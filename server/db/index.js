// This module is to bring your Sequelize instance (`db`) together
// with your models.

const db = require('./database');
const Calculator = require('./models/Calculator');

module.exports = {
  db,
  Calculator,
};