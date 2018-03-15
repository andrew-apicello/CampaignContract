import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import Layout from '../../Components/layout';
import factory from '../../Ethereum/factory';
import web3 from '../../Ethereum/web3';

class CampaignNew extends Component {
	state = {
		minimumContrubution: ''
	};

	onSubmit = async (event) => {
		event.preventDefault();

		const accounts = await web3.eth.getAccounts();
		await factory.methods.createCampaign(this.state.minimumContrubution).send({
			from: accounts[0]
		});
	}

	render() {
		return (
			<Layout>
				<h3>Create a Campaign</h3>

				<Form onSubmit={this.onSubmit}>
					<Form.Field>
						<label>
						Minimum Contribution
						</label>
						<Input 
						label="wei" 
						labelPosition='right'
						value={this.state.minimumContrubution}
						onChange = {event => this.setState({minimumContrubution: event.target.value})}
						/>
					</Form.Field>
					<Button primary>Create!</Button>
				</Form>

			</Layout>
		);
	}
}

export default CampaignNew;