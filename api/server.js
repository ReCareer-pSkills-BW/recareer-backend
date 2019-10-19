const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

const adminRoutes = require('../config/adminRoutes');
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
server.use('api/admin', adminRoutes);

module.exports = server;
