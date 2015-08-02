import React from 'react';

import Letter from './Letter';

export default class UserWord extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			letters: []
		};
	}
	removeFromWord(letterToRemove)  {
		let letters = this.state.letters;
		for (let letter of letters) {
			if (letterToRemove.id === letter.id) {
				letters.splice(letters.indexOf(letter), 1);
			}
		}
	}
	addToWord(letter)  {
		// this.state.letters.push({id: 1, value: 'a'})
		let letters = this.state.letters;
		letters.push({ id: letter.id, value: letter.value });
		this.setState({ letters: letters });
	}
	render() {
		let letterBlock = <Letter remove={this.removeFromWord} value={letter.value} key={letter.id} />;
		var letters = this.state.letters.map(letter => letterBlock);
		let messageStyle = { color: this.props.colours.userTertiary };
		let message = this.state.letters.length ? '' : <div className="formedWordMessage" style={messageStyle}>Make a word with the letters!</div> ;
		let wordStyle = {
			backgroundColor: this.props.colours.userSecondary,
			borderColor: this.props.colours.userTertiary
		};

		let podge = this.addToWord.bind({ id: 1, value: 'a' });

		return (
			<div onClick={podge} className="formedWord wordRotate" id="userWord" style={wordStyle}>
				{message}
				<ul>{letters}</ul>
			</div>
		);
	}
}
