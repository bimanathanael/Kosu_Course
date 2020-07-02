const router = require(`express`).Router()
const StudentController = require(`../controllers/StudentController`)
const HomeController = require(`../controllers/HomeController`)
 
function checkSessionStudent(req, res, next) {
    if (req.session.StudentId && req.session.userType === `student`) {
        next()
     } else {
         res.send(`unauthorized!`)
     } 
}

router.use(checkSessionStudent)

router.get('/chatRoom', HomeController.chatRoom)

router.get('/chatRoom', HomeController.chatRoom)

router.get(`/courseList`, StudentController.courseList)

router.get(`/courses/add/:id`, StudentController.addCourse)

router.post(`/courses/add/:id`, StudentController.createCourse)

router.get(`/chapterList/:id`, StudentController.chapterList)

router.get(`/activeCourse/:id`, StudentController.studentChapterList)

router.get(`/course/delete/:CourseId/:StudentId`, StudentController.delete)

router.get(`/:id`, StudentController.homepage)


module.exports = router