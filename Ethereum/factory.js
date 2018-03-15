// allows us to access to the deployed factory instance from anywhere in our code
import web3 from './web3';
import CampaignFactory from './CompiledContracts/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x5274e432B3B76C0B40931E913F6d715271Dcec71'
	);

export default instance;