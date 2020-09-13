const express = require("express");
const routes = express.Router();


routes.get("/", function (req, res) {
  return res.render("home");
});

routes.get("/discipulado", function (req, res) {
  return res.render("discipulado");
});

module.exports = routes;
