const {Student, Instructor} = require(`../models/index`)
const bcrypt = require(`bcrypt`)

class HomeController {
    
    static homepage(req, res) {
        res.render(`homepage`)
    }

    static chatRoom (req, res) {
        let id = +req.params.id 
        console.log(req.session.InstructorId)
        Instructor.findByPk(id) 
        .then((data) => {
            res.render(`./instructors/chatRoom`, {data})
        })
    }

    static registerStudent(req, res) {
        let error = req.app.locals.error
        delete req.app.locals.error
        res.render(`./students/registerStudent`, {error})
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
            req.app.locals.error = errors
            res.redirect(`/registerStudent`)
        })
    }

    static registerTeacher(req, res) {
        let error = req.app.locals.error
        delete req.app.locals.error
        res.render(`./instructors/registerInstructor`, {error})
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
            req.app.locals.error = errors
            res.redirect(`/registerInstructor`)
        })
    }

    static login(req, res) {
        let error = req.app.locals.error
        delete req.app.locals.error
        res.render(`loginForm`, {error})
    }

    static logout(req, res) {
        req.session.destroy(function(err) {
            if (err) {
                res.render(`error`, {err})
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
                    req.app.locals.error = `Invalid Password!`
                    res.redirect(`/login`)
                }
            }
        })
        .then((data) => {
            if(!data) {
                req.app.locals.error = `Invalid Email or Password!`
                res.redirect(`/login`)
            } else {
                if (bcrypt.compareSync(req.body.password, data.password)){
                    req.session.InstructorId = data.id
                    req.session.userType = `teacher`
                    res.redirect(`/courses/dashboard/${req.session.InstructorId}`)
                } else {
                    req.app.locals.error = `Invalid Password!`
                    res.redirect(`/login`)
                }
            }
        })
        .catch((err) => {
            res.send(err)
        })
    }
}

module.exports = HomeController