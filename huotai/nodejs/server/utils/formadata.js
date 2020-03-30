/*
    中间件处理返回的数据结构到前端;
    提示信息格式化处理：
    {
        code ：0/1 失败/成功,
        mes : 'fail/success',
        data : [{},{}]
    }
*/
function formadata(opt) {
    // console.log(opt);
    let datasd = {
        code: 1,
        mes: 'success',
        data: []
    }
    if (opt) {
        Object.assign(datasd, opt);
        if (opt.code == 0) {
            datasd.mes = 'fail';
        }
    }
    return datasd;
}
module.exports = {
    formadata
}