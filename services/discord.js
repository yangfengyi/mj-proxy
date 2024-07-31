const FormData = require('form-data');
const axios = require('axios');
const TENCENTCOS = require('cos-nodejs-sdk-v5');
const ALIOSS = require('ali-oss');
const streamToBuffer = require('stream-to-buffer');
const { v4: uuidv4 } = require('uuid');
const id = uuidv4();

module.exports.queryMessageList = async (params) => {
  const { channel_id, authorization } = params;
  const url = `https://discord.com/api/v9/channels/${channel_id}/messages?limit=50`;
  const headers = { authorization };
  const response = await axios.get(url, { headers });
  return response.data;
};

module.exports.sendDrawInteractions = async (params) => {
  const { body, token } = params;
  const url = 'https://discord.com/api/v9/interactions';
  const headers = { authorization: token };
  await axios.post(url, body, { headers });
  return { success: true };
};

module.exports.getBufferFromUrl = async (url) => {
  const response = await axios.get(url, { responseType: 'stream' });
  return new Promise((resolve, reject) => {
    streamToBuffer(response.data, (error, buffer) => {
      if (error) throw new Error('获取图片资源失败、请重新试试吧！');
      else resolve(buffer);
    });
  });
};

module.exports.replaceUpload = async (params) => {
  const {
    url,
    cosType = 'tencent',
    cosParams = {},
    dir = 'ai',
    filename,
  } = params;
  const startTime = new Date();
  console.log(`**************** 开始上传图片 [${url}]`);
  const buffer = await this.getBufferFromUrl(url);

  if (cosType === 'tencent') {
    const { SecretId, SecretKey, Bucket, Region } = cosParams;
    const cos = new TENCENTCOS({ SecretId, SecretKey, FileParallelLimit: 10 });
    try {
      return new Promise(async (resolve, reject) => {
        cos.putObject(
          {
            Bucket,
            Region,
            Key: `${dir}/${filename || uuidv4() + '.png'}`,
            StorageClass: 'STANDARD',
            Body: buffer,
          },
          function (err, data) {
            if (err) return reject(err);
            const endTime = new Date();
            console.log(
              `**************** 本次上传耗时ten ${
                (endTime.getTime() - startTime.getTime()) / 1000
              }秒`
            );
            let url = data.Location.replace(
              /^(http:\/\/|https:\/\/|\/\/|)(.*)/,
              'https://$2'
            );
            return resolve(url);
          }
        );
      });
    } catch (error) {
      throw new Error('上传图片失败、请重新试试吧！');
    }
  }

  if (cosType === 'aliyun') {
    const { region, bucket, accessKeyId, accessKeySecret } = cosParams;
    const client = new ALIOSS({ region, accessKeyId, accessKeySecret, bucket });
    try {
      return new Promise((resolve, reject) => {
        client
          .put(`${dir}/${filename || uuidv4() + '.png'}`, buffer)
          .then((result) => {
            const endTime = new Date();
            console.log(
              `**************** 本次上传耗时ali ${
                (endTime.getTime() - startTime.getTime()) / 1000
              }秒`
            );
            resolve(result.url);
          })
          .catch((err) => {
            reject(err);
          });
      });
    } catch (error) {
      throw new HttpException('上传图片失败[ali]', HttpStatus.BAD_REQUEST);
    }
  }

  if (cosType === 'chevereto') {
    try {
      const { uploadPath, key } = cosParams;
      const buffer = await this.getBufferFromUrl(url);
      const base64Image = buffer.toString('base64');
      const formData = new FormData();
      formData.append('source', base64Image);
      console.log('formData: ', formData);
      const response = await axios.post(uploadPath, formData, {
        params: { key },
        headers: { 'X-API-Key': key },
      });
      if (response?.status === 200) {
        const endTime = new Date();
        console.log(
          `**************** 本次上传耗时chevereto ${
            (endTime.getTime() - startTime.getTime()) / 1000
          }秒`
        );
        return response.data.image.url;
      } else {
        console.log(
          'Chevereto ---> res',
          response?.data.code,
          response?.data.error.message
        );
      }
    } catch (error) {
      console.log('error: ', error.message);
    }
  }
};
