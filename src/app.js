const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'})
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app