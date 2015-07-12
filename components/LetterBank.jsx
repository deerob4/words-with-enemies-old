var React = require('react');
var Letter = require('./Letter.jsx');

var response = require('superagent')

var LetterBank = React.createClass({
	getInitialState: function() {
		return {
			letters: ['f', 'a', 'i', 'l', 'e', 'd', '!']
		};
	},

	getDefaultProps: function() {
		return {
			quantity: 10
		};
	},

	componentDidMount: function() {
		response
			.get('/api/letters')
			.query({ quantity: this.props.quantity })
			.end(function(err, res) { console.log(this) });
	},

	render: function() {
		var letters = this.state.letters.map(function(value) {
			return ( <Letter key={value} value={value} /> )
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