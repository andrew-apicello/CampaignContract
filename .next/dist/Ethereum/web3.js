'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0; // allows us to access to the provider from anywhere in our code


if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	//code is executed inside browser and metamask is available
	web3 = new _web2.default(window.web3.currentProvider);
} else {
	// code is executed on the server or the user is not running metamask
	var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/IxEZFpfeLQJRSdj4NdBS');
	web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLEFBQU87Ozs7OztBQUVQLElBQUksWUFBSixHQUhBOzs7QUFNQSxJQUFJLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsT0FBTyxPQUFQLEFBQWMsU0FBbkQsQUFBNEQsYUFBWSxBQUN2RTtBQUNBO1FBQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FBdkIsQUFBTyxBQUFxQixBQUM1QjtBQUhELE9BR08sQUFDTjtBQUNBO0tBQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQXBDLEFBQWlCLEFBQ2hCLEFBRUQ7UUFBTyxBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNoQjtBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvYWNhNGMvRGVza3RvcC9FdGhlcmV1bSBTbWFydCBDb250cmFjdHMvUHJvamVjdF9DYW1wYWlnbiJ9