var React = require('react');
var LetterBank = require('./LetterBank.jsx');
var Scoreboard = require('./Scoreboard.jsx');
var GameButtons = require('./buttons/GameButtons.jsx')

var Game = React.createClass({
	getInitialState: function() {
		return {
			colours: {} 
		};
	},

	componentDidMount: function() {
		this.setState({
			colours: this.props.colours 
		});
	},

	render: function() {
		var difficulty = this.props.difficulty;
		var quantities = { easy: 15, medium: 10, hard: 4 };

		return (
			<div className="game">
				<Scoreboard colours={this.state.colours} />
				<GameButtons colours={this.state.colours} />
				<LetterBank colours={this.state.colours} quantity={quantities[difficulty]} />
			</div>
		);
	}

});

module.exports = Game;