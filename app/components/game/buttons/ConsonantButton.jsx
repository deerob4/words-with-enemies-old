import React from 'react';

import generateConsonant from '../../../libs/generateLetters.js';

export default class ConsonantButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			consonantsLeft: 5
		};
	}
	newConsonant() {
		this.setState({ consonantsLeft: this.state.consonantsLeft - 1 });
		return generateConsonant();
	}
	render() {
		return (
			<div className="gameButton" 
					 style={this.props.style} 
					 onClick={this.newConsonant}>
					 Consonant please!
			</div>
		);
	}
}
