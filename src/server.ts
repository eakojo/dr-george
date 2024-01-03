
const http = require('http');
const createServer = http.createServer

const url = require('url')
const parse = url.parse

const next = require('next')

// eslint-disable-next-line no-undef
const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      await handle(req, res, parsedUrl)

    } catch (err) {
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
  })
})
