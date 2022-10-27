import io from "socket.io-client"

export const socket = io();

// export const socket = io('/chat',{
//     transports:['websocket'],
//     path:"/socket"
// })

// export const socket = io({
//     protocols : ["http"]
// })