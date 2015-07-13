var React = require('react');
var Game = require('./game/Game.jsx');
var Menu = require('./menu/Menu.jsx');
var generateColours = require('../utils/generateColours');

var WordsWithEnemies = React.createClass({
	getInitialState: function() {
		return {
			colours: {},
			screen: 'menu'
		};
	},

	componentDidMount: function() {
		this.setState({
			colours: generateColours.game()
		});
	},

	render: function() {
		return (
			<div>
				<Menu colours={this.state.colours} />
				<div id="podge"></div>
			</div>
		);
	}
});


React.render(React.createElement(WordsWithEnemies), document.getElementById('game'));
