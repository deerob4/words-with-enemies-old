var React = require('react');
var generateLetters = require('../../../utils/generateLetters.js');

var VowelButton = React.createClass({
	getInitialState: function() {
		return {
			vowelsLeft: 5 
		};
	},

	newVowel: function() {
		this.setState({ vowelsLeft: this.state.vowelsLeft - 1 });
		return generateLetters.vowel();
	},

	render: function() {
		return (
			<div className="gameButton" style={this.props.style} onClick={this.newVowel}>Vowel please!</div>
		);
	}

});

module.exports = VowelButton;