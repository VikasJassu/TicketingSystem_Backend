const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
    ticket_id:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    assigned_to: {
        type: String,
        required: true,
    },
    raised_by: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Ticket",ticketSchema);