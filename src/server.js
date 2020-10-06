const express = require("express");
const nunjucks = require("nunjucks");
const routes = require("./routes");
const bodyParser = require('body-parser');

const server = express();

server.use(
  bodyParser.json(), 
  express.urlencoded({ extended: true }),
  express.static("public"),
  routes
);

server.set("view engine", "njk");

nunjucks.configure("src/App/views", {
  express: server,
  autoescape: false,
  noCache: true,
});
nunjucks.render("layout.njk");

let port = process.env.PORT || 5000;

server.listen(port, function () {
  console.log("Server is running");
});
