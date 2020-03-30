// 导入模块
const express=require("express");
// 调用模块
const app=express();
// 引入自定义端口;
const {POST}=require("./config/config.json");

// 设置路由分支(决定URL/后的参数走的分支);
// 导入路由模块总结口
const allRouter=require("./route/index");
// 设置路径;
app.use(express.static("./"));
// 通过app调用路由总接口;
app.use(allRouter);
// 监听端口;
app.listen(POST,()=>{
  console.log(`开启服务器成功，请访问：${POST}`);
});