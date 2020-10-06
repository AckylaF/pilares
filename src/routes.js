const express = require("express");
const routes = express.Router();

const ContentController = require('./App/controlers/contentController');

routes.get("/", ContentController.index);
routes.get("/discipulado/:id", ContentController.show);

routes.post("/send", ContentController.send);

module.exports = routes;
