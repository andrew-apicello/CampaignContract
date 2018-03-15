const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./CompiledContracts/CampaignFactory.json');

const provider = new HDWalletProvider(
	'what rib slush night aware grape hen sample crazy whip weapon express',
	'https://rinkeby.infura.io/IxEZFpfeLQJRSdj4NdBS'
	);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy from account: ', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
	.deploy({ data: compiledFactory.bytecode}) // make sure not to include initializing arguments
	.send({gas: '1000000', from: accounts[0] });

	console.log('Contract deployed to: ' + result.options.address);
};

deploy();