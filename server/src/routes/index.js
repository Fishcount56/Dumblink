const express = require('express')
const router = express.Router()
const { auth } = require("../middlewares/auth")
const { uploadLink } = require("../middlewares/uploadLink")
const { register, login, checkAuth, getUser } = require("../controller/auth")
const { publishLink, getLink, getLinks, userLinks } = require("../controller/link")

router.post('/register', register)
router.post('/login', login)
router.get('/checkAuth', auth, checkAuth)
router.get('/user', auth, getUser)

router.post('/publishlink', auth, uploadLink('image'), publishLink)
router.get('/getSingleLink/:uniqueLink', getLink)
router.get('/getLinks', getLinks)
router.get('/userLinks', auth, userLinks)

module.exports = router