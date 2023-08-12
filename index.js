const express = require("express");
const app = express();
const database = require("./config/database");
const ticketRoute = require("./routes/TicketSys");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

//connect with database
database.connectDB();
//middlewares
app.use(express.json());

//routes
app.use("/api/v1", ticketRoute);
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