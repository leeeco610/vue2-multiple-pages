/**
 * Created by Administrator on 2016/12/28.
 * 上传指定文件夹里面文件到七牛
 * 上传前先做删除操作
 */
require('shelljs/global')
var fs = require('fs')
var path = require('path')
var crypto = require('crypto')
var fetch = require('node-fetch');
var env = require('../src/store/configs/env');

//判断当前打包环境dev  test  prod
function getENV() {
    return (process.argv[2] && process.argv[2].toLowerCase()) || 'test';
}

//获取命令行中prefix参数
function getKeyPrefix(){
    return process.argv[3] || null;
}

class uploadFileToQiniu{
    constructor(){
        this.delAPi = 'tools/cdn/delFilesByPrefix'; //删除七牛空间资源API

        this.src_dir = process.cwd()+ path.sep +'dist'+ path.sep +'static';  //需要上传的目录
        this.access_key = 'f7ySrFcfRIMjh5_EG1VzwlJUPaA-moZ9nAYDLh02';
        this.secret_key = 'j8PIgckLRrP_xx2HfGKoF1F12bsB6WVvXGmKvSni';
        this.bucket = 'jcy-auto-st';  //需要上传至的空间名称
        this.key_prefix = 'pc_master/'+getENV()+'/static/';  //给上传的资源添加的前缀
        this.skip_suffixes = '.ini,.xml,.cnf,.DS_Store,.exe,.php,.html,.json,.less,.txt,.bac,.bak,.log';  //不进行上传的文件类型
        // this.skip_suffixes = '.ini,.xml,.cnf,.DS_Store,.exe,.php,.html,.json,.less,.ttf,.svg,.eot,.woff,.woff2,.txt,.bac,.bak,.log,.jpg,.gif,.png,.bmp';  //不进行上传的文件类型

        this.localUploadConfig = {
            "src_dir"            :   this.src_dir,
            "access_key"         :   this.access_key,
            "secret_key"         :   this.secret_key,
            "bucket"             :   this.bucket,
            "file_list"          :   "",
            "zone"               :   "hn",
            "ignore_dir"         :   false,
            "key_prefix"         :   this.key_prefix,
            "up_host"            :   "http://up-z2.qiniu.com",
            "overwrite"          :   true,
            "check_exists"       :   true,
            "check_hash"         :   true,
            "check_size"         :   true,
            "skip_file_prefixes" :   ".git,bin,.idea,.qshell",
            "skip_path_prefixes" :   "hello/,temp/,.idea/,.qshell/,.svn/",
            "skip_fixed_strings" :   ".svn",
            "skip_suffixes"      :   this.skip_suffixes,
            "rescan_local"       :   true,
            "log_file"           :   "upload.log",
            "log_level"          :   "info"
        }
    }

    //获取范围随机数
    random(n, m){
        return Math.floor(Math.random()*(m-n+1)+n);
    }

    execUploadFile(){
        console.log('删除操作开始 ...');
        var self = this;
        let rd = self.random(1000000, 9999999)+Date.now();
        let guid = crypto.createHash('md5').update(rd.toString()).digest('hex');
        var api = {
            ["rpc_" + rd]: {
                "name": self.delAPi,
                "params": {
                    "prefix": self.key_prefix,
                    "bucket": self.bucket
                }
            }
        };
        var rpc_url = 'http://' + env['DEV']['DATA_HOST_NAME'] + ':' + env['DEV']['DATA_PORT'] + '/api/multisync';
        var rpc_data = {
            "guid": guid,
            "api": api
        };
        var myInit = {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'params='+JSON.stringify(rpc_data)
        };
        return new Promise((resolve, reject) => {
            try{
                fetch(rpc_url,myInit)
                    .then(function(res) {
                        return res.json();
                    })
                    .then(function(res_json) {
                        var result = res_json['data']['rpc_'+rd];
                        if(result.code == 0){  //0代表删除成功，200000代表没有数据
                            console.log('删除数据成功');
                        }else{
                            console.log(result.msg);
                        }
                        console.log('-------- 删除操作完成 ---------');
                        self.uploadFile();
                        resolve(data);
                    })
            }catch(e) {
                console.log(JSON.stringify(e));
                reject(e);
            }

        });
    }

    //命令方式删除
    deleteFileByPrefix(){
        if(getKeyPrefix()){
            this.key_prefix = getKeyPrefix();
        }
        console.log('Start delete file by prefix: '+this.key_prefix);
        exec('qshell account '+this.access_key+' '+this.secret_key+' && qshell listbucket '+this.bucket+' '+this.key_prefix+' delete.list.txt && qshell batchdelete '+this.bucket+' delete.list.txt');
    }

    uploadFile(){
        console.log('开始上传文件 ...');
        fs.writeFileSync('localUploadConfig.txt',JSON.stringify(this.localUploadConfig), {"encoding":"utf-8"});
        let lcoalUploadConfigFilePath = './localUploadConfig.txt';
        exec('qshell qupload '+lcoalUploadConfigFilePath);
        console.log('--------- 上传文件完成 ---------');
    }

    start(){
        if(process.argv[2] === 'del'){
            this.deleteFileByPrefix();  //删除文件
            return false;
        }else if(process.argv[2] === 'up'){
            this.uploadFile();
            return false;
        }
        this.execUploadFile();
    }
}
new uploadFileToQiniu().start();
