var React = require('react');
var Logo = require('./menu/Logo.jsx');
var MenuButtons = require('./menu/MenuButtons.jsx');
var generateColours = require('../utils/generateColours');

var Menu = React.createClass({
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
			<div className="menu">
				<div className="container">
					<Logo colours={this.state.colours} />
					<MenuButtons colours={this.state.colours} />
				</div>
			</div>
		);
	}

});

React.render(<Menu />, document.getElementById('app'))

// module.exports = Menu;