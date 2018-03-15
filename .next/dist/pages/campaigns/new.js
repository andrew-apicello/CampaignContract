'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _layout = require('../../Components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _factory = require('../../Ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../Ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\aca4c\\Desktop\\Ethereum Smart Contracts\\Project_Campaign\\pages\\campaigns\\new.js?entry';


var CampaignNew = function (_Component) {
	(0, _inherits3.default)(CampaignNew, _Component);

	function CampaignNew() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, CampaignNew);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			minimumContrubution: ''
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var accounts;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();

								_context.next = 3;
								return _web2.default.eth.getAccounts();

							case 3:
								accounts = _context.sent;
								_context.next = 6;
								return _factory2.default.methods.createCampaign(_this.state.minimumContrubution).send({
									from: accounts[0]
								});

							case 6:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(CampaignNew, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 23
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			}, 'Create a Campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
					fileName: _jsxFileName,
					lineNumber: 26
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
				label: 'wei',
				labelPosition: 'right',
				value: this.state.minimumContrubution,
				onChange: function onChange(event) {
					return _this3.setState({ minimumContrubution: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			})), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, 'Create!')));
		}
	}]);

	return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIkxheW91dCIsImZhY3RvcnkiLCJ3ZWIzIiwiQ2FtcGFpZ25OZXciLCJzdGF0ZSIsIm1pbmltdW1Db250cnVidXRpb24iLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFROztBQUN2QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7Ozs7Ozs7Ozs7Ozs7O29OQUNMLEE7d0JBQ3NCLEEsQUFEZDtBQUFBLEFBQ1AsVyxBQUdEO3dGQUFXLGlCQUFBLEFBQU8sT0FBUDtRQUFBO2tFQUFBO2VBQUE7dUNBQUE7WUFDVjtjQURVLEFBQ1YsQUFBTTs7d0JBREk7ZUFHYSxjQUFBLEFBQUssSUFIbEIsQUFHYSxBQUFTOztZQUExQjtBQUhJLDRCQUFBO3dCQUFBO2lDQUlKLEFBQVEsUUFBUixBQUFnQixlQUFlLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxxQkFBMUMsQUFBK0Q7ZUFDOUQsU0FMRyxBQUlKLEFBQW9FLEFBQ25FLEFBQVM7QUFEMEQsQUFDekUsU0FESzs7WUFKSTtZQUFBO3dCQUFBOztBQUFBO2dCQUFBO0E7Ozs7Ozs7Ozs7MkJBU0Y7Z0JBQ1I7OzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFFQSxzQ0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUI7ZUFBckI7aUJBQUEsQUFDQztBQUREO3NCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFHQSx5Q0FBQSxBQUFDO1dBQUQsQUFDTSxBQUNOO21CQUZBLEFBRWMsQUFDZDtXQUFPLEtBQUEsQUFBSyxNQUhaLEFBR2tCLEFBQ2xCO2NBQVkseUJBQUE7WUFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLHFCQUFxQixNQUFBLEFBQU0sT0FBbkQsQUFBUyxBQUFjLEFBQW1DO0FBSnRFOztlQUFBO2lCQUxGLEFBQ0MsQUFJQyxBQU9EO0FBUEM7QUFDQSx3QkFNRCxBQUFDLHlDQUFPLFNBQVI7ZUFBQTtpQkFBQTtBQUFBO01BaEJILEFBQ0MsQUFHQyxBQVlDLEFBS0g7Ozs7O0FBcEN3QixBLEFBdUMxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvYWNhNGMvRGVza3RvcC9FdGhlcmV1bSBTbWFydCBDb250cmFjdHMvUHJvamVjdF9DYW1wYWlnbiJ9