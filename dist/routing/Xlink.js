'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/link');

var _link2 = _interopRequireDefault(_link);

var _xrouter = require('./xrouter');

var _xrouter2 = _interopRequireDefault(_xrouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XLink = function (_PureComponent) {
  _inherits(XLink, _PureComponent);

  function XLink(props) {
    _classCallCheck(this, XLink);

    var _this = _possibleConstructorReturn(this, (XLink.__proto__ || Object.getPrototypeOf(XLink)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(XLink, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          href = _props.href,
          prefetch = _props.prefetch,
          otherProps = _objectWithoutProperties(_props, ['children', 'href', 'prefetch']);

      try {

        if (href) {
          var selectedRoute = _xrouter2.default.processRoute(href);

          if (!selectedRoute) {
            throw new Error('No x router match for [' + href + ']');
          }

          return _react2.default.createElement(
            _link2.default,
            {

              href: {
                pathname: selectedRoute ? selectedRoute.target : href,
                query: { data: selectedRoute ? JSON.stringify(selectedRoute.props) : null }
              },
              prefetch: prefetch,
              as: selectedRoute.currentUrl || href
            },
            typeof children === 'string' ? children : _react2.default.cloneElement(children, Object.assign({}, otherProps, {
              href: selectedRoute.currentUrl || href
            }))
          );
        }

        return typeof children === 'string' ? children : _react2.default.cloneElement(children, Object.assign({}, otherProps, { href: href }));
      } catch (err) {

        // console.warn('X Router error: ', err.message)
        return _react2.default.cloneElement(children, Object.assign({}, otherProps, { href: '/es/error' }));
      }
    }
  }]);

  return XLink;
}(_react.PureComponent);

XLink.propTypes = {};

exports.default = XLink;