const {Student, Course, Chapter, Instructor, StudentCourse} = require(`../models/index`)


class StudentController {
    static homepage(req, res) {
        Student.findByPk(+req.params.id, {include: Course})
        .then((data) => {
            res.render(`./students/studentHome`, {data})
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static chatRoom (req, res) {
        let id = +req.params.id
        res.render(`./students/chatRoom`, {id})
    }

    static addCourse(req, res) {
        let id = +req.params.id
        let studentData;
        Student.findByPk(id)
        .then((data) => {
            studentData = data 
            return Course.findAll()
        })
        .then((data) => {
            res.render(`./students/addCourse`, {data, studentData})
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static createCourse(req, res) {
        let newCourse = {
            StudentId: +req.params.id,
            CourseId: +req.body.CourseId
        }
        StudentCourse.create(newCourse)
        .then((data) => {
            res.redirect(`/students/${data.StudentId}`)
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static delete(req, res) {
        let deletedCourse = {
            CourseId: +req.params.CourseId,
            StudentId: +req.params.StudentId
        }
        StudentCourse.destroy({where: {CourseId: deletedCourse.CourseId, StudentId: deletedCourse.StudentId}})
        .then((data) => {
            res.redirect(`/students/${deletedCourse.StudentId}`)
        })
        .catch((err) => {
            res.send(err)
        })
    
    }

    static courseList(req, res) {
        const StudentId = req.session.StudentId
        Course.findAll({include: Instructor})
        .then((data) => {
            res.render(`./students/courseList`, {data, StudentId})
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static chapterList(req, res) {
        let id = +req.params.id
        const StudentId = req.session.StudentId

        Course.findByPk(id, {include: [Instructor, Chapter]})
        .then((data) => {
            res.render(`./students/chapterList`, {data, StudentId})
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static studentChapterList(req, res) {
        let id = +req.params.id
        const StudentId = req.session.StudentId
        Course.findByPk(id, {include: [Instructor, Chapter]})
        .then((data) => {
            res.render(`./students/studentChapterList`, {data,StudentId})
        })
        .catch((err) => {
            res.send(err)
        })
    }
}

module.exports = StudentController