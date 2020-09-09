const express = require('express')
const urlsController = require('../app/controllers/urlsController')

const router = express.Router()

router.get('/urls', urlsController.list)
router.post('/urls', urlsController.create)
router.get('/urls/:id', urlsController.show)
router.put('/urls/:id', urlsController.update)
router.delete('/urls/:id', urlsController.destroy)
router.get('/:hash', urlsController.getOriginalUrl)

module.exports = router