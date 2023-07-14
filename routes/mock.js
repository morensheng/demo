const express = require('express');
var router = express.Router();
const path = require('path');


// 指定静态文件目录为public目录
router.use(express.static(path.join(__dirname, '../public')));

router.use(express.json());

// 定义一个GET请求的路由，返回用户基本信息的JSON数据
router.post('/userInfo', (req, res) => {
  console.log(req.body)

  // 拼接服务器地址
  const serverImageUrl = `${req.protocol}://${req.get('host')}/images/维达2.webp`;


  // 定义用户基本信息，包括头像字段
  const user = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
    avatar: serverImageUrl
  };

  res.json(user);
});


module.exports = router;
