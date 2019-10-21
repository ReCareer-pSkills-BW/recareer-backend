// Server
const express = require('express');
const server = express();
const cors = require('cors');
const port = process.env.port || 1617;
require('dotenv').config();

// Globals
const path = require('path');
global.dbConfig = path.resolve(__dirname + '/data/dbConfig');

// Routes
const primaryRouter = require('./api/server');
const errorRouter = require('./api/errors/errors');

// Config Server
server.use(cors());
server.use(express.json());

// URL Routes
server.use('/api', primaryRouter);
server.use('*', errorRouter);

// Server Init
server.listen(port, () => {
  `Server listening on port: ${port}
  API running ...`;
});
