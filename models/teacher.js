const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const Lesson = require('./lesson')

const teacher = sequelize.define('Teacher', {
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

teacher.hasMany(Lesson, { onDelete: 'cascade' })

module.exports = teacher