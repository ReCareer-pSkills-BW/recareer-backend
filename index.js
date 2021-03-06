// Init Server
const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

// Globals
const port = process.env.PORT || 61617;
const path = require('path');
global.dbConfig = path.resolve(__dirname + '/data/dbConfig');

// Routes
const primaryRouter = require('./api/server');
const errorRouter = require('./api/errors/errors');

// Server Config
server.use(helmet());
server.use(cors());
server.use(express.json());

// Init GET
server.get('/', (req, res) => {
  res.send({ msg: `API running ...` });
});

// Base Route
server.use('/api', primaryRouter);

// Fallback
server.use('*', errorRouter);

// Listen
server.listen(port, () => {
  console.log(process.env.DB_ENV);
  console.log(process.env.DATABASE_URL);

  console.log(`\n Listening on port: ${port}
                              => API running ...\n`);
});
