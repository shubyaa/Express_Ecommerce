const userModel = require('./models/UserModel');
const jwt = require('jsonwebtoken');
const isAuthenticated = async (req,res,next)=>{
    try {
        const {token} = req.cookies;
        if(!token){
            return next('Please login to access the data');
        }
        const verify = await jwt.verify(token,process.env.SECRET_KEY);
        req.user = await userModel.findById(verify.id);
        next();
    } catch (error) {
       return next(error); 
    }
}

module.exports = isAuthenticated;