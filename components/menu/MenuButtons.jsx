var React = require('react');
var Game = require('../game/Game.jsx');
var Menu = require('../Menu.jsx');
var animateMenu = require('../../utils/animateMenu.js');

var MenuButtons = React.createClass({
	viewSource: function() {
		window.open('http://github.com/deerob4/words-with-enemies', '_blank');
	},

	chooseDifficulty: function() {
		animateMenu('#menuButtons', 'bounceOutRight', '#difficultyButtons', 'bounceInLeft');
		// React.unmountComponentAtNode(document.getElementById('menuButtons'));
	},

	render: function() {
		var style = {
			color: this.props.colours.button,
			borderColor: this.props.colours.button
		}
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

});

module.exports = MenuButtons;