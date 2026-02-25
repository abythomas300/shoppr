const jwt = require('jsonwebtoken')

async function verifyToken(token) {
    try{
        // When no token data is found
        if(!token)
            return false

        // When token is found
        const result = jwt.verify(token, process.env.JWT_SECRET_KEY)
        return result
        
    }catch(error){
        console.log("Invalid / Expired Token")
        return false
    }
}

module.exports = {verifyToken}