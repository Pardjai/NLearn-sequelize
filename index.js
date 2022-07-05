const express = require('express')
const sequelize = require('./utils/database')

const Lesson = require('./models/lesson')
const LessonStudentLink = require('./models/lessonStudentLink')
const Student = require('./models/student')
const Passport = require('./models/passport')
const Teacher = require('./models/teacher')
const student = require('./models/student')

const app = express()

const PORT = process.env.PORT || 3000
async function start(){
    try {
        await sequelize.sync()
        app.listen(PORT, () => {console.log(`Server has been started on port: ${PORT}`)})
    } catch (err) {
        console.log(`Started...${err}`);
    }
}

start()

//=== One-To-One
/* 
const studentNames = ['Adam', 'Bulat', 'Clone', 'Dima', 'Elena']
studentNames.forEach(async (name) => {
    try {
        const student = new Student({ name })
        await student.save()
    } catch (err) {
        console.log(err);
    }
})

async function passportGenerator(){
    try {
        const series = Math.ceil(Math.random() * (9999 - 1000) + 1000)
        const number = Math.ceil(Math.random() * (999999 - 100000) + 100000)
        const passport = new Passport({
            number,
            series
        })
        return passport
    } catch (err) {
        console.log(err);
    }
}

Student.findAll()
    .then(studentsList => {
        studentsList.forEach(async (student) => {
            try {
                const passport = await passportGenerator()
                await passport.save()
                await student.setPassport(passport)
            } catch (err) {
                console.log(err);
            }
        });
    })
    .catch(err => console.log(err))
 

Student.findByPk(1)
    .then(student => student.getPassport())
    .then(passport => console.log(passport.number))


Student.findByPk(1)
    .then(async (student) => {
        const passport = await student.getPassport({raw: true})
        console.log(`${student.name} - ${passport.series} ${passport.number}`)
    })
*/

//=
//=== One-To-Many

/* 
const teacherNames = ['Valay Balalay', 'Ivan Fedyakov', 'Robert Mentory']
teacherNames.forEach(async (name) => {
    await Teacher.create({name})
})

Teacher.findByPk(1)
    .then(async (teacher) => {
        await teacher.createLesson({title: 'Math'})
    })
Teacher.findByPk(1)
    .then(async (teacher) => {
        await teacher.createLesson({title: 'Physics'})
    })
Teacher.findByPk(2)
    .then(async (teacher) => {
        await teacher.createLesson({title: 'IT'})
    })
Teacher.findByPk(3)
    .then(async (teacher) => {
        await teacher.createLesson({title: 'Art'})
    }) 

Teacher.findByPk(1)
    .then( async (teacher) => {
        const data = await teacher.getLessons({raw: true, attributes: ['title']}) // [ {}, {} ]
        const lessons = data.map(lessonObj => lessonObj.title)
        console.log(`${teacher.name} - ${lessons}`)
    })
    .catch(err => console.log(err))
*/

//=
//=== Many-To-Many
/* 
Student.findByPk(2)
    .then( async (student) => {
        const lesson = await Lesson.findByPk(3)
        student.addLesson(lesson, {through: {grade: 5}})
    })


Student.findByPk(2)
    .then( async (student) => {
        const lessons = await student.getLessons()
        for (let lesson of lessons){
            console.log(`${student.name} - ${lesson.title}(${lesson.LessonStudentLink.grade})`);
        } 
    })


Student.findByPk(2)
    .then( async (student) => {
        const lessons = await student.getLessons({where: {title: 'IT'}})
        await lessons[0].LessonStudentLink.destroy()
    })
 */