var orm = require("../config/orm.js");

const Burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res);
        });
    },
    insertOne: function (col, val, cb) {
        orm.insertOne('burgers', col, val, function (res) {
            cb(res);
        });
    },
    updateOne: function (colVals, condition, cb) {
        orm.updateOne('burgers', colVals, condition, function (res) {
            cb(res);
        });
    }
};


module.exports = Burger;