/*
    复习mysql的使用
        * 连接数据库
        * 写查询，导出结果
        * 关闭数据库
*/
// 导入MySQL模块;
var mysql = require("mysql");
// 创建链接对象对象,并配置参数;
var pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'guanli',
    charset: 'UTF8_GENERAL_CI',
    multipleStatements: true

});

// 执行数据库语句;
function query(sql) {
    return new Promise((resolve, reject) => {
        pool.query(sql, (err, rows) => {
            // console.log(sql);
            if (err) reject(err);
            resolve(rows);
        });
    });
}
module.exports = query;