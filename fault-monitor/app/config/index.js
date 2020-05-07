var env = process.env.NODE_ENV || "development";
var configData = require('./env/' + env);

exports.getDbConnectionStr = function() {
  return (
    "mongodb://" +
    configData.db.username +
    ":" +
    configData.db.password +
    "@" +
    configData.db.host +
    ":" +
    configData.db.port +
    "/" +
    configData.db.database
  );
};

exports.getEndPoint = function() {
  var env = process.env.NODE_ENV || "development"
  return (
    domain[env]
  );
};

exports.getData = function() {
  return configData;
}
