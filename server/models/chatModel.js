const mongoose = require("mongoose")

const chatSchema = new mongoose.Schema(
    {
        chatId:{
            type:String,
            required:true,
        },
        senderId:{
            type:String,
            required:true
        },
        senderName:{
            type:String,
            required:true
        },
        text:{
            type:String
        }

    },
    {
        timestamps:true
    }
)

const groupChat = mongoose.model("groupChat", chatSchema);

module.exports = groupChat