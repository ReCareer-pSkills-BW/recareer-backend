// Init Server
const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

// Globals
const port = process.env.PORT || 1617;
const path = require('path');
global.dbConfig = path.resolve(__dirname + '/data/dbConfig');

// Routes
const primaryRouter = require('./api/server');
const errorRouter = require('./api/errors/errors');

// Server Config
server.use(helmet());
server.use(cors());
server.use(express.json());

// Base Route
server.use('/api', primaryRouter);

// Fallback
server.use('/*', errorRouter);

// Listen
server.listen(port, () => {
  `\n Listening on port: ${port}\n
                              => API running ...\n`;
});
