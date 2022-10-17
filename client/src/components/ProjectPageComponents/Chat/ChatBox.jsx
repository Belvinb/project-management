import React, { useEffect, useRef, useState } from "react";
import "./ChatBox.css";
import api from "../../../api/axiosConfig";
import { useLocation } from "react-router-dom";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";
import { useSelector } from "react-redux";
import { socket } from "../../../utils/socket";
import ScrollToBottom from "react-scroll-to-bottom";

const ChatBox = () => {
  let projectId = JSON.parse(localStorage.getItem("projectId"));
  let user = JSON.parse(localStorage.getItem("userToken"));
  let location = useLocation();
  const [messages, setmessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [socketMessage,setSocketMessage] = useState([])

  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };
  useEffect(() => {
    async function getChats() {
      return await api.get(`/getChatDetails/${projectId}`).then((response) => {
        console.log(response.data, "Response");
        setmessages(response.data);
      });
    }
    getChats();
  }, [location, socketMessage]);

  useEffect(() => {
    var room = projectId;
    socket.emit("room", room);
  }, []);

  useEffect(() => {
     socket.on("message", function (data) {
       setSocketMessage(data);
     });
  }, [socket])
  


  const handleSend = async (e) => {
    e.preventDefault();
    const message = {
      chatId: projectId,
      senderId: user._id,
      senderName: user.name,
      text: newMessage,
    };

    //send message to data base
    try {
      const { data } = await api.post("/addChat", message);
      setmessages([...messages, data]);
      setNewMessage("");
      socket.emit("sendMessage", message,projectId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="ChatBox-container">
        <>
          <div className="chat-header">
            <div className="follower">
              <div>
                <div className="name" style={{ fontSize: "0.8rem" }}>
                  <span>
                    <h2>user</h2>
                    {/* {userData?.lastname} */}
                  </span>
                </div>
              </div>
            </div>
            <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
          </div>
          {/* chat box message */}
          <ScrollToBottom>
            <div className="chat-body">
              {messages.map((message) => (
                <>
                  <div
                    className={
                      message.senderId === user._id ? "message own" : "message"
                    }
                  >
                    <span>{message.text}</span>
                    <span>{format(message.createdAt)}</span>
                    {message.senderName}
                  </div>
                </>
              ))}
            </div>
          </ScrollToBottom>
          <div className="chat-sender">
            <div>+</div>
            <InputEmoji value={newMessage} onChange={handleChange} />
            <div className="send-button button" onClick={handleSend}>
              Send
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default ChatBox;
