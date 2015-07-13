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
		return (
			<div className="game">
				<Scoreboard colours={this.state.colours} />
				<LetterBank colours={this.state.colours} quantity="15" />
			</div>
		);
	}

});

module.exports = Game;