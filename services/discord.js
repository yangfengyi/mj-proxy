function _0x4374(_0x3f14d0,_0x2df580){const _0x47bab8=_0x47ba();return _0x4374=function(_0x437419,_0xf0a7d6){_0x437419=_0x437419-0xc5;let _0xa0fe88=_0x47bab8[_0x437419];return _0xa0fe88;},_0x4374(_0x3f14d0,_0x2df580);}const _0x4d8c93=_0x4374;function _0x47ba(){const _0x2f8ba8=['data','****************\x20本次上传耗时ten\x20','1anoTFH','formData:\x20','chevereto','log','上传图片失败[ali]','append','383932wcLqrC','/messages?limit=50','put','form-data','5556tGdEOc','status','image','exports','toString','tencent','466138rPnYbl','https://discord.com/api/v9/interactions','****************\x20本次上传耗时ali\x20','Location','****************\x20开始上传图片\x20[','code','sendDrawInteractions','cos-nodejs-sdk-v5','then','axios','BAD_REQUEST','429MqSQPu','get','12LTTmGK','获取图片资源失败、请重新试试吧！','url','107783gqJKlM','2741045TXfPsX','error:\x20','error','message','.png','getBufferFromUrl','uuid','post','catch','replace','14nIoiHH','1287120fnQWAv','24NlEgDO','11692341IKcIkx','stream-to-buffer','response','queryMessageList','stream','getTime','252190UWeWkQ'];_0x47ba=function(){return _0x2f8ba8;};return _0x47ba();}(function(_0x1ff5db,_0x1b0ff7){const _0x60bb1d=_0x4374,_0x1fd151=_0x1ff5db();while(!![]){try{const _0xe9f2eb=parseInt(_0x60bb1d(0xda))/0x1*(parseInt(_0x60bb1d(0xea))/0x2)+-parseInt(_0x60bb1d(0xd0))/0x3*(-parseInt(_0x60bb1d(0xe0))/0x4)+parseInt(_0x60bb1d(0xfb))/0x5*(parseInt(_0x60bb1d(0xf7))/0x6)+parseInt(_0x60bb1d(0xce))/0x7*(parseInt(_0x60bb1d(0xcf))/0x8)+parseInt(_0x60bb1d(0xd1))/0x9+-parseInt(_0x60bb1d(0xd7))/0xa*(-parseInt(_0x60bb1d(0xf5))/0xb)+parseInt(_0x60bb1d(0xe4))/0xc*(-parseInt(_0x60bb1d(0xfa))/0xd);if(_0xe9f2eb===_0x1b0ff7)break;else _0x1fd151['push'](_0x1fd151['shift']());}catch(_0x4da19d){_0x1fd151['push'](_0x1fd151['shift']());}}}(_0x47ba,0xd2b70));const FormData=require(_0x4d8c93(0xe3)),axios=require(_0x4d8c93(0xf3)),TENCENTCOS=require(_0x4d8c93(0xf1)),ALIOSS=require('ali-oss'),streamToBuffer=require(_0x4d8c93(0xd2)),{v4:uuidv4}=require(_0x4d8c93(0xca)),id=uuidv4();module[_0x4d8c93(0xe7)][_0x4d8c93(0xd4)]=async _0x726c7b=>{const _0x32426f=_0x4d8c93,{channel_id:_0x180886,authorization:_0x25f886}=_0x726c7b,_0xa18736='https://discord.com/api/v9/channels/'+_0x180886+_0x32426f(0xe1),_0x2b54e8={'authorization':_0x25f886},_0x38f9a3=await axios[_0x32426f(0xf6)](_0xa18736,{'headers':_0x2b54e8});return _0x38f9a3[_0x32426f(0xd8)];},module['exports'][_0x4d8c93(0xf0)]=async _0x3117d1=>{const _0x4f36aa=_0x4d8c93,{body:_0x52fc9d,token:_0x509621}=_0x3117d1,_0x27c784=_0x4f36aa(0xeb),_0x507edf={'authorization':_0x509621};return await axios[_0x4f36aa(0xcb)](_0x27c784,_0x52fc9d,{'headers':_0x507edf}),{'success':!![]};},module[_0x4d8c93(0xe7)][_0x4d8c93(0xc9)]=async _0x2b4e84=>{const _0x522f26=_0x4d8c93,_0x3403c8=await axios['get'](_0x2b4e84,{'responseType':_0x522f26(0xd5)});return new Promise((_0x5e70b9,_0x374dc5)=>{streamToBuffer(_0x3403c8['data'],(_0x21cdcf,_0x2a02cd)=>{const _0x5cf1c9=_0x4374;if(_0x21cdcf)throw new Error(_0x5cf1c9(0xf8));else _0x5e70b9(_0x2a02cd);});});},module['exports']['replaceUpload']=async _0x17e6bc=>{const _0x21a1ed=_0x4d8c93,{url:_0x2b1644,cosType:cosType=_0x21a1ed(0xe9),cosParams:cosParams={},dir:dir='ai',filename:_0x11b909}=_0x17e6bc,_0x137f45=new Date();console[_0x21a1ed(0xdd)](_0x21a1ed(0xee)+_0x2b1644+']');const _0xfcd0fd=await this[_0x21a1ed(0xc9)](_0x2b1644);if(cosType===_0x21a1ed(0xe9)){const {SecretId:_0x2f0cc3,SecretKey:_0x29b93e,Bucket:_0x5cb3d8,Region:_0x157642}=cosParams,_0x526819=new TENCENTCOS({'SecretId':_0x2f0cc3,'SecretKey':_0x29b93e,'FileParallelLimit':0xa});try{return new Promise(async(_0x59d695,_0x14074a)=>{const _0x4bc0c5=_0x21a1ed;_0x526819['putObject']({'Bucket':_0x5cb3d8,'Region':_0x157642,'Key':dir+'/'+(_0x11b909||uuidv4()+_0x4bc0c5(0xc8)),'StorageClass':'STANDARD','Body':_0xfcd0fd},async function(_0x2def7d,_0x4de93e){const _0x3ef0d8=_0x4bc0c5;if(_0x2def7d)return _0x14074a(_0x2def7d);const _0x32244d=new Date();console[_0x3ef0d8(0xdd)](_0x3ef0d8(0xd9)+(_0x32244d[_0x3ef0d8(0xd6)]()-_0x137f45[_0x3ef0d8(0xd6)]())/0x3e8+'秒');let _0x36cec7=_0x4de93e[_0x3ef0d8(0xed)][_0x3ef0d8(0xcd)](/^(http:\/\/|https:\/\/|\/\/|)(.*)/,'https://$2');return _0x59d695(_0x36cec7);});});}catch(_0x4dd721){throw new Error('上传图片失败、请重新试试吧！');}}if(cosType==='aliyun'){const {region:_0x516e9b,bucket:_0x18b0d5,accessKeyId:_0x26b2d7,accessKeySecret:_0x58ecb4}=cosParams,_0x580d3a=new ALIOSS({'region':_0x516e9b,'accessKeyId':_0x26b2d7,'accessKeySecret':_0x58ecb4,'bucket':_0x18b0d5});try{return new Promise((_0x359984,_0x593a62)=>{const _0x2c6560=_0x21a1ed;_0x580d3a[_0x2c6560(0xe2)](dir+'/'+(_0x11b909||uuidv4()+_0x2c6560(0xc8)),_0xfcd0fd)[_0x2c6560(0xf2)](_0x40f80f=>{const _0x3c93f1=_0x2c6560,_0x12c3c5=new Date();console[_0x3c93f1(0xdd)](_0x3c93f1(0xec)+(_0x12c3c5[_0x3c93f1(0xd6)]()-_0x137f45[_0x3c93f1(0xd6)]())/0x3e8+'秒'),_0x359984(_0x40f80f[_0x3c93f1(0xf9)]);})[_0x2c6560(0xcc)](_0x451a82=>{_0x593a62(_0x451a82);});});}catch(_0x5a65d7){throw new HttpException(_0x21a1ed(0xde),HttpStatus[_0x21a1ed(0xf4)]);}}if(cosType===_0x21a1ed(0xdc))try{const {uploadPath:_0xf10961,key:_0xe85aea}=cosParams,_0x81d23a=await this[_0x21a1ed(0xc9)](_0x2b1644),_0x1dc52c=_0x81d23a[_0x21a1ed(0xe8)]('base64'),_0x3db94a=new FormData();_0x3db94a[_0x21a1ed(0xdf)]('source',_0x1dc52c),console[_0x21a1ed(0xdd)](_0x21a1ed(0xdb),_0x3db94a);const _0x53b309=await axios[_0x21a1ed(0xcb)](_0xf10961,_0x3db94a,{'params':{'key':_0xe85aea},'headers':{'X-API-Key':_0xe85aea}});if(_0x53b309?.[_0x21a1ed(0xe5)]===0xc8){const _0x4b33b0=new Date();return console[_0x21a1ed(0xdd)]('****************\x20本次上传耗时chevereto\x20'+(_0x4b33b0[_0x21a1ed(0xd6)]()-_0x137f45[_0x21a1ed(0xd6)]())/0x3e8+'秒'),_0x53b309['data'][_0x21a1ed(0xe6)][_0x21a1ed(0xf9)];}else console[_0x21a1ed(0xdd)]('Chevereto\x20--->\x20res',_0x53b309?.[_0x21a1ed(0xd8)][_0x21a1ed(0xef)],_0x53b309?.[_0x21a1ed(0xd8)][_0x21a1ed(0xc6)][_0x21a1ed(0xc7)]);}catch(_0x53b12b){console[_0x21a1ed(0xdd)](_0x21a1ed(0xc5),_0x53b12b[_0x21a1ed(0xd3)]);}};