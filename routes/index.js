const router = require(`express`).Router()
const HomeController = require(`../controllers/HomeController`)
const studentRoutes = require(`./students`)
const courseRoutes = require('./courses')


router.get(`/`, HomeController.homepage)
router.get(`/registerStudent`, HomeController.registerStudent)
router.post(`/registerStudent`, HomeController.createStudent)
router.get(`/registerInstructor`, HomeController.registerTeacher)
router.post(`/registerInstructor`, HomeController.createTeacher)
router.get(`/login`, HomeController.login)
router.post(`/login`, HomeController.loginPost)
router.post(`/logout`, HomeController.logout)
router.use('/courses', courseRoutes)
router.use(`/students`, studentRoutes)


module.exports = router