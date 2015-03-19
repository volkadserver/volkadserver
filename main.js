var koa = require('koa');
var favi = require('koa-favicon');
var _ = require('lodash');
var ua = require('useragent');
var rt = require('koa-response-time');

var app = koa();
var criteria =  {
  name: 'lol',
  os: 'mac',
  randOthrThng:434
};
var flight = _.clone(criteria);
flight.url = 'lol';
var flights = [];

for(var i = 0; i < 10000; i++) {
  flights.push({});
}
flights.push(flight);

app.use(rt()); 
app.use(favi()); 


app.use(function *() {
  var res = _.findWhere(flights, criteria);
  this.body = JSON.stringify(res, null, 2);
});

app.listen(8081);
