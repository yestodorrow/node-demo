const Koa = require('koa')
const app = new Koa()

app.use( async ( ctx ) => {
  const { url } = ctx.request
  ctx.body = `url:${url}`
})
app.listen(3000)
