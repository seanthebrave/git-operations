const PORT = 8000;
const { hello } = require('./hello');

function startServer() {
  console.log(`Server running on port ${PORT}`);
}

function handleGreetRequest(name) {
  return hello(name);
}

module.exports = { PORT, startServer, handleGreetRequest };