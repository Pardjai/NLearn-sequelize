const Sequelize = require('sequelize')

const DB_NAME = 'nlearn_sequelize'
const DB_USER = 'root'
const DB_PASSWORD = 'secret'

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize