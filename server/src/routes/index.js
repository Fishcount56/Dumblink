const express = require('express')
const router = express.Router()
const { auth } = require("../middlewares/auth")
const { uploadLink } = require("../middlewares/uploadLink")
const { register, login } = require("../controller/auth")
const { publishLink } = require("../controller/link")

router.post('/register', register)
router.post('/login', login)

router.post('/publishlink', auth, uploadLink('image'), publishLink)

module.exports = router