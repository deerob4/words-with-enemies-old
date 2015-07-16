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
		var userStyles = { color: this.props.colours.userPrimary };
		var computerStyles = { color: this.props.colours.computerPrimary };

		return (
			<div className="scoreboard">
				<span className="col-sm-4 userRotate" style={userStyles}>You - {this.state.userScore}</span>
				<span className="col-sm-4" style={roundStyles}>Round {this.state.round}</span>
				<span className="col-sm-4 computerRotate" style={computerStyles}>Computer - {this.state.computerScore}</span>
			</div>
		);
	}
});

module.exports = Scoreboard;