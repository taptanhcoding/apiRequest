const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/siteController')

router.get('/', newsController.index) 


module.exports = router