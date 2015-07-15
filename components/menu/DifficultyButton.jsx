var React = require('react');
var Game = require('../game/Game.jsx');
var capitalizeFirstLetter = require('../../utils/capitalizeFirstLetter.js')
var animateMenu = require('../../utils/animateMenu.js');

var DifficultyButton = React.createClass({
	playGame: function() {
		React.render(<Game colours={this.props.colours} difficulty={this.props.difficulty} />, document.getElementById('game'))
		animateMenu('.menu', 'bounceOutRight', '.game', 'bounceInLeft');
	},

	render: function() {
		var buttonID = this.props.difficulty + 'Button';
		var label = capitalizeFirstLetter(this.props.difficulty)
		var style = {
			color: this.props.colours.button,
			borderColor: this.props.colours.button
		}
		return (
			<div className="difficultyButton menuButton" id={buttonID} style={style} onClick={this.playGame}>{label}</div>
		);
	}

});

module.exports = DifficultyButton;