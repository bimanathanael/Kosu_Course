const  { Course, Instructor, Chapter, Student } = require('../models/index')

class CoursesController{
    static view (req, res){
        Course.findAll({include : [Instructor]})
            .then( data => {
                res.render("manageCourses", {data})
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
                res.render("showCourse", {data})
            })
            .catch( err => {
                res.send(err)
            })
    }

    static addCourse (req, res){
        Instructor.findAll()
            .then( instructor => {
                res.render("addCourse", {instructor})
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
                res.send(err)
            })
    }

    static editCourse (req, res){
        const selectedId = req.params.id
        Course.findByPk(selectedId, {include : [Chapter]})
            .then( course => {
                Instructor.findAll() 
                    .then( instructor =>{
                        res.render('editCourse' , { course , instructor})
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
                res.send(err)
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
            CourseId : req.params.id
        }
        Chapter.create(addNewChapter)
            .then( data => {
                res.redirect(`/courses/editCourse/${req.params.id}`)
            })
            .catch( err => {
                res.send(err)
            })
    }
}

module.exports = CoursesController