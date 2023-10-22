const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',  // URL, який ви хочете проксіювати
    createProxyMiddleware({
      target: 'https://favqs.com',  // Адреса віддаленого сервера
      changeOrigin: true,
    })
  );
};