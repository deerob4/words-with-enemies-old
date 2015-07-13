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
		var roundStyles = { color: this.props.colours.primary }
		var userStyles = { color: this.props.colours.user };
		var computerStyles = { color: this.props.colours.computer };

		return (
			<div className="scoreboard">
				<span className="col-sm-4 username" style={userStyles}>Username - {this.state.userScore}</span>
				<span className="col-sm-4" style={roundStyles}>Round {this.state.round}</span>
				<span className="col-sm-4 computer" style={computerStyles}>Computer - {this.state.computerScore}</span>
			</div>
		);
	}
});

module.exports = Scoreboard;