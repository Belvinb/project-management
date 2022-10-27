const proxy = require("http-proxy-middleware");

module.exports = function(app){
    // app.use(proxy("/socket"), {
    //   target: "http://localhost:5000",
    //   changeOrigin: true,
    //   ws: true,
    //   logLevel: "debug",
    // });
    app.use(proxy("/"),{
        target:"http://localhost:5000",
        changeOrigin:true
    })
}


