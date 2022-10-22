import io from "socket.io-client"

// export const socket = io("http://localhost:8800");

// export const socket = io('/',{
//     transports:['websocket'],
//     path:"/socket"
// })

export const socket = io({
    protocols : ["http"]
})