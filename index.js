// Environment vars
require('dotenv').config();

// Server
const server = require('./api/server');
const port = process.env.port || 1617;
server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
