import React from 'react';

import generateVowel from '../../../libs/generateLetters';

export default class VowelButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			vowelsLeft: 5
		};
	}
	newVowel() {
		this.setState({ vowelsLeft: this.state.vowelsLeft - 1 });
		return generateVowel();
	}
	render() {
		return <div className="gameButton" style={this.props.style} onClick={this.newVowel}>Vowel please!</div>;
	}
}
