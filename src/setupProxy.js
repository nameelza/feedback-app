const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/feedback", {
      target: "http://localhost:5000",
    })
  );
};
