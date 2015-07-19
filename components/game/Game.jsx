var React = require('react');
var LetterBank = require('./LetterBank.jsx');
var Scoreboard = require('./Scoreboard.jsx');
var GameButtons = require('./buttons/GameButtons.jsx');
var UserWord =  require('./UserWord.jsx');
var ComputerWord = require('./ComputerWord.jsx');
var generateColours = require('../../utils/generateColours');

var Game = React.createClass({
	getInitialState: function() {
		return {
			colours: this.props.colours
		};
	},

	randomColours: function() {
		this.setState({
			colours: generateColours.game()
		});
	},

	render: function() {
		var difficulty = this.props.difficulty;
		var quantities = { easy: 15, medium: 10, hard: 4 };
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

});

module.exports = Game;