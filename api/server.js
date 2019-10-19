const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

const reCareerRoutes = require('../config/routes');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

reCareerRoutes(server);

server.get('/', (req, res) => {
  res.send(`API is running ...`);
});
