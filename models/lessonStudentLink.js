const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
const Student = require('./student')
const Lesson = require('./lesson')

const lessonStudentLink = sequelize.define('LessonStudentLink', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    grade: {
        type: Sequelize.INTEGER
    }
})

Student.belongsToMany(Lesson, {through: lessonStudentLink})
Lesson.belongsToMany(Student, {through: lessonStudentLink})

module.exports = lessonStudentLink