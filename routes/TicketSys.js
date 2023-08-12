const express = require("express");
const router = express.Router();

const{ticketSystem} = require("../controllers/Ticket");

router.post("/ticket", ticketSystem);

module.exports = router;