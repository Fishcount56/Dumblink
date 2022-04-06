const express = require('express')
const router = express.Router()
const { auth } = require("../middlewares/auth")
const { register, login } = require("../controller/auth")

router.post('/register', register)
router.post('/login', login)

module.exports = router