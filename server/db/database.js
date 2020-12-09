const Sequelize = require('sequelize');
const pkg = require('../../package.json')

// The sole purpose of this module is to establish a connection to your
// Postgres database by creating a Sequelize instance (called `db`).
const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${pkg.name}`, {
  logging: false // so we don't see all the SQL queries getting made
});

module.exports = db;
