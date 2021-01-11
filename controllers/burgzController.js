var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burga = require("../models/burg.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burga.all(function (data) {
    var hbsObject = {
      burg: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgz", function (req, res) {
  burga.create(["name", "ate"], 
  [req.body.name, req.body.ate], function (
    result
  ) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
    // res.redirect("/")
  });
});

router.put("/api/burgz/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burga.update({
      ate: req.body.ate},
    condition,
    function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/api/burgz/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  burga.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
