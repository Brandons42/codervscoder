var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index",
    {
      title: "SMHS Coder vs Coder",
      signedin: false,
      username: null
    }
  );
});

module.exports = router;
