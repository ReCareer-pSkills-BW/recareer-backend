// Init Server
const express = require("express");
const server = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 1617;

// Globals
const path = require("path");
global.dbConfig = path.resolve(__dirname + "/data/db-config");

// Routes
const primaryRouter = require("./api/server");
const errorRouter = require("./api/errors/errors");


// Server Config
server.use(cors());
server.use(express.json());

// Base Route
server.use("/api", primaryRouter);

// Fallback
server.use("*", errorRouter);

// Listen
server.listen(port, () => {
  `Listening on port: ${port}
                              => API running ...`
});