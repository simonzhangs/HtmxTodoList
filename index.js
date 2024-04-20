const express = require('express');
const router = require('./routes/index');

const app = express();

// 设置允许跨域访问的域名和端口
const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://localhost:5500'
];

// 中间件函数，用于检查请求来源是否在允许的域名列表中
const allowCrossDomain = function (req, res, next) {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.header('Access-Control-Allow-Headers', 'Content-Type, hx-target, hx-current-url, hx-request');
    next();
};

// 使用自定义的跨域中间件
app.use(allowCrossDomain);
// 请求参数处理
app.use(express.urlencoded({ extended: true }));


// 导入路由
app.use(router)

app.listen(8080)
console.log("服务器启动")