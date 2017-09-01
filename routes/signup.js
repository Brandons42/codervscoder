var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.render("signup",
    {
      title: "SMHS Coder vs Coder Sign Up"
    }
  );
});

module.exports = router;
