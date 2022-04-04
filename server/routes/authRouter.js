const Router = require('express')
const router = new Router();
const controller = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleWare')
const {check} = require('express-validator')

router.post('/registration',[
    check('login', "user name is not be empty").notEmpty(),
    check('name', "user name is not be empty").notEmpty(),
    check('password',"Password must be longer than 10 characters").isLength({min:5,max:20})
],controller.registration)
router.post('/login',controller.login)
router.post('/logout',controller.logout)
router.get('/users',authMiddleware,controller.getUsers)


module.exports = router
