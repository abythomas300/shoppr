const jwt = require('jsonwebtoken')

async function verifyToken(req, res, next) {

    try{
        // Check whether jwt field exists in request cookie header
        if(!req.cookies.jwt) {
            console.log("JWT Token not found") 
            return res.status(401).json({message: 'Token not found'})
        }

        // Check whether existing jwt token is valid
        const result = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET_KEY)
        req.user = result
        console.log("JWT Token Verfication Success") 
        next()
    }catch(error){
        // Token is expired
        if(error.name === 'TokenExpiredError') {
            console.log("Token Expired")
            return res.status(401).json({message: 'Token Expired'})
        }
        console.log("JWT Token Verfication Failed, reason: ", error) 
        return res.status(401).json({message: 'Token verification failed'})
    }
}

module.exports = verifyToken