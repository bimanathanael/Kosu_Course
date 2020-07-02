const router = require('express').Router()
const coursesController = require('../controllers/coursesController')
const HomeController = require('../controllers/HomeController')

function checkSessionInstructor(req, res, next) {
    if (req.session.InstructorId) {
        next()
     } else {
         res.send(`unauthorized!`)
     } 
}

router.use(checkSessionInstructor)

router.get('/chatRoom/:id', HomeController.chatRoom)

router.get('/dashboard/:id', coursesController.dashboard)   

router.get('/', coursesController.view)

router.get('/addCourse', coursesController.addCourse)

router.post('/addCourse', coursesController.addCoursePost)

router.get('/showCourse/:id', coursesController.showCourse)

router.get('/editCourse/:id', coursesController.editCourse)

router.post('/editCourse/:id', coursesController.editCoursePost)

router.post('/addChapter/:id', coursesController.addChapter)

router.get('/deleteCourse/:id', coursesController.deleteCourse)

module.exports = router