const Ticket = require("../models/Ticket");
const crypto = require("crypto");
const agentsQueue = require("./agentsQ");

exports.ticketSystem = async (req,res) => {
    try {
        const{user_id, issue} = req.body;
        console.log("req body", req.body);

        if(!user_id || !issue) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        //create ticket_id
        let ticket_id = crypto.randomBytes(15).toString("hex");
        console.log("ticket id: ", ticket_id );


        let availableAgent = agentsQueue.front()
            const ticketAssigned = await Ticket.create({
                            ticket_id: ticket_id,
                            description: issue,
                            assigned_to: availableAgent,
                            raised_by: user_id,
                        });
                        agentsQueue.dequeue();
                        agentsQueue.enqueue(availableAgent);
                        return res.status(201).json({
                                        success: true,
                                        message: "Ticket created successfully",
                                        ticketAssigned,
                                    });
       


    } catch (error) {
        console.log("Error in ticketSystem", error);
        return res.status(500).json({
            success: false,
            message: "Error in ticketing System"
        })
    }
}


