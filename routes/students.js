const router = require(`express`).Router()
const StudentController = require(`../controllers/StudentController`)
 
function checkSessionStudent(req, res, next) {
    if (req.session.StudentId && req.session.userType === `student`) {
        next()
     } else {
         res.redirect(`/`)
     } 
}

router.use(checkSessionStudent)

router.get('/chatRoom/:id', StudentController.chatRoom)

router.get(`/courseList`, StudentController.courseList)

router.get(`/courses/add/:id`, StudentController.addCourse)

router.post(`/courses/add/:id`, StudentController.createCourse)

router.get(`/chapterList/:id`, StudentController.chapterList)

router.get(`/activeCourse/:id`, StudentController.studentChapterList)

router.get(`/course/delete/:CourseId/:StudentId`, StudentController.delete)

router.get(`/:id`, StudentController.homepage)


module.exports = router