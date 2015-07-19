var React = require('react');
var Letter = require('./Letter.jsx');
var Divider = require('./Divider.jsx');
var request = require('superagent');

var generateLetters = require('../../utils/generateLetters');

var LetterBank = React.createClass({
	getInitialState: function() {
		return {
			letters: [],
		};
	},

	removeFromBank: function(letterToRemove) {
		var letters = this.state.letters;
		for (let letter of letters) {
			if (letterToRemove.id === letter.id) {
				letters.splice(letters.indexOf(letter), 1);
			}
		}
		this.setState({ letters: letters });
	},

	getDefaultProps: function() {
		return {
			quantity: 10
		};
	},

	componentDidMount: function() {
		var letters = generateLetters.bank(this.props.quantity);
		this.setState({ letters });
	},

	render: function() {
		var removeFromBank = this.removeFromBank
		var letters = this.state.letters.map(function(letter) {
			return ( <Letter remove={removeFromBank} id={letter.id} key={letter.id} value={letter.value} /> )
		});

		var style = { backgroundColor: this.props.colours.primary }

		return (
			<div className="letterBank">
				<div className="divider" style={style}></div>
				<ul className="letters">
					{letters}
				</ul>
			</div>
		);
	}
});

module.exports = LetterBank;