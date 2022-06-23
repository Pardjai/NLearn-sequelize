const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const Passport = require('./passport')

const student = sequelize.define('Student', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    name: {
        type: Sequelize.STRING
    }
})

student.hasOne(Passport)

module.exports = student