var koa = require('koa');
var _ = require('lodash');
var ua = require('useragent');

var app = koa();
var flights = [
  { 
    flightName: 'test',
    family: 'Chrome',

    creatives: [
      { creativeName: 'creativetest', creativeContent: 'testcontent' }
    ]
  }
];


app.use(function *() {
  var start = new Date();
  var criteria = 
    _.pick(ua.parse(this.request.headers['user-agent']), 'family');
  var res = _.find(flights, criteria);
  if(res && res.creatives && res.creatives[0])
    this.body = res.creatives[0].creativeContent;
  else
    this.body = 'House ad';
  var end = new Date() - start;
  console.log('took: ', end);
});

app.listen(8081);
