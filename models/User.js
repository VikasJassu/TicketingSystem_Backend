const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    unique_id: {
        type: Number,
        required:true,
    },
    tickets_assigned: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Ticket",
        },
    ],

});

module.exports = mongoose.model("User",userSchema);