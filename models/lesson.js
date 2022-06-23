const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const lesson = sequelize.define('Lesson', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    title: {
        type: Sequelize.STRING
    }
})

module.exports = lesson