var React = require('react');
var generateLetters = require('../../../utils/generateLetters.js');

var ConsonantButton = React.createClass({
	getInitialState: function() {
		return {
			consonantsLeft: 5 
		};
	},

	newConsonant: function() {
		this.setState({ consonantsLeft: this.state.consonantsLeft - 1 });
		return generateLetters.consonant();
	},

	render: function() {
		return (
			<div className="gameButton" style={this.props.style} onClick={this.newConsonant}>Consonant please!</div>
		);
	}

});

module.exports = ConsonantButton;