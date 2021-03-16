let db = require('../dbconnect/dbconnect.js');
const { get } = require('mongoose');

// data = [{ item: 'Task 1', priority: 1 }, { item: 'Task 2', priority: 2 }, { item: 'Task 3', priority: 3 }, { item: 'Task 4', priority: 2 }];
let dbData = db.myJobs;
let returndata;

let getData = function () {
    dbData.find({}, function (err, newData) {
        if (!err)
            returndata = newData;
    });
    return returndata;
}

let setData = function (item, priority) {
    dbData({ item: item, priority: priority }).save(function (err) {
        if (!err)
            getData();
    });
}

let delData = function (item) {
    item = item.replace(/-/g, ' ');
    dbData.find({ item: item }).remove(function (err) {
        if (!err)
            getData();
    });
}

module.exports = {
    getData: getData,
    setData: setData,
    delData: delData,
}