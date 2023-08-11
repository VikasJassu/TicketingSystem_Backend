const mongoose = require("mongoose");
require("dotenv").config();

exports.connectDB = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    }).then( () => console.log("DB connection successful"))
    .catch((error) => {
        console.log("DB connection failed");
        console.log("Error in DB connection is: ",error);
        process.exit(1);
    })
};