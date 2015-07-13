var React = require('react');

var Scoreboard = React.createClass({
	getInitialState: function() {
		return {
			round: 1,
			userScore: 0,
			computerScore: 0 
		};
	},

	updateRound: function() {
		this.setState({
			round: this.state.round + 1 
		});
	},

	updateUserScore: function() {
		this.setState({
			userScore: this.state.userScore + 1 
		});
	},

	updateComputerScore: function() {
		this.setState({
			computerScore: this.state.computerScore + 1 
		});
	},

	render: function() {
		return (
			<div className="scoreboard">
				<span>Username - {this.state.userScore}</span>
				<span>Round {this.state.round}</span>
				<span>Computer - {this.state.computerScore}</span>
			</div>
		);
	}
});

module.exports = Scoreboard;