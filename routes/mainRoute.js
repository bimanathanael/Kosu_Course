const router = require('express').Router()
const mainController = require('../controllers/mainController')
const courses = require('./courses')

router.get('/', mainController.view)

router.get('/dashboard', mainController.dashboard)

router.get('/login', mainController.login)
router.post('/login', mainController.loginPost)

router.use('/courses', courses)

module.exports = router