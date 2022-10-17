const groupChat = require("../models/chatModel")
const mongoose = require("mongoose")

const addChat = async(req,res)=>{
    const {chatId,senderId,senderName,text} = req.body
    try {
        const newChat = await groupChat.create({
            chatId,
            senderId,
            senderName,
            text,
        })
        res.status(200).json(newChat)
    } catch (error) {
        console.log(error)
    }
}

const getChat = async(req,res)=>{
    const {projectId} = req.params
    try {
        const chatDetails = await groupChat.find({"chatId":projectId})
        res.status(200).json(chatDetails)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {addChat,getChat}