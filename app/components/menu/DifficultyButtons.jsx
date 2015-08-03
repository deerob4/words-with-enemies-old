import React from 'react';
import Game from '../game/Game.jsx';
import animateMenu from '../../libs/animateMenu.js';

export default class DifficultyButtons extends React.Component {
	playGame(difficulty) {
		console.log(difficulty);
		React.render(<Game colours={this.props.colours}
											 difficulty={difficulty} />,
											 document.getElementById('game')
								);
		animateMenu('.menu', 'bounceOutRight', '.game', 'bounceInLeft');
	}
	render() {
		let style = {
			color: this.props.colours.button,
			borderColor: this.props.colours.button
		};

		return (
			<div className="setupButtons" id="difficultyButtons">
				<div className="difficultyButton menuButton"
						 id="easyButton"
						 style={style}
						 onClick={this.playGame.bind(this, 'easy')}>
						 Easy
				</div>
				<div className="difficultyButton menuButton"
						 id="mediumButton"
						 style={style}
						 onClick={this.playGame.bind(this, 'medium')}>
						 Medium
				</div>
				<div className="difficultyButton menuButton"
						 id="hardButton"
						 style={style}
						 onClick={this.playGame.bind(this, 'hard')}>
						 Hard
				</div>
			</div>
		);
	}
}
