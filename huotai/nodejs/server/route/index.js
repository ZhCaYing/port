const express = require('express');
const Router = express.Router();
Router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") { //特殊请求：发送了请求头的那些请求
        res.sendStatus(200); /*让options请求快速返回*/
    } else {
        next();
    }
});
Router.use(express.urlencoded({}));
const goodsRouter=require("./goods");
const usesra=require('./usesr');
const dindan = require('./dindan');
let {verify}=require('../utils/token');
let {formadata}=require('../utils/formadata');
Router.use('/goods',goodsRouter);
Router.use("/usesr",usesra);
Router.use("/dindan",dindan);
Router.get('/verify',(req,res)=>{
    let Authorization=req.get('Authorization');
    let result=verify(Authorization);
    if(result){
        res.send(formadata());
    }else{
        res.end(formadata({code:0}));
    }
});
module.exports=Router;