//Import ORM
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burger", function(res){
            cb(res);
        });
    },

    // the variables for columns and values arrays
    create: function(cols, vals, cb) {
        orm.create("burger", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb){
        orm.update("burger", objColVals, condition, function(res) {
            cb(res);
        });
    },

    delete: function(condition, cb) {
        orm.delete("burger", condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;
