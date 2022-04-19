let dotenv =  require('dotenv');
dotenv.config('./env');
// const tracer = require('dd-trace').init();
var koa = require('koa');
var app =new koa();
const cors = require('koa-cors');

console.log(process.env,33)
app.use(cors());
const { logger, accessLogger } = require('./logger');

app.use(accessLogger());

app.use((ctx)=>{
    console.log(ctx.request.url);
    ctx.set("",)
    ctx.body={status:200,msg:'测试的返回数据',data:ctx.request.url};
});

app.listen(3001);