const {verify} = require("../utils/jwt.js");

const isAuth = (req, res, next) => {
    try{
        const token = req.headers["authorization"].split(' ')[1];
        console.log(token);
        if(!token) return res.status(401).json({message:'Permission denied is not authorized'})
        const user = verify(token);
        req.user = user;
        next();
    } catch(error) {
        res.status(401).json({message:"Permission denied"})
    }
};

module.exports = isAuth;