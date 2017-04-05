var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/api/whoami', function(req, res) {
  // console.log(req.headers["accept-language"]);
  var language = req.headers["accept-language"].split(",")[0];
  var userAgent = /\(([^)]+)\)/.exec(req.headers["user-agent"])[1];
  var ip = req.connection.remoteAddress;
  // console.log(ipaddress);
  res.json({ language: language, software: userAgent, ipaddress: ip});
})

module.exports = router;
