const express = require("express");
const Router = express.Router();
const footballController = require("../controllers/football");

Router.post("/recordgame", footballController.recordGame);
Router.get("/leaguestanding", footballController.leagueStanding);
Router.get("/rank", footballController.rank);
Router.get("/endpoint", footballController.endpoint);
Router.delete("/reset", footballController.reset);

module.exports = Router;
