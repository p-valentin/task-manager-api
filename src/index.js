const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'})
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Running on port ' + port)
})

console.log(__dirname)