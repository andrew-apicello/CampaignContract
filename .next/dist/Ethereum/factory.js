'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./CompiledContracts/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// allows us to access to the deployed factory instance from anywhere in our code
var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0x5274e432B3B76C0B40931E913F6d715271Dcec71');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFxQjs7Ozs7O0FBRjVCO0FBSUEsSUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLElBQVQsQUFBYSxTQUM3QixLQUFBLEFBQUssTUFBTSwwQkFESyxBQUNoQixBQUEyQixZQUQ1QixBQUFpQixBQUVoQixBQUdEOztrQkFBQSxBQUFlIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvYWNhNGMvRGVza3RvcC9FdGhlcmV1bSBTbWFydCBDb250cmFjdHMvUHJvamVjdF9DYW1wYWlnbiJ9