const tracer = require('dd-trace').init();
let dotenv =  require('dotenv');
dotenv.config('./env');
console.log(process.env,333)
var koa = require('koa');
var app =new koa();

const { logger, accessLogger } = require('./logger');
// tracer.use('koa', {
//     service: 'pg-cluster'
//   })
app.use(accessLogger());
const static = require('koa-static');
app.use(static(__dirname + '/static'));

app.listen(3000);