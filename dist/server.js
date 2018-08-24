'use strict';

var _http = require('http');

var _url = require('url');

var _next = require('next');

var _next2 = _interopRequireDefault(_next);

var _xrouter = require('./routing/xrouter');

var _xrouter2 = _interopRequireDefault(_xrouter);

var _app = require('./config/app');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = parseInt(process.env.PORT, 10) || 3000; /* eslint no-console: "off" */

var dev = process.env.NODE_ENV !== 'production';
var app = (0, _next2.default)({ dev: dev });

function logBootInfo() {
  console.log('- - - - - - - - - - - - - - - - - - - - -');
  console.log(' ');
  console.log(_app.APP_NAME + ' @ http://localhost:' + port);
  console.log(' ');
  console.log(_app.APP_AUTHOR + ' | ' + _app.AUTHOR_GITHUB);
  console.log(' ');
  console.log('- - - - - - - - - - - - - - - - - - - - -');
}

app.prepare().then(function () {
  (0, _http.createServer)(function (req, res) {
    var target = _xrouter2.default.processRoute(req.url);

    if (target) {
      app.render(req, res, target.target, target.props);
    } else {
      app.getRequestHandler()(req, res, req.url);
    }
  }).listen(port, function (err) {
    if (err) throw err;
    logBootInfo();
  });
});