const mongoose = require('mongoose')

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        });
        console.log(`mongo connected ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error:${error.message}`);
        process.exit();   
        
    }
}

module.exports = connectDB;