var express = require("express");
var router = express.Router();

console.log("hihihihihih");
router.get("/", function (req, res, next) {
  console.log("kkkk");

  res.send("API is working property");
});

module.exports = router;
