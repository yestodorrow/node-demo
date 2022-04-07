const tracer = require('dd-trace').init();
// const Koa = require("koa");
// // const koaBody = require("koa-body");
// const static = require('koa-static');
// // const cors = require('koa-cors');

// const app = new Koa();

// // app.use(koaBody());

// // app.use(static(path.join(__dirname)))

// app.use(static('static'))

// app.use(cors());

// app.listen(3000, () => {
//   console.log("server run on 127.0.0.1:3000");
// });

var koa = require('koa');
var app =new koa();

const static = require('koa-static');
app.use(static(__dirname + '/static'));
app.use((ctx)=>{
  console.log(ctx,33)
  this.body = 'Hello World';
});

app.listen(3000);