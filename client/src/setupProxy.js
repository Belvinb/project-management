const proxy = require("http-proxy-middleware");

module.exports = function(app){
    app.use(proxy("/socket.io"), {
      target: "http://localhost:8800",
      changeOrigin: true,
      ws: false,
    });
}


