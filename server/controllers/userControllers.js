const asyncHandler = require('express-async-handler')
const {User} = require('../models/userModel')
const generateToken = require('../utils/generateToken')


const registerUser = asyncHandler(async(req,res)=>{
    const{name,email,phone,password} = req.body
    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error("Email already registered, try logging in")
    }


        const user = await User.create({
          name,
          email,
          phone,
          password,
          
        });
   
    if(user){
        console.log(user,'user')
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            phone:user.phone,
            age:user.age,
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("some error occured")
    }
})

module.exports = { registerUser};

