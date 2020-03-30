/*
    需求：实现数据的CRUD操作
        * 连接数据库:connect()
        * 数据的CRUD操作 : find() update() remove() creat()
        * 关闭数据库 :close() 先有的
*/
const {
    MongoClient
} = require("mongodb");
const {
    DBurl,
    DBname
} = require("../consfig.json");
async function connect() {
    let client = await MongoClient.connect(DBurl);
    let db = client.db(DBname);
    return {
        db,
        client
    };
};
// 增加数据;
async function create(colname, data) {
    let {
        db,
        client
    } = await connect();
    let col = db.collection(colname);
    let result = await col.insertMany(data);
    client.close();
    return result;
};
// 删除数据;
async function remove(colname, query) {
    let {
        db,
        client
    } = await connect();
    let col = db.collection(colname);
    let result = await col.deleteMany(query);
    client.close();
    return result;
};
// 修改数据;
async function update(colname, query, newdata) {
    let col = db.collection(colname);
    let result = await col.updateMany(query, newdata);
    client.close();
    return result;
};
// 查询功能;
async function find(colname, query) {
    try {
        let {
            db,
            client
        } = await connect();
        let col = db.collection(colname);
        let result = await col.find(query).toArray();
        client.close();
        return result;
    } catch {
        console.log(err);
    };
};
// 暴露所有接口;
module.exports = {
    create,
    remove,
    update,
    find
}