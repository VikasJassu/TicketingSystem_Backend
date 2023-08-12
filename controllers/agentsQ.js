const User = require('../models/User');
const Queue = require('./Agents');

const agentsQueue = new Queue();

(async () => {
  const agents = (await User.find({})).map((agent) => agent._id);
  for (let i = 0; i < agents.length; i++) {
    agentsQueue.enqueue(agents[i]);
  }
})();

module.exports = agentsQueue;
