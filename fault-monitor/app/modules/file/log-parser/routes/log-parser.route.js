
"use strict";

module.exports = function(router) {
  var logParserController = require("../controllers/log-parser.controller");
  router
    .route("/logs")
    .get(logParserController.getLogs);
  router
    .route("/filtered-logs")
    .get(logParserController.getFilteredLogs);
  router
    .route("/predict")
    .get(logParserController.getPrediction);
  router
    .route("/raw-logs")
    .get(logParserController.getRaw);;
};
