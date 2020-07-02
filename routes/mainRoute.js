const router = require('express').Router()
const mainController = require('../controllers/mainController')
const courses = require('./courses')
const js = require('../js/main.js')

router.get('/', mainController.view)
router.get('/chatRoom', mainController.chatRoom)

router.get('/dashboard', mainController.dashboard)

router.get('/login', mainController.login)
router.post('/login', mainController.loginPost)



router.use('/courses', courses)

module.exports = router