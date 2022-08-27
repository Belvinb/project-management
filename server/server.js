const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const cors = require("cors");
const bodyParser = require("body-parser");
var userRoutes = require('./routes/user')
var adminRoutes = require('./routes/admin')
const {notFound, errorHandler} = require('./middlewares/errorMiddleware')

//dotenv
dotenv.config();

//mongoose connection
connectDB()

//body parsers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({ origin: true, credentials: true }));

//root routes
app.use("/", userRoutes);
app.use("/admin", adminRoutes);

//error handling middlewares
app.use(notFound);
app.use(errorHandler);

//connection port
let PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`server started on port ${PORT}`));