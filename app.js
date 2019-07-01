const express=require('express');//引入express模块
const bodyParser=require('body-parser');//引入body-parser模块
const userRouter=require('./router/user.js');//引入路由文件路径
const productRouter=require('./router/product.js');//引入另一个路由文件路径
//创建web服务器
var app=express();
//监听端口
app.listen(8080);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extennded:false
}));
app.use('/user',userRouter);
app.use('/product',productRouter);
