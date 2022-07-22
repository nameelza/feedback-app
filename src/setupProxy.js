const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/feedback?_sort=id&_order=desc", {
      target: "http://localhost:5000",
    })
  );
};
