//引入mysql模块
const mysql=require('mysql');
//创建连接池
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'xz',
	connectionLimit:20
});
//导出连接池数据
module.exports=pool;
//131654616
