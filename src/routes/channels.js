const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/handleDataController')

router.get('/:detail', newsController.get)
router.get('/', newsController.index) 


module.exports = router