var koa = require('koa')
var app = koa()

app.use(function *(next){
  console.log(1)
  this.body = 'Hello World'
  yield next
  console.log(2)
})

app.use(function *(next){
  console.log(3)
  this.body += ' Second'
  yield next
  console.log(4)
})

app.use(function *(next){
  console.log(5)
  this.body += ' Thrid'
  yield next
  console.log(6)
})

app.listen(3000)
