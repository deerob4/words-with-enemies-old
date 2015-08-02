import React from 'react';

import generateLetterColours from '../../libs/generateColours';

export default class Letter extends React.Component {
	constructor(props) {
		super(props);

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
			var letterInfo = { id: this.props.id, value: this.props.value };
			var remove = this.props.remove.bind(null, letterInfo);
		}

		return (
			<li className="letter" onClick={remove} style={this.state}>{this.props.value}</li>
		)
	}
}
