const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api/match",
    createProxyMiddleware({
      target: "127.0.0.1:8000:8000",
      changeOrigin: true,
    })
  );
};
