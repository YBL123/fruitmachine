const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(createProxyMiddleware('/api', { target: 'http://localhost:8000' }))
}

//* this allows the 2 servers to be able to talk to each other
//* instead of always having to write http://localhost:8000 now I can just use /api