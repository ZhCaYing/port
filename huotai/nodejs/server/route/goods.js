/*
 * 商品信息管理
 * 添加商品
 * 查询商品数据
 * 修改
 * 删除
 * 批量删除
 */
const express=require('express');
const Router=express.Router();
const {
    formadata
}=require('../utils/formadata');
// Router.get('/kucun', (req, res) => {
//     // console.log(req);
//     let {
//         id
//     }= req.query;
//     // console.log(id);
//     let result = formadata({
//         data: 5
//     });
//     res.send(result);
// });
const {
    mysql: query
}=require('../db');
Router.route('/')
    // 获取所有数据
    .get(async (req, res) => {
        let sql='SELECT * FROM showp';
        let data=await query(sql);
        // console.log(data);
        // let sql1 = "";
        let result={};
        if (req.query.page) {
            let {
                page,
                num
            }=req.query;
            let index=(page-1)*num;
            let sql1=`SELECT * FROM showp limit ${index},${num}`;
            let data1=await query(sql1);
            let pages=Math.ceil(data1.length/num);
            result={
                type: 1,
                mes: '成功',
                total: data.length,
                pages,
                page,
                num,
                list: data1
            }
        } else {
            result={
                type: 0,
                mes: '成功',
                total: data.length,
                list: data
            }
        }
        res.send(result);
    })
    // 添加数据http://localhost:1911/goods(post发送请求)
    .post(async (req, res) => {
        // console.log(req.body);
        let {
            name,
            id,
            FL,
            url,
            price,
            prices,
            datetiem,
            num
        }=req.body.query;
        // console.log( name,
        //     id,
        //     FL,
        //     url,
        //     price,
        //     prices,
        //     datetiem,
        //     num);
        let sql=`INSERT INTO showp(minzi,types,prcie,prices,kucun,teim,jpgs,ids) VALUES('${name}','${FL}','${price}','${prices}','${num}','${datetiem}','${url}','${id}')`;
        let data=await query(sql);
        res.send(formadata(data))
    });
Router.route('/:id')
    // 获取对应id的数据;
    .get(async (req, res) => {
        let {
            id
        }=req.params;
        // console.log(id);
        let sql=`SELECT * FROM showp where id=${id}`;
        let data=await query(sql);
        if (data.length) {
            res.send(formadata({
                code: 1,
                data
            }));
        } else {
            res.send(formadata({
                code: 0
            }))
        }
        // console.log(data.length);
    })
    // 删除对应id的数据;
    .delete(async (req, res) => {
        console.log(req.params);
        let {
            id
        }=req.params;
       
        let sql=`DELETE FROM showp WHERE id in(${id})`;
        let data=await query(sql);
        res.send(formadata(data))
    })
    // 修改;
    .put(async (req, res) => {
        // console.log(req.body);
        let data='';
        let {
            id
        }=req.params;
        let {
            name,
            price,
            kucun,
            prices,
            qita,
            types
        }=req.body;
        if (req.body.name,
            req.body.price,
            req.body.kucun,
            req.body.prices,
            req.body.qita,
            req.body.types) {
            let sql=`UPDATE showp SET  minzi='${name}' ,prcie='${price}',kucun='${kucun}',prices='${prices}',qita='${qita}',types='${types}' WHERE id=${id}`;
            data=await query(sql);
        }
        if (req.body.name&&req.body.qita) {
            let sql=`UPDATE showp SET  minzi='${name}' ,qita='${qita}' WHERE id=${id}`;
            data=await query(sql)
        }
        res.send(formadata(data));
    });

module.exports=Router;