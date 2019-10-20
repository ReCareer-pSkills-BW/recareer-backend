const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

const AdminRouter = require('../config/adminRoutes');
const protectedRouter = require('../config/protectedRoutes');
const server = express();

// Global Middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

// Initial GET
server.get('/', (req, res) => {
  res.send(`API is running ...`);
});

// Routers
server.use('/api/admin', AdminRouter);

module.exports = server;
