//Import ORM
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burger", function(res){
            cb(res);
        });
    },

    // the variables for columns and values arrays
    create: function(name, cb) {
        orm.create("burger", ["burger_name", "devoured"], [name, false], cb );
    },

    update: function(id, cb){
        var condition = "id = " +id;
        orm.update("burger", {devoured:true}, condition, cb);

    },

    delete: function(condition, cb) {
        orm.delete("burger", condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;
