import React from 'react';

import Letter from './Letter';

import { generateBankLetters } from '../../libs/generateLetters';

export default class LetterBank extends React.Component {
	constructor(props) {
		super(props);

		this.removeFromBank = this.removeFromBank.bind(this);

		this.state = {
			letters: []
		};
	}

	removeFromBank(letterToRemove) {
		let letters = this.state.letters;
		for (let letter of letters) {
			if (letterToRemove.id === letter.id) {
				letters.splice(letters.indexOf(letter), 1);
			}
		}
		this.setState({ letters: letters });
	}

	componentDidMount() {
		this.setState({ letters: generateBankLetters(this.props.quantity) });
	}
	
	render() {
		let removeFromBank = this.removeFromBank;
		let letterBlock = <Letter remove={removeFromBank} id={letter.id} key={letter.id} value={letter.value} />;
		let letters = this.state.letters.map(letter => letterBlock);

		let style = { backgroundColor: this.props.colours.primary };

		return (
			<div className="letterBank">
				<div className="divider" style={style}></div>
				<ul className="letters">
					{letters}
				</ul>
			</div>
		);
	}
}
