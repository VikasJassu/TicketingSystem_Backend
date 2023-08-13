# TicketingSystem_Backend
Technology Used: Nodejs, Expressjs, MongoDB. 
This is a ticketing system designed in such a way that there is no over workload on any agent/member, work is divided between all agents equally.
Here we have five agents When the first ticket came and is assigned to the first agent, then the second to the second agent and so on but when the ticket is assigned to the fifth agent then the next ticket will be assigned to the first agent according to ROUND ROBBIN DISTRIBUTION.
It returns ticket_id and assigned_to in response.
In Post request, we will send user_id/name(String type) and issue(description of the ticket, String type);

