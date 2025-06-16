const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req,res,next)=>{
    let token;

    if(req.cookies.token){
        try{
            //get token from the cookie
            token = req.cookies.token;
            //compare the token to the secret
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            //get user from token
            req.user = await User.findById(decoded.id).select('-password');

            next();
        }
        catch(error){
            res.status(401).json({message: 'Not Authorized'});
        }
    }
    if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
}
};

module.exports = { protect };
