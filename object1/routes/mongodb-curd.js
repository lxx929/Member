var express = require('express');
var router = express.Router();
var curd = require('mongodb-curd'); //备用数据库插件

var MongoClient = require('mongodb').MongoClient; //获取客户端对象
var db_url = 'mongodb://localhost:27017';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

//添加
router.post('/api/add', function(req, res, next) {
    var params = req.body; //获取数据{  "name" : "lxx","age": "22"}
    //连接数据库
    MongoClient.connect(db_url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbBase = db.db('test'); //数据库集合
        var dbColl = dbBase.collection('obj'); //连接数据库
        dbColl.insertOne(params, function(err, result) {
            if (err) throw err;
            console.log(result)
            if (result) {
                res.send({ code: 0, message: '添加成功' });
            } else {
                res.send({ code: 1, message: '添加失败' });
            }
        });
        db.close(); //关闭数据库
    });
});

//查询
router.post('/api/list', function(req, res, next) {
    MongoClient.connect(db_url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbBase = db.db('test');
        var dbColl = db.dbBase.collection('obj');
        dbColl.find().toArray(function(err, result) {
            if (err) throw err;
            if (result.length > 0) {
                conso.log(result);
                res.send({ code: 0, data: result });
            } else {
                res.send({ code: 1, message: "没有查询到相关信息" });
            }
        });
        db.close(); //关闭数据库
    });
});



module.exports = router;