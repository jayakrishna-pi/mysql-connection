const express = require('express')
const dotenv = require('dotenv')
const initializeAndConnectDB = require('./database/connection')
const cors = require('cors')
const router = require('./routers/user.routers')

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())
app.use('/', router)


// initializeAndConnectDB()

const port = process.env.PORT
app.listen((8081, () => {
    console.log("Server is running at", process.env.PORT )
}))

