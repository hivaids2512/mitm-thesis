const CONST = require("../../config/constant");
const moment = require('moment');
const fs = require('fs');
const _ = require('lodash');
const logTypes2 = ['warn', 'error']

exports.readFileFromLineToLine = function (filename, from, to, callback) {
  fs.readFile(filename, function (err, data) {
    if (err) throw err;

    // Data is a buffer that we need to convert to a string
    // Improvement: loop over the buffer and stop when the line is reached
    var lines = data.toString('utf-8').split("\n");

    // if (+line_no > lines.length) {
    //   return callback('File end reached without finding line', null);
    // }
    callback(null, lines.slice(from, to));
  });
}

exports.logFilter = function (logData) {
  var returnData = {};
  var temps = [];

  var timeGroup = _.groupBy(logData, function (o) {
    return o.timeStamp;
  });

  var newLogData = [];
  Object.keys(timeGroup).forEach(time => {
    newLogData.push(timeGroup[time][0]);
  });

  var logGroup = _.groupBy(newLogData, function (o) {
    return o.type;
  });
  Object.keys(logGroup).forEach(key => {
    returnData[key.toLowerCase()] = logGroup[key].length;
    temps.push(key.toLowerCase());
  });
  logTypes2.forEach(type => {
    if (temps.indexOf(type) < 0) {
      returnData[type] = 0;
    }
  });
  return returnData;
}

exports.logTransform = function (logLines) {
  var logData = [];
  logLines.forEach(line => {
    var data = line.split(' ');
    var record = {
      type: data[2],
      status: 'open',
      component: getComponent(data),
      software: 'Hadoop',
      platform: 'linux',
      keyword: '',
      relation: '',
      category: ''
    }
    logData.push(record);
  });
  return logData;
}

function getComponent(data) {
  var start;
  var end;
  var component = '';
  data.forEach((item, index) => {
    if(item.indexOf('[') != -1) {
      start = index;
    }
    if(item.indexOf(']') != -1) {
      end = index;
    }
  });
  var component_words = data.slice(start, end+1);
  component_words.forEach(w => {
    component = component + ' ' + w;
  });
  return component.replace('[','').replace(']','').trim();
}


exports.getCurrentDate = function () {
  return moment().format(CONST.DEFAULT_TIME_FORMAT);
};


