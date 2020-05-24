const express = require("express");
const mysql = require("mysql");
var app = express();
var bodyParser = require("body-parser"); //解析POST的body

app.use(bodyParser.json());//使用body parser用于解析post的body
app.use(bodyParser.urlencoded({ extended: true }));//使用body parser用于解析post的body

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Access-Token");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(express.static('public'));



//连接数据库
var db = mysql.createConnection(
    {
        host: "cdb-k615j3ka.bj.tencentcdb.com",
        port: "10071",
        user: "huang",
        password: "linong720",
        database: "linong"
    });
//2.扶贫 政策和科技
app.get("/getPolicy",function (req,res) {
    db.query("SELECT * FROM Policy", function (err, data) {
        if (err) {
            console.log("数据库访问出错", err);
        } else {
            res.send(JSON.stringify(data))
        }
    })
})

app.get("/getScience",function (req,res) {
    db.query("SELECT * FROM Science", function (err, data) {
        if (err) {
            console.log("数据库访问出错", err);
        } else {
            res.send(JSON.stringify(data))
        }
    })
})

//发帖
app.post("/postExperience",function(req,res) {
    console.log(req.body)
    let Yes = {success:true},
        No = {success:false}
    db.query("insert into Experience(UserID,Content) values(?,?)"
    ,[1,req.body.content],(err,result)=>{
        if(err){
            console.log(err);
            res.send(No)
        }else{
            res.send(Yes)
        }
    })
})

// 首页农业标题请求   ---qin
app.get("/getNongyeTitle",function (req,res) {
    db.query("SELECT Title FROM Nongye", function (err, data) {
        if (err) {
            console.log("数据库访问出错", err);
        } else {
            console.log(req.query.a);
            res.send(JSON.stringify(data));
        }
    })
})
// 首页农业详细内容请求   ---qin
app.get("/getNongyeContent",function (req,res) {
    db.query("SELECT Content FROM Nongye where NongyeID = "+req.query.id, function (err, data) {
        if (err) {
            console.log("数据库访问出错", err);
        } else {
            res.send(JSON.stringify(data));
        }
    })
})
// 首页农业详细页图片URL请求   ---qin
app.get("/getNongyeImgurl",function (req,res) {
    db.query("SELECT ImgUrl FROM Nongye where NongyeID = "+req.query.id, function (err, data) {
        if (err) {
            console.log("数据库访问出错", err);
        } else {
            res.send(JSON.stringify(data));
        }
    })
})

// 获取水果类 ---Liu
app.get("/getFruit",(req,res)=>{
    db.query("SELECT * FROM shop_list where class='水果'",(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(JSON.stringify(data));
        }
    })
})

// 获取蔬菜类 ---Liu
app.get("/getVeg",(req,res)=>{
    db.query("SELECT * FROM shop_list where class='蔬菜'",(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(JSON.stringify(data));
        }
    })
})

// 获取种苗类 ---Liu
app.get("/getTree",(req,res)=>{
    db.query("SELECT * FROM shop_list where class='种苗'",(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(JSON.stringify(data));
        }
    })
})

// 获取畜牧类 ---Liu
app.get("/getCow",(req,res)=>{
    db.query("SELECT * FROM shop_list where class='畜牧'",(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(JSON.stringify(data));
        }
    })
})

// 获取水产类 ---Liu
app.get("/getFish",(req,res)=>{
    db.query("SELECT * FROM shop_list where class='水产'",(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(JSON.stringify(data));
        }
    })
})

//获取搜索商品结果 ---Liu
app.get("/getSearch",(req,res)=>{
    let search = req.query.searchRes;
    console.log(req);
    console.log(search);
    db.query("SELECT * FROM shop_list where detail=?",[search],(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    })
})

app.listen(8080);
