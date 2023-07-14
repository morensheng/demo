var express = require('express');
var router = express.Router();

const userInfo = {
  "id": 1,
  "name": "张三",
  "age": 18,
  "gender": 0,
  "phone": 13888888888
}

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(userInfo);
});

module.exports = router;
