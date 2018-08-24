'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _url = require('url');

var _routes = require('./routes.json');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SEGMENT_TYPES = {
  LEXEME: 'LEXEME',
  PARAMETER: 'PARAMETER'
};

var paramRegexPattern = '([A-Za-z0-9-_#$~%]+)';
var singleParamRegex = /\[(\w+)\]/; // -> Not /g(lobal)
var paramsRegex = /\[(\w+)\]/g; // -> /g(lobal)
var slashRegex = /\//g;
var slashRegexPattern = '\\/';

function getRegexFromPattern(pattern) {
  var rex = pattern.replace(slashRegex, slashRegexPattern).replace(paramsRegex, paramRegexPattern);

  return '^' + rex + '/?$';
}

function getSegmentsFromPattern(pattern) {
  var tokens = pattern.split('/').filter(function (token) {
    return token.length > 0;
  });
  var segments = [];

  for (var i = 0; i < tokens.length; i += 1) {
    var currentSegment = {
      position: i
    };

    if (singleParamRegex.test(tokens[i])) {
      var _singleParamRegex$exe = singleParamRegex.exec(tokens[i]),
          _singleParamRegex$exe2 = _slicedToArray(_singleParamRegex$exe, 2),
          paramName = _singleParamRegex$exe2[1];

      currentSegment.type = SEGMENT_TYPES.PARAMETER;
      currentSegment.label = paramName;
    } else {
      currentSegment.type = SEGMENT_TYPES.LEXEME;
      currentSegment.label = tokens[i];
    }

    segments.push(currentSegment);
  }

  return segments;
}

function extractParams(url, segments) {
  var params = {};

  var urlSegments = url.split('/').filter(function (token) {
    return token.length > 0;
  });

  var paramSegments = segments.filter(function (s) {
    return s.type === SEGMENT_TYPES.PARAMETER;
  });

  paramSegments.forEach(function (paramSegment) {
    params[paramSegment.label] = urlSegments[paramSegment.position];
  });

  return params;
}

function parseRoutes() {
  return _routes2.default.map(function (r) {
    return Object.assign({}, r, {
      regex: new RegExp(getRegexFromPattern(r.pattern)),
      segments: getSegmentsFromPattern(r.pattern)
    });
  });
}

var parsedRoutes = parseRoutes();

function processRoute(url) {
  var parsedUrl = (0, _url.parse)(url, true);

  var pathname = parsedUrl.pathname,
      query = parsedUrl.query;


  var matched = parsedRoutes.filter(function (r) {
    return r.regex.test(pathname);
  });

  if (matched.length > 0) {
    var selectedRoute = matched[0];

    var routeResult = Object.assign({}, selectedRoute, {
      props: Object.assign({}, selectedRoute.props, query, extractParams(url, selectedRoute.segments))
    });

    return routeResult;
  }

  return null;
}

function getQuery(request) {

  var props = {};

  if (request && request.url) {
    props = Object.assign({}, props, request.url.props);
  }

  if (request && request.query && request.query.data) {
    var data = JSON.parse(request.query.data);
    props = Object.assign({}, props, data);
  }

  // Server Side Only
  if (!process.browser && request && request.query) {
    props = Object.assign({}, props, request.query);
  }

  return props;
}

exports.default = {
  processRoute: processRoute,
  getQuery: getQuery
};