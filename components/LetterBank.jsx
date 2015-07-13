var React = require('react');
var Letter = require('./Letter.jsx');

var generateLetters = require('../utils/generateLetters');

var LetterBank = React.createClass({
	getInitialState: function() {
		return {
			letters: []
		};
	},

	getDefaultProps: function() {
		return {
			quantity: 10
		};
	},

	componentDidMount: function() {
		var letters = generateLetters(this.props.quantity);
		this.setState({
			letters: letters 
		});
	},

	render: function() {
		var letters = this.state.letters.map(function(letter) {
			return ( <Letter key={letter.id} value={letter.value} /> )
		});

		return (
			<div className="letter-bank">
				<ul className="letters">
					{letters}
				</ul>
			</div>
		);
	}
});

module.exports = LetterBank;