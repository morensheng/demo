const express = require('express')
const multer = require('multer')
const router = express.Router();

// 配置multer中间件
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// POST请求路由处理函数
router.post('/', upload.single('image'), (req, res) => {
  console.log(req.file);

  // 返回上传成功的消息
  res.send('File uploaded successfully');
});

module.exports = router;