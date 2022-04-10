const tracer = require('dd-trace').init();
var koa = require('koa');
var app =new koa();
const cors = require('koa-cors');
app.use(cors());

app.use((ctx)=>{
    console.log(ctx.request.url)
    ctx.body={status:200,msg:'测试的返回数据',data:ctx.request.url};
});

app.listen(3001);