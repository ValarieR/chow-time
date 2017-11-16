var orm = require("../config/orm.js");

const burger = {
    getAll: function () {
        orm.selectAll();
    },
    insertOne: function () {
        orm.insertOne();
    },
    updateOne: function () {
        orm.updateOne();
        orm.updateOne();
    }
};


modeule.exports = burger;