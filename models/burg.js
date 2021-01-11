 // Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burga = {
  all: function (cb) {
    orm.all("burgz", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.create("burgz", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("burgz", objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgz", condition, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burga;
