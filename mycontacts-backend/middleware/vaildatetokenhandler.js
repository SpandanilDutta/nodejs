const asynchandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asynchandler(async (req, res, next) => {
    let token;
    let authHaeader = req.headers.Authorization || req.headers.authorization;
    if (authHaeader && authHaeader.startsWith("Bearer")){
        token = authHaeader.split(" ")[1]; 
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(401);
                throw new Error("User is not authorized");
            }
            req.user = decoded.user;
            next();
        });

        if(!token){
            res.status(401);
            throw new Error("User is not Authorized or token is missing");
        }
    } 
});

module.exports = validateToken;
