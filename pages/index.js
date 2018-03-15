import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';
import factory from '../Ethereum/factory';
import Layout from '../Components/layout';

class CampaignIndex extends Component {
	static async getInitialProps(){
		const campaigns = await factory.methods.getDeployedCampaigns().call();
		return { campaigns };
	}


	renderCampaigns(){
		const items = this.props.campaigns.map(address =>{
			return {
				header: address,
				description:<a>View Campaign</a>,
				fluid: true
			};
		});

		return <Card.Group items={items} />;
	}

	// React expects something to be rendered in a component
	render(){
		return (
		<Layout>
			<div>
				<h3>Open Campaigns</h3>
				<Button
				floated = "right"
				content= "Create Campaign"
				icon = "add circle"
				primary
				/>
				{this.renderCampaigns()}

			</div>
		</Layout>
		);
	}
}

//next always expects an export
export default CampaignIndex;