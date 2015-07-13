var React = require('react');
var LetterBank = require('./LetterBank.jsx');
var generateColours = require('../utils/generateColours');

var WordsWithEnemies = React.createClass({
	getInitialState: function() {
		return {
			colours: {}
		};
	},

	componentDidMount: function() {
		this.setState({
			colours: generateColours.game()
		});
	},

	render: function() {
		return (
			<LetterBank quantity="23" />
		);
	}
});


React.render(React.createElement(WordsWithEnemies), document.getElementById('game'));
