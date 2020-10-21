const express = require("express");
const routes = express.Router();

const ContentController = require('./App/controlers/contentController');


routes.get('*', (req, res, next) => {
  if (req.headers['x-forwarded-proto'] != 'https') {
    res.redirect("https://" + req.headers.host + req.url);
  } else {
    next();
  }
  }
);
routes.get("/", ContentController.index);
routes.get("/discipulado/:id", ContentController.show);

routes.post("/send", ContentController.send);

module.exports = routes;
