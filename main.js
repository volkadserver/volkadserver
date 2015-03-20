var koa = require('koa');
var favi = require('koa-favicon');
var _ = require('lodash');
var ua = require('useragent');
var rt = require('koa-response-time');

var app = koa();
var criteria =  {
  name: 'lol',
  os: 'mac',
  randOthrThng:50
};
var flight = _.clone(criteria);
flight.url = 'lol';
var flights = [];

for(var i = 0; i < 1000000; i++) {
  var oss = ['mac', 'pc'];
  var name = Math.random().toString(32);

  flights.push({
    os: oss[Math.round(Math.random())],
    name: Math.random().toString(32),
    randOthrThng: Math.floor(Math.random()*100),
    url: 'http://lol/;'
  });
}
flights.push(flight);

app.use(rt()); 
app.use(favi()); 


app.use(function *() {
  var res = _.where(flights, { os: 'pc', randOthrThng: 50});
  this.body = JSON.stringify(res.length, null, 2);

});

app.listen(8081);
