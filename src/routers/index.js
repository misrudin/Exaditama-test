const express = require("express");
const Router = express.Router();

const football = require("./football");
Router.use("/football", football);

module.exports = Router;
