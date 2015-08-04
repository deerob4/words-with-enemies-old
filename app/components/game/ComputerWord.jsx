import React from 'react';

import Letter from './Letter';

export default class ComputerWord extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			letters: []
		};
	}
	
	render() {
		let message = this.state.letters.length ? '' : messageContent;
		let messageContent = <div className="formedWordMessage" style={messageStyle}>Computer word goes here!</div>;
		let messageStyle = { color: this.props.colours.computerTertiary };
		let letters = this.state.letters.map(letter => <Letter value={letter.value} key={letter.id} />);
		let wordStyle = {
			backgroundColor: this.props.colours.computerSecondary,
			borderColor: this.props.colours.computerTertiary
		};

		return (
			<div className="formedWord wordRotate" id="computerWord" style={wordStyle}>
				{message}
				<ul>{letters}</ul>
			</div>
		);
	}
}
