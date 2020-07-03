const router = require('express').Router()
const coursesController = require('../controllers/coursesController')

function checkSessionInstructor(req, res, next) {
    if (req.session.InstructorId) {
        next()
     } else {
         res.redirect(`/`)
     } 
}

router.use(checkSessionInstructor)

router.get('/chatRoom', coursesController.chatRoom)

router.get('/dashboard', coursesController.dashboard)   

router.get('/', coursesController.view)

router.get('/addCourse', coursesController.addCourse)

router.post('/addCourse', coursesController.addCoursePost)

router.get('/showCourse/:id', coursesController.showCourse)

router.get('/editCourse/:id', coursesController.editCourse)

router.post('/editCourse/:id', coursesController.editCoursePost)

router.post('/addChapter/:id', coursesController.addChapter)

router.get('/deleteCourse/:id', coursesController.deleteCourse)

module.exports = router