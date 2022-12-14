const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/handleChannelController')



router.get('/add', newsController.add)
router.post('/store', newsController.store)
router.get('/list', newsController.list)
router.get('/:detail', newsController.get)
router.get('/', newsController.index) 


module.exports = router