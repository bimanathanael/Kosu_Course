const  { Course, Instructor, Chapter, Student } = require('../models/index')

class CoursesController{

    static dashboard (req, res){
        let id = +req.params.id
        Instructor.findByPk(id)
        .then((data) => {
            res.render("./instructors/dashboard", {data})
        })
    }

    static view (req, res){
        Course.findAll({include : [Instructor]})
            .then( data => {
                res.render("./instructors/manageCourses", {data})
            })
            .catch( err => {
                res.send(err)
            })
    }

    static showCourse (req, res){
        const requestedId = req.params.id
        Course.findByPk(requestedId,{include : [Instructor, Chapter, Student ]})
            .then( data => {
                console.log(data)
                res.render("./instructors/showCourse", {data})
            })
            .catch( err => {
                res.send(err)
            })
    }

    static addCourse (req, res){
        Instructor.findAll()
            .then( instructor => {
                let error = req.app.locals.error
                delete req.app.locals.error
                res.render("./instructors/addCourse", {instructor, error})
            })
            .catch( err => {
                res.send(err)
            })
    }

    static addCoursePost (req, res) {
        const newCourse = {
            name : req.body.name,
            description : req.body.description,
            InstructorId : req.body.instructor
        }
        Course.create(newCourse)
            .then( data => {
                res.redirect('/courses')
            })
            .catch( err => {
                let errors = []
                err.errors.forEach(error => {
                    errors.push(error.message)
                })
                req.app.locals.error = errors
                res.redirect(`/courses/addCourse`)
            })
    }

    static editCourse (req, res){
        const selectedId = req.params.id
        Course.findByPk(selectedId, {include : [Chapter]})
            .then( course => {
                Instructor.findAll() 
                    .then( instructor =>{
                        let error = req.app.locals.error
                        let warning = req.app.locals.warning
                        delete req.app.locals.error
                        delete req.app.locals.warning
                        res.render('./instructors/editCourse' , { course , instructor, error, warning})
                    })
                    .catch( err => {
                        res.send(err)
                    })
            })
            .catch( err => {
                res.send(err)
            })
    }

    static editCoursePost (req, res) {
        const editedCourse = {
            id : req.params.id,
            name : req.body.name,
            description : req.body.description,
            InstructorId : req.body.instructor
        }
        Course.update(editedCourse, { 
            where : {
                id : editedCourse.id
            }
        })
            .then( data => {
                res.redirect('/courses')
            })
            .catch( err => {
                let errors = []
                err.errors.forEach(error => {
                    errors.push(error.message)
                })
                req.app.locals.error = errors
                res.redirect(`/courses/editCourse/${editedCourse.id}`)
            })
    }

    static deleteCourse (req, res) {
        const deletedId = req.params.id
        Course.destroy({ 
            where: {
                id : deletedId
            }
        })
            .then( data => {
                res.redirect('/courses')
            })
            .catch( err => {
                res.send(err)
            })
    }

    static addChapter (req, res) {
        const addNewChapter = {
            name : req.body.name,
            content : req.body.content,
            CourseId : +req.params.id
        }
        Chapter.create(addNewChapter)
            .then( data => {
                res.redirect(`/courses/editCourse/${req.params.id}`)
            })
            .catch( err => {
                let errors = []
                err.errors.forEach(error => {
                    errors.push(error.message)
                })
                req.app.locals.warning = errors
                res.redirect(`/courses/editCourse/${req.params.id}`)
            })
    }
}

module.exports = CoursesController