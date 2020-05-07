"use strict";
const path = require('path');
const utils = require(path.resolve('./app/lib/utils/utils.lib'));
const _ = require('lodash');
const request = require('request');
const logTypes = ['info', 'warn', 'error', 'normal'];
const logTypes2 = ['warn', 'error']
const WINDOW_SIZE = 20;
exports.getLogs = function (req, res) {
    utils.readFileFromLineToLine(path.resolve('./datasets/Hadoop_2k.log'), parseInt(req.query.from), parseInt(req.query.from) + WINDOW_SIZE, function (err, data) {
        var logData = [];
        var returnData = {};
        var temps = [];
        var index = parseInt(req.query.index);
        data.forEach(line => {
            logData.push({ type: line.split(' ')[2] });
        });
        var logGroup = _.groupBy(logData, function (o) {
            return o.type;
        });
        Object.keys(logGroup).forEach(key => {
            returnData[key.toLowerCase()] = logGroup[key].length;
            temps.push(key.toLowerCase());
        });
        logTypes.forEach(type => {
            if (temps.indexOf(type) < 0) {
                returnData[type] = 0;
            }
        });
        returnData.index = index;
        res.status(200).json({
            data: returnData
        });
    });
};

exports.getRaw = function (req, res) {
    utils.readFileFromLineToLine(path.resolve('./datasets/Hadoop_2k.log'), parseInt(req.query.from), parseInt(req.query.from) + WINDOW_SIZE, function (err, data) {
        var logData = [];
        var returnData = {};
        var temps = [];
        var index = parseInt(req.query.index);
        data.forEach(line => {
            logData.push(line);
        });
        
        res.status(200).json({
            data: logData
        });
    });
};

exports.getFilteredLogs = function (req, res) {
    utils.readFileFromLineToLine(path.resolve('./datasets/Hadoop_2k.log'), parseInt(req.query.from), parseInt(req.query.from) + WINDOW_SIZE, function (err, data) {
        var logData = [];
        var index = parseInt(req.query.index);
        data.forEach(line => {
            var type = line.split(' ')[2];
            if (type != 'INFO' && type != 'NORMAL') {
                logData.push({ type: type, timeStamp: line.split(' ')[0] + ';' + line.split(' ')[1] });
            }
        });
        var returnData = utils.logFilter(logData);
        returnData.index = index;
        res.status(200).json({
            data: returnData
        });
    });
};

exports.getPrediction = function (req, res) {
    utils.readFileFromLineToLine(path.resolve('./datasets/Hadoop_2k.log'), parseInt(req.query.from), parseInt(req.query.from) + WINDOW_SIZE, function (err, data) {
        var index = parseInt(req.query.index);
        var returnData = utils.logTransform(data);
        var uri = 'http://127.0.0.1:5000/predict/' + (req.query.alg == 'tree' ? req.query.alg : 'forest');
        var options = {
            uri: uri,
            method: 'POST',
            json: returnData
        };

        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                body.index = index;
                res.status(200).json({
                    data: body
                });
            } else {
                console.log(err);
            }
        });
    });
};
