import React from 'react';
import animateMenu from '../../libs/animateMenu';

export default class MenuButtons extends React.Component {
	viewSource() {
		window.open('http://github.com/deerob4/words-with-enemies', '_blank');
	}
	chooseDifficulty() {
		animateMenu('#menuButtons', 'bounceOutRight', '#difficultyButtons', 'bounceInLeft');
	}
	render() {
		let style = {
			color: this.props.colours.button,
			borderColor: this.props.colours.button
		};
		return (
			<div className='setupButtons animated bounceInUp' id="menuButtons">
				<div style={style} className="menuButton" id="instructionsButton">
					Instructions
				</div>
				<div style={style} className="menuButton" id="playButton" onClick={this.chooseDifficulty}>
					Play Now
				</div>
				<div style={style} className="menuButton" id="sourceButton" onClick={this.viewSource}>
					Source
				</div>
			</div>
		);
	}
}
