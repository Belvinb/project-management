const asyncHandler = require('express-async-handler')
const {User} = require('../models/userModel')
const generateToken = require('../utils/generateToken')
const Razorpay = require("razorpay");
 const instance = new Razorpay({
   key_id: "rzp_test_MkOPieSMPDcB0n",
   key_secret: "fS78jjk0hq9pgZfnX8D3dAyz",
 });


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

const authUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(user && (await user.matchpassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            phone:user.phone,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("Invalid email or password")
    }
})

const createSubscription = asyncHandler(async(req,res)=>{
  console.log("subscription")

    try {
       const subs = await instance.subscriptions.create({
          plan_id: "plan_KAExjVg7nNbbsF",
          customer_notify: 1,
          quantity: 1,
          total_count: 12,
          
          addons: [
          ],
          notes: {
            key1: "value3",
            key2: "value2",
          },
        });

        if(subs){
            const planId = await instance.plans.fetch(subs.plan_id);
            console.log(planId,"plandd")
            console.log(subs)
            res.json(subs);
        }
    } catch (error) {
        console.log(error)
    }
})

const subSuccess = asyncHandler(async(req,res)=>{
  try {
    const crypto = require('crypto')
    
    const { paymentId, subscriptionId, signature } = req.body;
     let hmac = crypto.createHmac("sha256", "fS78jjk0hq9pgZfnX8D3dAyz");
     hmac.update(paymentId + "|" + subscriptionId);
     hmac = hmac.digest("hex");
     if (hmac == signature) {
       console.log("success")
       res.json({msg:"success"})
       
     } else {
       console.log("error")
     }
     

  } catch (error) {
    console.log(error)
    
  }
})

module.exports = { registerUser, authUser, createSubscription, subSuccess };

