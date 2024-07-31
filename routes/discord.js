const express = require('express');
const router = express.Router();
const discord = require('../services/discord');
const axios = require('axios');

// 获取消息列表
router.get('/list', async (req, res, next) => {
  const { authorization } = req.headers;
  const { channel_id } = req.query;
  const params = { channel_id, authorization };

  discord
    .queryMessageList(params)
    .then((data) => res.send(data))
    .catch(next);
});

// 发送绘图交互
router.post('/draw', async (req, res, next) => {
  const { authorization } = req.headers;

  discord
    .sendDrawInteractions({ body: req.body, token: authorization })
    .then((data) => res.send(data))
    .catch(next);
});

// 管道传输（可能用于图片或文件）
router.get('/pipe', async (req, res, next) => {
  (await axios.get(req.query.url, { responseType: 'stream' })).data.pipe(res);
});

// 替换上传
router.post('/replaceUpload', async (req, res, next) => {
  discord
    .replaceUpload(req.body)
    .then((data) => res.send(data))
    .catch(next);
});

module.exports = router;
