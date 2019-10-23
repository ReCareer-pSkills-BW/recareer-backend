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
server.use('*', errorRouter);

// Init GET
server.use('/', (req, res) => {
  res.send({ msg: `API running ...` });
});

// Listen
server.listen(port, () => {
  console.log(`\n Listening on port: ${port}
                              => API running ...\n`);
});
