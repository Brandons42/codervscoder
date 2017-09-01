var express = require("express");
var router = express.Router();

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
