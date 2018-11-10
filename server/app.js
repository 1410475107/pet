const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
//允许跨域
//CORS：允许跨域
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://lulaoshi:8088");
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
//连接到数据
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'test'
  });
  connection.connect();

//接收post过来的数据
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/login', (req ,res)=>{
    console.log(req.body);
    res.json({r:'ok'});
});

app.get('/kwlist', (req ,res)=>{
    let page = req.query.page;
    let keywords = req.query.keywords;
    let pagesize = 20;
    let $sql = `SELECT * FROM pc WHERE kw LIKE ? LIMIT ?, ?`;
    connection.query($sql, [`%${keywords}%`, (page-1)*pagesize, pagesize], (err, results)=>{
        console.log(results);
        res.json(results);
    });
});

app.post('/additem', (req ,res)=>{
    console.log(req.body);
    res.json({r:'ok'});
});

app.post('/logout', (req ,res)=>{
    console.log(req.body);
    res.json({r:'ok'});
});
app.listen(81, () => {
    console.log(`Server started on port:81`);
});
