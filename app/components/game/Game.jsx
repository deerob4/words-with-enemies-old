import React from 'react';

import LetterBank from './LetterBank';
import Scoreboard from './Scoreboard';
import GameButtons from './buttons/GameButtons';
import UserWord from './UserWord';
import ComputerWord from './ComputerWord';

import generateGameColours from '../../libs/generateColours';

export default class Game extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			colours: this.props.colours
		};
	}
	randomColours() {
		this.setState({
			colours: generateGameColours()
		});
	}
	render() {
		let difficulty = this.props.difficulty;
		let quantities = { easy: 15, medium: 10, hard: 4 };
		return (
			<div className="game">
				<Scoreboard colours={this.state.colours} />
				<UserWord colours={this.state.colours} />
				<ComputerWord colours={this.state.colours} />
				<GameButtons randomColours={this.randomColours} colours={this.state.colours} />
				<LetterBank colours={this.state.colours} quantity={quantities[difficulty]} />
			</div>
		);
	}
}
