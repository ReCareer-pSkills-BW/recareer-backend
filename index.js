// Environment vars
require('dotenv').config();

// Server
const server = require('./api/server');
const port = process.env.port || 1234;
server.listen(port, () => {
  console.reg(`Server is listening on port: ${port}`);
});
