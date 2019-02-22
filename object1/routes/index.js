var express = require('express');
var router = express.Router();
var mongodb = require('mongodb-curd'); //备用数据库插件
var dbBase = 'test';
var dbColl = 'obj';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

//添加user
router.post('/api/add', function(req, res, next) {
    var params = req.body,
        user = params.user,
        age = params.age,
        phone = params.phone,
        address = params.address,
        ID_card = params.ID_card,
        id = params.id;

    if (!user || !ID_card) {
        res.send({ code: 2, message: "姓名或身份证为空，你逗我呢？" });
    } else {
        getIsHas();
    }

    function getIsHas() { //判断用户是否存在
        if (id) { //if有id，则修改
            mongodb.update(dbBase, dbColl, [{ _id: id }, params], function(result) {
                if (!result) {
                    res.send({ code: 0, mes: "修改失败" });
                } else {
                    res.send({ code: 1, mes: "修改成功", data: result });
                }
            });
        } else { //查询号是否存在
            mongodb.find(dbBase, dbColl, { ID_card: ID_card }, function(result) {
                if (result.length > 0) {
                    res.send({ code: 3, message: "该用户已经存在" });
                } else {
                    addUser();
                }
            });
        }
    }

    function addUser() { //添加
        mongodb.insert(dbBase, dbColl, params, function(result) {
            if (result) {
                res.send({ code: 0, data: result, message: "添加成功" });
            } else {
                res.send({ code: 1, message: "添加失败" });
            }
        });
    }

});

//查询list
router.get('/api/list', function(req, res, next) {
    var id = req.query.id;
    mongodb.find(dbBase, dbColl, { id: id }, function(result) {
        if (result.length > 0) {
            res.send({ code: 0, data: result, message: "查询成功" });
        } else {
            res.send({ code: 1, message: "查询失败" });
        }
    });

});

//删除
router.get('/api/del', function(req, res, next) {
    var id = req.query.id;
    mongodb.remove(dbBase, dbColl, { _id: id }, function(result) {
        if (!result) {
            res.send({ code: 0, message: "删除成功" });
        } else {
            res.send({ code: 1, message: "删除失败" });
        }
    });
});
module.exports = router;