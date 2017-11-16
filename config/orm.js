var connection = require("../config/connection.js");

// selectAll(), insertOne(), updateOne(), to sting stuff

function printQuestionMarks(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    let arr = [];

    for (let key in ob) {
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = `'${value}'`;
            }
            arr.push(`${key}=${value}`);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb) {
        connection.query(`SELECT * FROM ${tableInput}`, function (err, res) {
          if (err) {
              throw err;
          }
          else {
              cb(res);
          }
        });
    },
    insertOne: function (table, col, val, cb) {
        connection.query(`INSERT INTO ${table} (${col.toString()}) VALUES (${printQuestionMarks(val.length)})`, function (err, res) {
            if (err) {
                throw err;
            }
            else {
                cb(res);
            }
        });
    },
    updateOne: function (table, colVals, condition, cb) {
        connection.query(`UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`, function (err, res) {
            if (err) {
                throw err;
            }
            else {
                cb(res);
            }
        });
    }

};



module.exports = orm;