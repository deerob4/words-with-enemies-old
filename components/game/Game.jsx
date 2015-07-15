var React = require('react');
var LetterBank = require('./LetterBank.jsx');
var Scoreboard = require('./Scoreboard.jsx');

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

		console.log(quantities.easy);

		return (
			<div className="game">
				<Scoreboard colours={this.state.colours} />
				<LetterBank colours={this.state.colours} quantity={quantities[difficulty]} />
			</div>
		);
	}

});

module.exports = Game;