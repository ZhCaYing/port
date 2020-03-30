const express = require("express");
const Router = express.Router();
const {
    formadata
} = require('../utils/formadata');
const {
    mysql: query
} = require('../db');
Router.route('/')
    // 获取所有数据
    .get(async (req, res) => {
        // console.log(req.query);
      
        let sql = 'SELECT * FROM dindan';
        let data = await query(sql);
        let result = {};
        // let {page,num}=req.query;
        if (req.query.page) {
            let {
                page,
                num
            } = req.query;
            let index = (page - 1) * num;
            let sql1 = `SELECT * FROM dindan limit ${index},${num}`;
            let data1 = await query(sql1);
            // console.log(data1.length);
            let pages = Math.ceil(data1.length / num);
            result = {
                type: 1,
                mes: 'suess',
                total: data.length,
                pages,
                page,
                num,
                list: data1
            }
        } else {
            result = {
                type: 0,
                mes: 'flit',
                total: data.length,
                list: data
            }
        }
        res.send(formadata(result));
        // window.console.log(data);
    })
    // 添加数据
    .post(async (req, res) => {
        let {
            name,
            price,
            prices,
            kucun,
            goumai,
            jpgs,
            tiem,
            types
        } = req.body;
        let sql = `INSERT INTO dindan(name,prcie,prcies,goumai,kucun,jpgs,tiem,types) VALUES('${name}','${price}','${prices}','${goumai}','${kucun}','${jpgs}','${tiem}','${types}')`;
        let data = await query(sql);
        res.send(formadata(data));
    });
// 获取对应id
Router.route('/:id')
    .get(async (req, res) => {
        let {
            id
        } = req.params;
        let sql = `SELECT * FROM dindan where id=${id}`;
        let data = await query(sql);
        if (data.length) {
            res.send(data);
        } else {
            res.send(formadata({
                code: 0
            }));
        }
    })
    // 删除对应id的数据;
    .delete(async (req, res) => {
        let {
            id
        } = req.params;
        let sql = `DELETE FROM dindan WHERE id in(${id})`;
        let data = await query(sql);
        res.send(formadata(data))
    })
    // 修改;
    .put(async (req, res) => {
        let data = '';
        let {
            id
        } = req.params;
        let {
            name,
            price,
            prices,
            kucun,
            goumai,
            jpgs,
            tiem,
            types
        } = req.body;
        if (req.body.name,
            req.body.price,
            req.body.prices,
            req.body.kucun,
            req.body.goumai,
            req.body.jpgs,
            req.body.tiem,
            req.body.types) {
            let sql = `UPDATE dindan SET  name='${name}',prcie='${price}',prcies='${prices}',kucun='${kucun}',goumai='${goumai}',jpgs='${jpgs}',tiem='${tiem}',types='${types}' WHERE id=${id}`;
            data = await query(sql);
        }
        if (req.body.name && req.body.tiem) {
            let sqla = `UPDATE dindan SET  name='${name}',tiem='${tiem}' WHERE id=${id}`;
            data = await query(sqla)
        }
        res.send(formadata(data));

    })
module.exports = Router;