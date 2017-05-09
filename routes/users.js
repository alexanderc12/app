var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ users: ['tobi, alex, miguel'] });
});

module.exports = router;
