const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]

    if(!token) {
        return res.status(401).send("You are not authorized.")
    }

    jwt.verify(token, process.env.SECRET_KEY, async(err, decoded) => {
        if(decoded) {
            const id = decoded.userId
            req.userId = id
            next()
        }
    })
}

module.exports = authorization