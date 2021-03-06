require('dotenv').config()
const express = require("express")
const app = express()
const port = 5000
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./src/routes')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/upload', express.static('upload'))

app.use('/dumblink/api/', router)

app.listen(port, () => console.log(`listen to port ${port}`))