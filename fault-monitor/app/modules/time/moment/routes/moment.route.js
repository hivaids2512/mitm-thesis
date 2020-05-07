
"use strict";

module.exports = function(router) {
  var momentController = require("../controllers/moment.controller");
  router
    .route("/current-date")
    .get(momentController.getCurrentDate);
};
