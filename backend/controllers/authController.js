const User = require('../models/User');
const jwt = require('jsonwebtoken');


//generate jwt
const generateToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: '30d'
    });
};

// // @desc    Register user
// // @route   POST /api/auth/register
// // @access  Public

const registerUser = async(req,res)=>{
    try{
        const {name,email,password} = req.body;

        const userExists= await User.findOne({email});
        if(userExists){
            return res.status(400).json({message: 'User already exists'});
        }

        const user = await User.create({
            name,
            email,
            password,
        });

        if(user){
            //generate token
            const token = generateToken(user._id);

            //setting cookie
            res.cookie('token',token,{
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 30 * 24 * 60 * 60 * 1000 //30 days
            })

            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email
            });
        }
    }catch (error){
        res.status(400).json({message: error.message});
    }
};

// // @desc    Login user
// // @route   POST /api/auth/login
// // @access  Public

const loginUser = async(req,res)=>{
    try{
        const{email,password} =req.body;

        const user = await User.findOne({email});

        if(user && (await user.comparePassword(password))){
            const token = generateToken(user._id);

            res.cookie('token',token,{
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
            })

            res.json({
                _id:user._id,
                name: user.name,
                email: user.email
            });
        }else{
            res.status(401).json({message: 'Invalid email or password'});
        }

    }catch(error){
        res.status(401).json({message: error.message});
    }
}


// // @desc    Logout user
// // @route   POST /api/auth/logout
// // @access  Private

const logoutUser = (req,res)=>{
    res.cookie('token', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({ message: 'Logged out successfully' });
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser
};






