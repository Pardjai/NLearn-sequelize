const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const passport = sequelize.define('Passport', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    number: {
        type: Sequelize.STRING
    },
    series: {
        type: Sequelize.INTEGER
    }
})

module.exports = passport