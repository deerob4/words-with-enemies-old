var React = require('react');
var Game = require('../game/Game.jsx');

var MenuButtons = React.createClass({
	viewSource: function() {
		window.open('http://github.com/deerob4/words-with-enemies', '_blank');
	},

	playGame: function() {
		React.render(<Game colours={this.props.colours} />, document.getElementById('game'));
	},

	render: function() {
		var style = {
			color: this.props.colours.button,
			borderColor: this.props.colours.button
		}
		return (
			<div className="setupButtons animated bounceInUp">
				<div style={style} className="menuButton" id="instructionsButton">
					Instructions
				</div>
				<div style={style} className="menuButton" id="playButton" onClick={this.playGame}>
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