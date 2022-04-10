const tracer = require('dd-trace').init();
var koa = require('koa');
var app =new koa();

const static = require('koa-static');
app.use(static(__dirname + '/static'));

app.listen(3000);