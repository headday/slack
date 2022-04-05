const Router = require('express')
const router = new Router();
const controller = require('../controllers/channelController')
const authMiddleware = require('../middleware/authMiddleWare')
const {check} = require('express-validator')

router.post('/add',authMiddleware,controller.add)
router.post('/delete',authMiddleware, controller.delete)

module.exports = router