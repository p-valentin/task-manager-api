const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'})

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
})
