const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

const buildPath = path.resolve(__dirname,'CompiledContracts');
fs.removeSync(buildPath); //deletes previous compiled contract code

const campaignPath = path.resolve(__dirname,'Contracts','Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

const output = solc.compile(source,1).contracts; //contains both campaign and campaign factory 

fs.ensureDirSync(buildPath); //creates CompiledContract folder

for (let contract in output){
	fs.outputJsonSync(
		path.resolve(buildPath, contract.replace(':','') + '.json'),
		output[contract]
		);
}