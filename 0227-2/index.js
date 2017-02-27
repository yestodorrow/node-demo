const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

function render(page) {
  return new Promise((resolve, reject) => {
    const viewUrl = `./view/${page}`
    fs.readFile(viewUrl, "binary", (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

async function route(url) {
  let view = '404.html'
  switch (url) {
    case '/':
      view = 'index.html'
      break
    case '/index':
      view = 'index.html'
      break
    case '/todo':
      view = 'todo.html'
      break
    case '/404':
      view = '404.html'
      break
    default:
      break
  }
  const html = await render(view)
  return html
}

app.use(async (ctx) => {
  const { url } = ctx.request
  let html = await route(url)
  ctx.body = html
})

app.listen(3000)
console.log('[demo] route-simple is starting at port 3000')
