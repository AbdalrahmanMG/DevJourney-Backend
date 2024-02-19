const jwt = require("jsonwebtoken");

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @description it verify or check if this is valid token from Admin or User
 * @returns 
 */
function verifyToken(req,res,next)
{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(!token) return res.status(401).json({message:"Access Denied. No Token provided"})
    try {
        const decodedToken = jwt.verify(token ,process.env.PRIVATE_KEY_TOKEN);
        req.userOrAdmin = decodedToken;
        next();
    } catch {
        res.status(400).json({message:"bad requset-verifyToken"})
    }
}

/**
 * 
 * @param {string} role 
 * @description check the role of user or admin and it has default parameter with admin 
 * @returns it goes next in middleware for next operation
 */
function checkRole(role="admin")
{
    return function(req,res,next){
        try {
            let myStorageRole = req.userOrAdmin.role;

            if(role !==  myStorageRole) return res.status(403).json({message:"You aren't Authorization"})
            next();
        } catch {
            res.status(400).json({message:"bad request"})
        }
    }
}

module.exports = {verifyToken , checkRole};