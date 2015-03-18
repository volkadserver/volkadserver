var koa = require('koa');

var app = koa();

app.use(function *() {
  this.body = JSON.stringify(this.request.header, null, 2);
});

app.listen(8081);
