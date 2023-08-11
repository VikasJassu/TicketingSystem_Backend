const express = require("express");
const app = express();
const database = require("./config/database");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

//connect with database
database.connectDB();
//middlewares
app.use(express.json());

//routes

//default route
app.get("/", (req,res) => {
    return res.json({
        success: true,
        message: "Your server is running...."
    });
});

app.listen(PORT, () => {
    console.log(`Server has been started on PortNo: ${PORT}`)
})