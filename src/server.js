const express = require("express");
const nunjucks = require("nunjucks");
const routes = require("./routes");
const methodOverride = require("method-override");

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));
server.use(methodOverride("_method"));
server.use(routes);

server.set("view engine", "njk");

nunjucks.configure(__dirname + "src/app/views", {
  express: server,
  autoescape: false,
  noCache: true,
});

let port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log("Server is running");
});
