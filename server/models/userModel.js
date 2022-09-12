const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

//user signup schema - non-premium
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      require: true,
    },
    password: {
      type: String,
      required: true,
    },
    premium:{
      type:Boolean,
      default:false
    },
    subscriptionId:{
      type:String
    }
  },
  {
    timeStamps: true,
  }
);




userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})

userSchema.methods.matchpassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}



const User = mongoose.model("User", userSchema);


module.exports = { User};