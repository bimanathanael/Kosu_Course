const {Student, Instructor} = require(`../models/index`)
const bcrypt = require(`bcrypt`)

class HomeController {
    
    static homepage(req, res) {
        res.render(`homepage`)
    }

    static chatRoom (req, res) {
        res.render("./instructors/chatRoom")
    }

    static registerStudent(req, res) {
        res.render(`./students/registerStudent`)
    }
    
    static createStudent(req, res) {
        let newStudent = {
            email: req.body.email,
            password: req.body.password
        }
        newStudent.full_name = `${req.body.first_name} ${req.body.last_name}`

        Student.create(newStudent)
        .then((data) => {
            res.redirect(`/`)
        })
        .catch((err) => {
            let errors = []
            err.errors.forEach(error => {
                errors.push(error.message)
            })
            res.send(errors)
        })
    }

    static registerTeacher(req, res) {
        res.render(`./instructors/registerInstructor`)
    }
    
    static createTeacher(req, res) {
        let newTeacher = {
            email: req.body.email,
            password: req.body.password
        }
        newTeacher.full_name = `${req.body.first_name} ${req.body.last_name}`

        Instructor.create(newTeacher)
        .then((data) => {
            res.redirect(`/`)
        })
        .catch((err) => {
            let errors = []
            err.errors.forEach(error => {
                errors.push(error.message)
            })
            res.send(errors)
        })
    }

    static login(req, res) {
        res.render(`loginForm`)
    }

    static logout(req, res) {
        req.session.destroy(function(err) {
            if (err) {
                res.send(err)
            } else {
                res.redirect(`/`)
            }
        })
    }

    static loginPost(req, res) {
        Student.findOne({where: {email: req.body.email}})
        .then((data) => {
            if(!data) {
                return Instructor.findOne({where: {email: req.body.email}})
            } else {
                if (bcrypt.compareSync(req.body.password, data.password)){
                    req.session.StudentId = data.id
                    req.session.userType = `student`
                    res.redirect(`/students/${req.session.StudentId}`)
                } else {
                    res.send(`error! cant find ID!`)
                }
            }
        })
        .then((data) => {
            if(!data) {
                res.redirect(`/`)
            } else {
                if (bcrypt.compareSync(req.body.password, data.password)){
                    req.session.InstructorId = data.id
                    req.session.userType = `teacher`
                    res.redirect(`/courses/dashboard`)
                } else {
                    res.send(`error! cant find ID!`)
                }
            }
        })
        .catch((err) => {
            res.send(err)
        })
    }
}

module.exports = HomeController