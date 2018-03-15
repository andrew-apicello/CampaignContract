// allows us to access to the provider from anywhere in our code
import Web3 from 'web3';

let web3;


if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
	//code is executed inside browser and metamask is available
	web3 = new Web3(window.web3.currentProvider);
} else {
	// code is executed on the server or the user is not running metamask
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/IxEZFpfeLQJRSdj4NdBS'
		);
	web3 = new Web3(provider);
}

export default web3;