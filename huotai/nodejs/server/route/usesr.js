const express = require('express');
const Router = express.Router();
const {
    formadata
} = require('../utils/formadata');
const {
    create
} = require('../utils/token');
// 查询;
// 增加;
// 修改;
// 获取;
const {
    mysql: query
} = require('../db');
// 获取所有用户
Router.post('/soname', async (req, res) => {
        // console.log(req.body);
        let sql = `SELECT * FROM usename`;
        let data = await query(sql);
        let result = {};
        if (req.body.query.page) {
            let {
                page,
                num
            } = req.body.query;
            let index = (page - 1) * num;
            let sqla = `SELECT * FROM usename limit ${index},${num}`;
            let dataa = await query(sqla);
            let pages = Math.ceil(dataa.length / num);
            result = {
                type: 1,
                mes: '成功',
                total: data.length,
                pages,
                page,
                num,
                list: dataa
            }
        } else {
            result = {
                type: 0,
                mes: '成功',
                total: data.length,
                list: data
            }
        }
        res.send(result);
    }

);
// 查询用户
Router.post('/check', async (req, res) => {
    // console.log(req);
    let {
        name
    } = req.body;
    let sql = `SELECT * FROM usename WHERE name='${name}'`;
    let data = await query(sql);
    if (data.length) {
        res.send(formadata())
    } else {
        res.send(formadata({
            code: 0
        }))
    }
    // console.log(data);
});
// 增加;
Router.post("/zenja", async (req, res) => {
    let {
        name,paws,phone,email,sheri,sex,biezhu
    } = req.body.qurey;
    let sql = '';
    if (name && paws && email && phone) {
        sql = `INSERT INTO usename(name,paw,email,phone,sheri,biezhu,sex) VALUES('${name}','${paws}','${email}','${phone}','${sheri}','${biezhu}','${sex}')`;
        // console.log(sql);
    } else if (name && paws && email) {
        sql = `INSERT INTO usename(name,paw,email) VALUES('${name}','${paws}','${email}')`;
    } else if (name && paws) {
        sql = `INSERT INTO usename(name,paw) VALUES('${name}','${paws}')`;
    }
    let data = await query(sql);
    if (data.affectedRows) {
        res.send(formadata({
            code: 1
        }))
    } else {
        res.send(formadata({
            code: 0
        }))
    }
});
// 删除;
Router.post('/dele', async (req, res) => {
    // console.log(req.body.qurey);
    let {
        id
    } = req.body.qurey;
    let sql = `delete from usename where id in(${id})`;
    let data = await query(sql);
    if (data.affectedRows) {
        res.send(formadata({
            code: 1
        }))
    } else {
        res.send(formadata({
            code: 0
        }))
    }
});
// 修改;
Router.post('/setr', async (req, res) => {
    // console.log(req.body);
    let {
        id,
        name,
        paws,
        email,
        citoy,
        qianm,
        zhiye,
        pinfen,
        sex,
        tiem
    } = req.body;
    let sql = `UPDATE usename SET name = '${name}',paw='${paws}',email='${email}',citoy='${citoy}',qianm='${qianm}',zhiye='${zhiye}',pinfen='${pinfen}',sex='${sex}',tiem='${tiem}' WHERE id ='${id}'`;
    // console.log(sql);
    let data = await query(sql);
    // console.log(data);
    if (data.affectedRows) {
        res.send(formadata({
            code: 1
        }));
    } else {
        res.send(formadata({
            code: 0
        }));
    }
});
// 登录
Router.post('/login', async (req, res) => {
    // console.log(req.body);
    let {
        name,
        paws,
        keep
    } = req.body;
    // console.log(req.body)
    let sql = `SELECT * FROM usename WHERE name='${name}' AND paw='${paws}'`;
    let data = await query(sql);
    // console.log(data);
    if (data.length) {
        let token = '';
        if (keep) {
            token = create(name);
        }
        res.send(formadata({
            code: 1,
            lognametoken: token,
            data: {
                name: data[0].name
            }
        }));
    } else {
        res.send(formadata({
            code: 0
        }));
    }
});
module.exports = Router;