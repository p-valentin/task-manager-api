 const jwk = require('jsonwebtoken')
 const User = require('../models/user')
 require('dotenv').config({path:__dirname+'/.env'})

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwk.verify(token, process.env.SECRET_TOKEN)
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token})

        if(!user) {
            throw new Error()
        }
        
        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({error: 'please authenticate'})
    }
}

module.exports = auth