import React from 'react';

import { generateLetterColours } from '../../libs/generateColours';

export default class Letter extends React.Component {
	constructor(props) {
		super(props);

		this.changeColours = this.changeColours.bind(this);

		this.state = {
			backgroundColour: '',
			borderColour: '',
			textColour: ''
		};
	}

	changeColours() {
		let newColours = generateLetterColours();

		this.setState({
			backgroundColour: newColours.backgroundColour,
			borderColour: newColours.borderColour,
			textColour: newColours.textColour
		});
	}

	componentDidMount() {
		this.changeColours();
	}
	
	render() {
		if (this.props.remove) {
			let letterInfo = { id: this.props.id, value: this.props.value };
			let remove = this.props.remove.bind(null, letterInfo);
		}

		return (
			<li className="letter" onClick={remove} style={this.state}>{this.props.value}</li>
		);
	}
}
